import { useCallback, useLayoutEffect, useMemo } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
  type Edge,
  type Node,
} from "reactflow";

import Dagre from "@dagrejs/dagre";
import { ClientOnly } from "remix-utils/client-only";

import type { TaxonomyLivePreviewProps } from "./Taxonomy.types";
import { TaxonomyNode } from "./TaxonomyNode";

/**
 * Tree Layout
 */

const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
  g.setGraph({ rankdir: "LR" });

  edges.forEach((edge) => g.setEdge(edge.source, edge.target));
  nodes.forEach((node) => g.setNode(node.id, { width: 180, height: 70 }));

  Dagre.layout(g);

  return {
    nodes: nodes.map((node) => {
      const { x, y } = g.node(node.id);

      return { ...node, position: { x, y } };
    }),
    edges,
  };
};

/**
 * Taxonomy Tree
 */

const TaxonomyTree = ({ taxonomyTree }: TaxonomyLivePreviewProps) => {
  const { fitView } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(taxonomyTree.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(taxonomyTree.edges);

  const nodeTypes = useMemo(
    () => ({
      taxonomyNode: TaxonomyNode,
    }),
    [],
  );

  const onLayout = useCallback(() => {
    const layouted = getLayoutedElements(nodes, edges);

    setNodes([...layouted.nodes]);
    setEdges([...layouted.edges]);

    window.requestAnimationFrame(() => {
      fitView();
    });
  }, [nodes, edges]);

  useLayoutEffect(() => {
    onLayout();
  }, []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      fitView
    />
  );
};

/**
 * Taxonomy LivePreview
 */

export const TaxonomyLivePreview = ({
  taxonomyTree,
}: TaxonomyLivePreviewProps) => {
  return (
    <ReactFlowProvider>
      <ClientOnly>
        {() => <TaxonomyTree taxonomyTree={taxonomyTree} />}
      </ClientOnly>
    </ReactFlowProvider>
  );
};

import { Handle, NodeProps, NodeToolbar, Position } from "reactflow";

import { cn } from "quickcheck-shared";

export const TaxonomyNode = ({ data }: NodeProps) => {
  return (
    <>
      {!data.highlight && (
        <NodeToolbar
          isVisible={data.toolbarVisible}
          position={data.toolbarPosition}
          className="rounded-sm bg-primary-75 px-3 py-2 text-contrast "
        >
          <a href={data.href} target="_blank">
            Open in new tab
          </a>
        </NodeToolbar>
      )}

      <div
        className={cn("react-flow__node-default", {
          "!border-primary !bg-primary !text-contrast": data.highlight,
        })}
      >
        {data.label}
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </>
  );
};

import { useEffect, useState } from "react";
import Tree from "react-d3-tree";
import { useMeasure } from "react-use";
import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { buildTaxonTrees, treeNodeToRawNodeDatum } from "~/models/taxonomy";

export const loader = async ({ request }: LoaderArgs) => {
  const taxonTrees = await buildTaxonTrees();
  const courses = taxonTrees.map((tree) =>
    treeNodeToRawNodeDatum(tree.rootNode),
  );

  return json({ courses });
};

const scaleExtent = { min: 0.5, max: 2 };

export default function Index() {
  const { courses } = useLoaderData<typeof loader>();

  const [ref, { width, height }] = useMeasure<HTMLDivElement>();

  const [treeIndex, setTreeIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  const courseData = courses[treeIndex];
  const courseName = courseData?.name;

  const onChangeCourse = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTreeIndex(parseInt(e.target.value, 10));
  };

  const [dimensions, setDimensons] = useState({
    width: 200,
    height: 200,
  });

  useEffect(() => {
    setDimensons({ width, height });
  }, [ref, width, height]);

  useEffect(() => {
    const handleMouseWheelZoom = (event: WheelEvent) => {
      const delta = Math.sign(event.deltaY);
      if (delta > 0 && zoom < scaleExtent.max) {
        setZoom(zoom + 0.1);
      } else if (delta < 0 && zoom > scaleExtent.min) {
        setZoom(zoom - 0.1);
      }
    };

    window.addEventListener("wheel", handleMouseWheelZoom);

    return () => {
      window.removeEventListener("wheel", handleMouseWheelZoom);
    };
  }, [zoom]);

  return (
    <div ref={ref} className="h-full">
      <Tree
        centeringTransitionDuration={800}
        orientation="vertical"
        data={courseData}
        dimensions={dimensions}
        translate={{ x: width / 2.5, y: height / 5 }}
        separation={{ siblings: 3, nonSiblings: 3 }}
        scaleExtent={scaleExtent}
        zoom={zoom}
        zoomable
        collapsible={false}
      />
      <div className="absolute right-3 top-3">
        <select value={courseName} onChange={onChangeCourse}>
          {courses.map(({ name }, index) => (
            <option value={index} key={index}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

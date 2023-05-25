import { useMeasure } from "react-use";

import { useNavigate } from "@remix-run/react";

import {
  BreakAction,
  BreakBackground,
  PageLayout,
} from "accelerate-learner-ui";

export default function Page() {
  const [bodyRef, { height: bodyHeight }] = useMeasure<HTMLDivElement>();
  const navigate = useNavigate();

  return (
    <PageLayout>
      <BreakBackground show bodyHeight={bodyHeight} />
      <div className="rounded-t-3xl bg-white">
        <div ref={bodyRef}>
          <div className="p-8">
            <BreakAction onClose={() => navigate("/")} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

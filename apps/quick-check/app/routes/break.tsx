import { useMeasure } from "react-use";
import { useNavigate } from "@remix-run/react";

import { Button, ResponsiveContainer } from "quickcheck-shared";

export default function Page() {
  const [bodyRef] = useMeasure<HTMLDivElement>();
  const navigate = useNavigate();

  return (
    <ResponsiveContainer>
      <div className="rounded-t-3xl bg-white">
        <div ref={bodyRef}>
          <div className="p-8">
            <Button onClick={() => navigate("/")} />
          </div>
        </div>
      </div>
    </ResponsiveContainer>
  );
}

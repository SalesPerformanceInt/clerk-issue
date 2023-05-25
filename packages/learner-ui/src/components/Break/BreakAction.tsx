import React, { FC } from "react";

import { Button } from "~/components";

import { BreakActionTypes } from "./BreakAction.types";

export const BreakAction: FC<BreakActionTypes> = ({ onClose }) => (
  <div className="flex justify-center space-x-5">
    <Button
      onClick={onClose}
      className="max-w-[200px] flex-[2] bg-lime-200 hover:bg-lime-300"
    >
      Go to dashboard
    </Button>
  </div>
);

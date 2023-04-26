import React from "react";

import { WhiteCircleX } from "~/components/images/WhiteCircleX";

import type { HeaderProps } from "./Header.types";

export const Header = ({ currentTopic, $, onClose }: HeaderProps) => {
  return (
    <div className="flex flex-col flex-wrap bg-indigo-950 px-5 pb-3 pt-4">
      <button onClick={onClose} className="items-cente flex p-2">
        <WhiteCircleX className="h-5 w-5" alt="close" />
      </button>

      <div className="self-end">
        <p className="text-white" {...$?.currentTopic}>
          Current Topic: <strong> {currentTopic} </strong>
        </p>
      </div>
    </div>
  );
};

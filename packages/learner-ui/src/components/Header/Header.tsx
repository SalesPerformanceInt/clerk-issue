import React from "react";

import { Link } from "@remix-run/react";

import type { HeaderProps } from "./Header.types";

export const Header = ({ currentTopic }: HeaderProps) => {
  return (
    <div className="flex flex-col flex-wrap bg-indigo-950 px-5 pb-3 pt-4">
      <Link to="/logout" className="items-cente flex p-2">
        <img className="h-5 w-5" alt="close" src="white-circle-x.svg" />
      </Link>

      <div className="self-end">
        <p className="text-white">
          Current Topic: <strong> {currentTopic} </strong>
        </p>
      </div>
    </div>
  );
};

import React, { FC } from "react";

import { BottomDrawer, Button, Container } from "~/components";

import type { TFChoicesProps } from "./TFChoices.types";

export const CHOICES_HEIGHT = 90;

export const TFChoices: FC<TFChoicesProps> = ({
  onChoiceSelect,
  offset = 0,
  tfquestion,
  show,
}) => {
  return (
    <BottomDrawer height={CHOICES_HEIGHT + offset} show={show}>
      <Container className="w-full border-t border-t-black bg-white px-8 py-5 ">
        <div className="flex justify-center space-x-5">
          <Button
            onClick={() => onChoiceSelect(false)}
            className="flex-1 bg-red-300 hover:bg-sky-300"
          >
            {tfquestion.falsey_label}
          </Button>
          <Button
            onClick={() => onChoiceSelect(true)}
            className="flex-1 bg-lime-200 hover:bg-yellow-200"
          >
            {tfquestion.truthy_label}
          </Button>
        </div>
      </Container>
    </BottomDrawer>
  );
};

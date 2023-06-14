import React from "react";

import { BottomDrawer, Button, Container } from "~/components";
import { useQuestionContext } from "~/components/Question";
import { ArrowRight } from "~/components/images/ArrowRight";

export const DRAWER_HEIGHT = 100;

export const QuestionAction = () => {
  const { showAction, offset = 0, onActionClick } = useQuestionContext();

  return (
    <BottomDrawer height={DRAWER_HEIGHT + offset} show={showAction}>
      <Container className="bg-plum-100 p-4">
        <Button
          className="bg-plum-75 hover:bg-plum-75/[.2] relative max-w-full text-base text-white"
          onClick={onActionClick}
        >
          Check Answer
          <ArrowRight
            alt="Arrow Right"
            className="absolute right-6 top-1/2 -translate-y-1/2"
          />
        </Button>
      </Container>
    </BottomDrawer>
  );
};

import React from "react";

import { BottomDrawer, Button, Container } from "~/components";
import { useQuestionContext } from "~/components/Question";

export const CONFIDENCE_HEIGHT = 125;

export const ConfidenceModal = () => {
  const {
    showConfidence,
    offset = 0,
    onConfidenceClick,
  } = useQuestionContext();
  return (
    <BottomDrawer height={CONFIDENCE_HEIGHT + offset} show={showConfidence}>
      <Container className="border-t border-t-black bg-white px-8 py-5">
        <p className="mb-4 text-sm">
          Rate how confident you are in your answer
        </p>
        <div className="flex justify-center space-x-5">
          <Button
            onClick={() => onConfidenceClick(50)}
            className="bg-sky-200hover:bg-sky-300 flex-1"
          >
            I don't know
          </Button>
          <Button
            onClick={() => onConfidenceClick(200)}
            className="flex-1 bg-yellow-100 hover:bg-yellow-200"
          >
            I'm not sure
          </Button>
          <Button
            onClick={() => onConfidenceClick(1000)}
            className="lex-1 bg-orange-200 hover:bg-orange-300"
          >
            I know this
          </Button>
        </div>
      </Container>
    </BottomDrawer>
  );
};

import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { twMerge } from "tailwind-merge";

import { Button } from "~/components";

import { useQuestionContext } from "../context";

export const OnCloseModal: FC = () => {
  const { showOnCloseModal, onClose, onCancelClose } = useQuestionContext();
  const { t } = useTranslation();

  if (!showOnCloseModal) return null;

  return (
    <div className="fixed right-0 left-0 top-0 bottom-0 w-full z-50">
      <div
        className="fixed right-0 left-0 top-0 bottom-0 w-full bg-black opacity-50"
        onClick={onCancelClose}
      />
      <div
        className={twMerge(
          "fixed left-0 right-0 bottom-0 mx-auto bg-background shadow-card flex flex-col gap-4 w-full p-6",
          "sm:max-w-sm sm:bottom-1/2 sm:translate-y-1/2 sm:box-content",
        )}
      >
        <h1 className="text-xl font-semibold leading-8">
          {t("question.close.header")}
        </h1>
        <p className="text-base font-normal leading-6">
          {t("question.close.body")}
        </p>
        <div className="flex gap-4">
          <Button
            background="light"
            variant="secondary"
            className="flex-1"
            onClick={onCancelClose}
          >
            {t("buttons.nevermind")}
          </Button>
          <Button background="light" className="flex-1" onClick={onClose}>
            {t("buttons.im_sure")}
          </Button>
        </div>
      </div>
    </div>
  );
};

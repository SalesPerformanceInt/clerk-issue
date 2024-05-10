import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FC,
  type ReactNode,
} from "react";
import { useMeasure, usePrevious } from "react-use";
import { useFetcher } from "@remix-run/react";

import { FormProps } from "remix-validated-form";

import { SurveyResponse } from "./surveySchema";

const useSurvey = (show: boolean) => {
  const [open, setOpen] = useState(show);
  const [toast, setToast] = useState(false);

  const [footerRef, { height: footerHeight = 0 }] =
    useMeasure<HTMLDivElement>();

  const prevShow = usePrevious(show);

  const fetcher = useFetcher();

  useEffect(() => {
    if (show !== prevShow && show && !open) setOpen(show);
  }, [show, open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "initial";

    return () => {
      document.body.style.overflow = "initial";
    };
  }, [open]);

  const onClose = () => setOpen(false);

  useEffect(() => {
    if (toast) {
      const toastTimeout = setTimeout(() => {
        setToast(false);
      }, 5000);

      return () => clearTimeout(toastTimeout);
    }
  }, [toast]);

  const makeOnDismiss = (sleep: boolean) => () => {
    fetcher.submit(
      { sleep },
      {
        method: "POST",
        action: "/dismissSurvey",
      },
    );
    onClose();
  };

  const onSubmit: FormProps<SurveyResponse, undefined>["onSubmit"] = (
    data,
    event,
  ) => {
    event.preventDefault();
    fetcher.submit(data, {
      method: "POST",
      action: "/survey",
    });
    onClose();
    setToast(true);
  };

  return {
    open,
    toast,
    onSubmit,
    makeOnDismiss,
    footerRef,
    footerHeight,
  };
};

export const SurveyContext = createContext<
  ReturnType<typeof useSurvey> | undefined
>(undefined);

export const useSurveyContext = () => {
  const context = useContext(SurveyContext);

  if (context === undefined) {
    throw new Error("useSurveyContext must be used within a provider");
  }

  return context;
};

export interface SurveyContextProviderProps {
  children: ReactNode;
  show: boolean;
}

export const SurveyContextProvider: FC<SurveyContextProviderProps> = ({
  children,
  show,
}) => {
  const value = useSurvey(show);

  return (
    <SurveyContext.Provider value={value}>{children}</SurveyContext.Provider>
  );
};

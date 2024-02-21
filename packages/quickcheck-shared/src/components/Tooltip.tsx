import React, {
  Fragment,
  isValidElement,
  type FC,
  type ReactElement,
} from "react";
import { useTranslation } from "react-i18next";

import {
  faCircleInfo,
  faCircleQuestion,
} from "@fortawesome/pro-light-svg-icons";
import * as RadixPopover from "@radix-ui/react-popover";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { twMerge } from "tailwind-merge";

import { useIsDesktop } from "~qcs/utils/useIsDesktop";

import { Icon } from "./Icon";

export type TooltipProps = {
  texts: (string | ReactElement)[];
  triggerClassName?: string;
  contentClassName?: string;
  ariaLabel: string;
  type?: "info" | "question";
  closeButton?: boolean;
};

const parseText = (text: string | ReactElement) => {
  const Wrapper = isValidElement(text) ? Fragment : "p";

  return <Wrapper key={text.toString()}>{text}</Wrapper>;
};

export const Tooltip: FC<TooltipProps> = ({
  texts,
  triggerClassName,
  contentClassName,
  ariaLabel,
  closeButton = true,
  type = "info",
}) => {
  const isDesktop = useIsDesktop();
  const { t } = useTranslation();

  if (!texts.length) return null;

  const icon = type === "info" ? faCircleInfo : faCircleQuestion;

  return (
    <>
      {texts && isDesktop && (
        <RadixTooltip.Provider>
          <RadixTooltip.Root delayDuration={0}>
            <RadixTooltip.Trigger
              className={twMerge(
                "ml-1 cursor-default text-[0.5rem]",
                triggerClassName,
              )}
              aria-label={`${ariaLabel} ${t("common.tooltip.aria_label")}`}
            >
              <Icon icon={icon} className="text-size-inherit" />
            </RadixTooltip.Trigger>

            <RadixTooltip.Portal>
              <RadixTooltip.Content
                side="bottom"
                sideOffset={2}
                align="start"
                alignOffset={-60}
                className={twMerge(
                  "flex flex-col gap-2 rounded-sm bg-text p-2 text-xs font-semibold text-contrast",
                  contentClassName,
                )}
              >
                <RadixTooltip.Arrow className="fill-current" />

                {texts.map((text) => parseText(text))}
              </RadixTooltip.Content>
            </RadixTooltip.Portal>
          </RadixTooltip.Root>
        </RadixTooltip.Provider>
      )}

      {texts && !isDesktop && (
        <RadixPopover.Root>
          <RadixPopover.Trigger
            className={twMerge(
              "ml-1 cursor-default text-[0.5rem]",
              triggerClassName,
            )}
            aria-label={`${ariaLabel} ${t("common.popover.aria_label")}`}
          >
            <Icon icon={icon} className="text-size-inherit" />
          </RadixPopover.Trigger>

          <RadixPopover.Portal>
            <RadixPopover.Content
              side="bottom"
              sideOffset={2}
              align="start"
              alignOffset={-60}
              className={twMerge(
                "flex max-w-[280px] flex-col gap-3 rounded-sm bg-text p-2 text-xs font-semibold text-contrast",
                contentClassName,
              )}
            >
              <RadixPopover.Arrow className="fill-current" />

              {texts.map((text) => parseText(text))}

              {closeButton && (
                <RadixPopover.Close className="ml-auto mt-2 w-fit px-2 py-1 text-right uppercase outline-primary-50">
                  {t("common.tooltip.close")}
                </RadixPopover.Close>
              )}
            </RadixPopover.Content>
          </RadixPopover.Portal>
        </RadixPopover.Root>
      )}
    </>
  );
};

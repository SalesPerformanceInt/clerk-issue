import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { faCircleInfo } from "@fortawesome/pro-light-svg-icons";
import * as RadixPopover from "@radix-ui/react-popover";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { twMerge } from "tailwind-merge";

import { useIsDesktop } from "~/utils/useIsDesktop";

import { Icon } from "./Icon";

export type TooltipProps = {
  texts: string[];
  triggerClassName?: string;
  contentClassName?: string;
  ariaLabel: string;
};

export const Tooltip: FC<TooltipProps> = ({
  texts,
  triggerClassName,
  contentClassName,
  ariaLabel,
}) => {
  const isDesktop = useIsDesktop();
  const { t } = useTranslation();

  if (!texts.length) return null;

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
              <Icon icon={faCircleInfo} className="text-size-inherit" />
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
                <RadixTooltip.Arrow />

                {texts.map((text) => (
                  <p key={text}>{text}</p>
                ))}
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
            <Icon icon={faCircleInfo} className="text-size-inherit" />
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
              <RadixPopover.Arrow />

              {texts.map((text) => (
                <p key={text}>{text}</p>
              ))}

              <RadixPopover.Close className="mt-2 text-right uppercase">
                {t("common.tooltip.close")}
              </RadixPopover.Close>
            </RadixPopover.Content>
          </RadixPopover.Portal>
        </RadixPopover.Root>
      )}
    </>
  );
};

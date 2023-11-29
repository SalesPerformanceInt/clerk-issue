import React, { FC } from "react";

import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import parse from "html-react-parser";
import { TFunction } from "i18next";
import { chunk } from "remeda";
import { twMerge } from "tailwind-merge";

import { getVariant, type QuestionItem, type Taxon } from "quickcheck-shared";

import { theme } from "../../../tailwind.config";

interface QuickcheckInactivityEmailProps {
  questionItem: QuestionItem;
  enrollmentTaxonomy: Taxon;
  loginUrl: string;
  questionId: string;
  t: TFunction;
}

export const QuickcheckInactivityEmail: FC<QuickcheckInactivityEmailProps> = ({
  questionItem,
  enrollmentTaxonomy,
  loginUrl,
  questionId,
  t,
}) => {
  const questionVariant = getVariant(questionItem, "mcquestion");

  if (!questionVariant || "mcquestion" in questionVariant === false)
    return null;

  return (
    <Tailwind config={{ theme }}>
      <Html lang="en" dir="ltr">
        <Head>
          <meta name="color-scheme" content="light" />
          <meta name="supported-color-schemes" content="light" />
          <style>
            {`
              @font-face {
                font-family: "Open Sans", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                src: url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-mu0SC55I.woff2) format(woff2);
              }
            `}
          </style>
        </Head>
        <Body className="bg-background font-sans">
          <Container className="max-w-screen-sm">
            <Section className="w-full">
              <Row>
                <Column width={24} valign="middle">
                  <Img
                    src="https://images.contentstack.io/v3/assets/blt3b8f9cf7e4afc157/blta07f38a2365c09a8/64de55a62b55ebbbe940d6ab/richardson_r.png"
                    width={24}
                    height={24}
                    alt="Richardson"
                  />
                </Column>
                <Column valign="middle">
                  <Heading className="m-0 ml-2 text-xxl font-semibold leading-8 text-text">
                    {t("common.quickcheck")}
                  </Heading>
                </Column>
              </Row>

              <Row className="mt-2">
                <Column className="rounded-smd w-full bg-primary p-4">
                  <Button
                    href={loginUrl}
                    className="w-full whitespace-pre-line text-xs leading-4 text-contrast"
                  >
                    {t("emails.inactive.jump_back")}
                  </Button>
                </Column>
              </Row>
            </Section>
            <Section className="mt-4">
              <Text className="m-0 text-base font-bold text-primary-75">
                {enrollmentTaxonomy.display_name}
              </Text>
              <Text className="m-0 text-xs font-semibold uppercase text-primary-75">
                {questionItem.topic[0]?.display_name}
              </Text>
            </Section>
            <Section className="mt-2">
              <Text className="m-0 text-base text-primary">
                {parse(questionVariant.mcquestion.stem)}
              </Text>
            </Section>
            <Section className="pt-4">
              {questionVariant.mcquestion.choices.map(({ choice }, index) => {
                const path = `/question/${questionId}?c=${choice._metadata.uid}`;

                return (
                  <Row key={choice._metadata.uid} className="w-full pb-2">
                    <Column
                      key={choice._metadata.uid}
                      className="h-full w-full"
                    >
                      <Section className="h-full w-full bg-background-secondary px-4 py-2">
                        <Link
                          href={`${loginUrl}?p=${path}`}
                          target="_blank"
                          className="h-full leading-[0] text-primary"
                        >
                          <Text className="!inline text-xs">
                            {parse(
                              choice.body
                                .replace("<p>", "")
                                .replace("</p>", ""),
                            )}
                          </Text>
                        </Link>
                      </Section>
                    </Column>
                  </Row>
                );
              })}
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

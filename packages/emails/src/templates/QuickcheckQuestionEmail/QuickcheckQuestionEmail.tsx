import React, { FC } from "react";

import {
  Body,
  Button,
  Column,
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
import { chunk } from "remeda";
import { twMerge } from "tailwind-merge";

// export const stripHTML = (html?: string) =>
//   html?.replace(/<\/?[^>]+(>|$)/g, "");

import {
  getVariant,
  stripHTML,
  type QuestionItem,
  type Taxon,
} from "quickcheck-shared";

import { theme } from "../../../tailwind.config";

interface QuickcheckQuestionEmailProps {
  questionItem: QuestionItem;
  enrollmentTaxonomy: Taxon;
  token?: string;
  domain?: string;
  questionId?: string;
}

// https://images.contentstack.io/v3/assets/blt3b8f9cf7e4afc157/bltad840a2cf8afb8dc/richardson_logo

export const QuickcheckQuestionEmail: FC<QuickcheckQuestionEmailProps> = ({
  questionItem,
  enrollmentTaxonomy,
  token = "foo",
  domain = "example.com",
  questionId = "questionId",
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
                font-family: Open Sans;
                mso-font-alt: Helvetica;
                src: url(https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-mu0SC55I.woff2) format(woff2);
              }
            `}
          </style>
        </Head>
        <Body className="font-sans bg-background">
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
                <Heading className="m-0 ml-8 text-xxl font-semibold leading-8 text-text">
                  QuickCheck2
                </Heading>
              </Column>
            </Row>
          </Section>
          <Section className="mt-6">
            <Text className="text-primary-75 font-bold text-base m-0">
              {enrollmentTaxonomy.display_name}
            </Text>
            <Text className="text-primary-75 text-xs font-semibold uppercase m-0">
              {questionItem.topic[0]?.display_name}
            </Text>
          </Section>
          <Section className="mt-2">
            <Text className="text-base text-primary m-0">
              {stripHTML(questionVariant.mcquestion.stem)}
            </Text>
          </Section>
          <Section className="mt-4">
            {chunk(questionVariant.mcquestion.choices ?? [], 2).map(
              (pairs, index) => (
                <Row
                  key={index}
                  className="border-separate sm:mb-2 w-full"
                  style={
                    {
                      // width: "calc(100% + 16px)",
                    }
                  }
                >
                  {pairs.map(({ choice }, index) => {
                    const path = `/q/${questionId}?c=${choice._metadata.uid}`;

                    return (
                      <Column
                        key={choice._metadata.uid}
                        className={twMerge(
                          "w-full block sm:table-cell mb-2 sm:mb-0 sm:w-1/2 sm:h-1 border-0 border-solid border-transparent",
                          index % 2 === 0 ? "sm:border-r-4" : "sm:border-l-4",
                        )}
                      >
                        <Link
                          href={`${domain}/t/${token}?p=${path}`}
                          target="_blank"
                          className="h-full block bg-background-secondary rounded-sm"
                        >
                          <Section className="text-primary text-xs py-2 px-4 h-full">
                            {stripHTML(choice.body)}
                          </Section>
                        </Link>
                      </Column>
                    );
                  })}
                </Row>
              ),
            )}
            <Row className="mt-4">
              <Column className="w-full bg-primary p-2 rounded-smd">
                <Button
                  href={`${domain}/t/${token}`}
                  className="text-xs leading-4 text-contrast w-full  whitespace-pre"
                >
                  {
                    "You have 24 unanswered questions from 3 courses/capabilities.\nJump back into QuickCheck to achieve points!"
                  }
                </Button>
              </Column>
            </Row>
          </Section>
        </Body>
      </Html>
    </Tailwind>
  );
};
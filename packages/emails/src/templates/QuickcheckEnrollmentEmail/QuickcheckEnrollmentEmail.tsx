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
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import parse from "html-react-parser";
import { TFunction } from "i18next";

import type { Taxon, UserData } from "quickcheck-shared";

import { theme } from "../../../tailwind.config";

interface QuickcheckEnrollmentEmailProps {
  enrollmentTaxonomy: Taxon;
  loginUrl: string;
  questionId: string;
  t: TFunction;
  userData: UserData;
}

export const QuickcheckEnrollmentEmail: FC<QuickcheckEnrollmentEmailProps> = ({
  enrollmentTaxonomy,
  loginUrl,
  questionId,
  userData,
  t,
}) => {
  const path = `/question/${questionId}`;

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
            </Section>
            <Section>
              <Text className="m-0 text-base text-text">
                {parse(
                  t("email.enrollment.body", {
                    first_name: userData.first_name,
                    course_name: enrollmentTaxonomy.display_name,
                  }),
                )}
              </Text>
            </Section>
            <Section>
              <Button
                href={`${loginUrl}?p=${path}`}
                className="bg-primary px-6 py-2 text-base leading-6 text-contrast"
              >
                {t("email.enrollment.button")}
              </Button>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

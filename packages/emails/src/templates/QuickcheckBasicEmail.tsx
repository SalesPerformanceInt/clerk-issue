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

import { theme } from "../../tailwind.config";

interface QuickcheckBasicEmailProps {
  t: TFunction;
  greetingsText: string;
  bodyText: string;
  button: {
    text: string;
    url: string;
  };
  footerText?: string;
}

export const QuickcheckBasicEmail: FC<QuickcheckBasicEmailProps> = ({
  t,
  greetingsText,
  bodyText,
  button,
  footerText,
}) => {
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
              <Text className="m-0 mt-2 text-base text-text">
                {greetingsText}
              </Text>
              <Text className="m-0 mt-2 text-base text-text">
                {parse(bodyText)}
              </Text>
            </Section>
            <Section
              className="mt-4 w-min rounded-sm bg-primary px-6 py-2"
              align="left"
              width="quickcheck"
            >
              <Button
                href={button.url}
                className="whitespace-nowrap text-base leading-[0] text-contrast no-underline"
              >
                {button.text}
              </Button>
            </Section>
            {footerText && (
              <Section className="mt-4">
                <Text className="text-base text-text-25">
                  {parse(footerText)}
                </Text>
              </Section>
            )}
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { Card, ResponsiveContainer, Section } from "quickcheck-shared";

import {
  EnrollmentHeader,
  EnrollmentOverviewSection,
  EnrollmentSkillsSection,
} from "./components";

import {
  EnrollmentContextProvider,
  type EnrollmentContextProps,
} from "./context/EnrollmentContext";

interface EnrollmentProps extends EnrollmentContextProps {}

export const Enrollment: FC<EnrollmentProps> = ({ enrollment }) => {
  const { t } = useTranslation();

  return (
    <EnrollmentContextProvider enrollment={enrollment}>
      <EnrollmentHeader />
      <ResponsiveContainer className="p-4">
        <EnrollmentOverviewSection />
        <EnrollmentSkillsSection />
      </ResponsiveContainer>
    </EnrollmentContextProvider>
  );
};

import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { EnrollmentSkillCard, Section } from "quickcheck-shared";

import { getEnrollmentSkills } from "~/models/enrollment";

import { useEnrollmentContext } from "~/pages/Enrollment";

export const EnrollmentSkillsSection: FC = () => {
  const { enrollment } = useEnrollmentContext();
  const { t } = useTranslation();

  const skills = getEnrollmentSkills(enrollment);

  return (
    <Section
      title={t("common.skills")}
      tooltip={[
        t("enrollment.dashboard.skills.tooltip_baseline"),
        t("enrollment.dashboard.skills.tooltip_current"),
      ]}
    >
      {skills.map((skill) => (
        <EnrollmentSkillCard
          key={skill.skill}
          className="flow h-fit w-full flex-grow overflow-hidden md:w-1/2-gap-8"
          {...skill}
        />
      ))}
    </Section>
  );
};

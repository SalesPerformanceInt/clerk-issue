import { useState, type FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "@remix-run/react";

import { EnrollmentSkillCard, Section } from "quickcheck-shared";

import { getEnrollmentSkills } from "~/models/enrollment/handlers/getEnrollmentSkills";

import { useEnrollmentContext } from "~/pages/Enrollment";

export const EnrollmentSkillsSection: FC = () => {
  const [enrollmentSkillNavigation, setEnrollmentSkillNavigation] =
    useState<string>();

  const { enrollment } = useEnrollmentContext();

  const { t } = useTranslation();
  const navigate = useNavigate();

  const skills = getEnrollmentSkills(enrollment.user_questions);

  const goToEnrollmentSkill = (skillId: string) => {
    setEnrollmentSkillNavigation(skillId);

    navigate(`/dashboard/enrollment/${enrollment.id}/skill/${skillId}`);
  };

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
          categories={["baseline", "current"]}
          className="flow h-fit w-full flex-grow overflow-hidden md:w-1/2-gap-8"
          onClick={(skillId) => goToEnrollmentSkill(skillId)}
          loading={enrollmentSkillNavigation === skill.id}
          {...skill}
        />
      ))}
    </Section>
  );
};

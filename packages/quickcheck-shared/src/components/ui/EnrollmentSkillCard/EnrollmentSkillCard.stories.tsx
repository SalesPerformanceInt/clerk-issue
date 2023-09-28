import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Card, CardTitle } from "~/components/ui/Card";

import { EnrollmentSkillCard as EnrollmentSkillCardComponent } from "./EnrollmentSkillCard";
import { EnrollmentSkillCardDecorator } from "./EnrollmentSkillCard.template";

const meta = {
  component: EnrollmentSkillCardComponent,
  title: "ui/EnrollmentSkillCard",
  decorators: [EnrollmentSkillCardDecorator],
} satisfies Meta<typeof EnrollmentSkillCardComponent>;

type Story = StoryObj<typeof meta>;

/**
 * Progress Item
 */

export const EnrollmentSkillCard = {
  args: {
    skill: "Skill Title",
    baseline: 30,
    current: 55,
    unanswered: false,
  },
  argTypes: {
    baseline: { control: { type: "range", min: 0, max: 100 } },
    current: { control: { type: "range", min: 0, max: 100 } },
  },
} satisfies Story;

export default meta;

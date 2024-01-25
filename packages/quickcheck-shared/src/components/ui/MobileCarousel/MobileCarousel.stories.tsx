import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardTitle } from "~qcs/components/ui/Card";

import { MobileCarousel as MobileCarouselComponent } from "./MobileCarousel";
import { MobileCarouselDecorator } from "./MobileCarousel.template";

const meta = {
  component: MobileCarouselComponent,
  title: "ui/Mobile Carousel",
  decorators: [MobileCarouselDecorator],
} satisfies Meta<typeof MobileCarouselComponent>;

type Story = StoryObj<typeof meta>;

export const MobileCarousel = {
  args: {
    children: <></>,
    title: "Storbybook",
  },
  render: ({ title }) => (
    <MobileCarouselComponent title={title}>
      <Card>
        <CardTitle title="Mobile Carousel" className="p-6" />
      </Card>

      <Card>
        <CardTitle title="Mobile Carousel" className="p-6" />
      </Card>

      <Card>
        <CardTitle title="Mobile Carousel" className="p-6" />
      </Card>
    </MobileCarouselComponent>
  ),
} satisfies Story;

export default meta;

import { Section as SectionComponent } from "./Section";
import { SectionHeader } from "./SectionHeader";

export const Section = Object.assign(SectionComponent, {
  Header: SectionHeader,
});

export type { SectionHeaderProps } from "./SectionHeader";

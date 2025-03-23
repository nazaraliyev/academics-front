import { Page, SectionAbsenteeism, SectionCourses, SectionGoal, SectionPrices } from '@/components';
import { Stack } from '@mantine/core';
import React from 'react';

export default function HomePage() {
  return (
    <Page>
      <Stack gap={40}>
        <SectionGoal />
        <SectionAbsenteeism />
        <SectionCourses />
        <SectionPrices />
      </Stack>
    </Page>
  );
}

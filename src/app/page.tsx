import { Page, SectionGoal, SectionPrices } from '@/components';
import { Stack } from '@mantine/core';
import React from 'react';

export default function HomePage() {
  return (
    <Page>
      <Stack gap={20}>
        <SectionGoal />
        <SectionPrices/>
      </Stack>
    </Page>
  );
}

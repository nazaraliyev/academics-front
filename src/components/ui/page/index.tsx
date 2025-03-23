import React from 'react';
import { Stack } from '@mantine/core';
import PageFooter from './components/footer';

export default function Page(props: React.PropsWithChildren) {
  return (
    <Stack gap={20}>
      <div>{props.children}</div>
      <PageFooter />
    </Stack>
  );
}

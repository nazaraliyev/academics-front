import React from 'react';
import { Stack } from '@mantine/core';
import PageFooter from './components/footer';

interface Props {}
export default function Page(props: React.PropsWithChildren<Props>) {
  return (
    <Stack gap={20}>
      <div>{props.children}</div>
      <PageFooter />
    </Stack>
  );
}

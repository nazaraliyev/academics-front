"use client";
import React from "react";
import { AppShell, Box, Flex } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";

import AppLayoutHeader from "./components/header";
import AppLayoutContainer from "./components/container";
import AppLayoutFooter from "./components/footer";

export default function AppLayout(props: React.PropsWithChildren) {
  // Hooks
  const pinned = useHeadroom({ fixedAt: 60 });

  return (
    <AppShell withBorder={false} header={{ height: 60, collapsed: false }}>
      <AppShell.Header>
        <AppLayoutHeader />
      </AppShell.Header>

      <AppShell.Main>
        <Flex direction={"column"} mih={"calc(100vh - 60px)"}>
          <Box flex={1}>
            <AppLayoutContainer>{props.children}</AppLayoutContainer>
          </Box>
          <AppLayoutFooter />
        </Flex>
        <Box></Box>
      </AppShell.Main>
    </AppShell>
  );
}

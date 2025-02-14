import React from "react";
import { Box, Button, Flex, Text } from "@mantine/core";
import { LuSearch } from "react-icons/lu";

import AppLayoutContainer from "../container";

import AppLayoutHeaderCourses from "./components/courses";
import AppLayoutHeaderAccount from "./components/account";
import AppLayoutHeaderNotification from "./components/notification";
import AppLayoutHeaderContinuity from "./components/continuity";

export default function AppLayoutHeader() {
  return (
    <AppLayoutContainer bg>
      <Flex h={"100%"} align={"center"} justify={"space-between"}>
        <Flex gap={12} align={"center"}>
          <Text fw={900} fz={20} c={"#fca311"}>Akademik</Text>
          <Menu user={true} />
        </Flex>
        <Buttons user={true} />
      </Flex>
    </AppLayoutContainer>
  );
}

const Menu = (props: { user: boolean }) => {
  return (
    <Flex>
      {props.user && (
        <>
          <Button p={8} c={"var(--academic-white)"} variant="subtle">
            Cari Kurs
          </Button>
          <Button p={8} c={"var(--academic-white)"} variant="subtle">
            Imtahanlar
          </Button>
        </>
      )}
      <AppLayoutHeaderCourses />
      <Button p={8} c={"var(--academic-white)"} variant="subtle">
        Planlar
      </Button>
    </Flex>
  );
};

const Buttons = (props: { user: boolean }) => {
  return (
    <Flex gap={8}>
      {props.user ? (
        <>
          <Button leftSection={<LuSearch />} variant="secondary">
            Search
          </Button>
          <AppLayoutHeaderContinuity />
          <AppLayoutHeaderNotification />
          <AppLayoutHeaderAccount />
        </>
      ) : (
        <>
          <Button variant="secondary">Giris</Button>
          <Button variant="primary">Indi basla</Button>
        </>
      )}
    </Flex>
  );
};

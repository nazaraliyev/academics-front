import React from "react";
import styles from "./styles.module.scss";
import { Button, Center, Flex, Text, TextInput } from "@mantine/core";
import { Logo } from "@/components";
import { ChevronIcon, SearchIcon, UserIcon } from "@/assets/icons";

export default function LayoutHeader() {
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      className={"radius--xl"}
      bg={"var(--academic-white)"}
      h={72}
      my={20}
      p={20}
    >
      <Flex gap={40}>
        <Logo />
        <Menu />
      </Flex>

      <Flex gap={10}>
        <Search />
        <Account />
      </Flex>
    </Flex>
  );
}
const Menu = () => {
  return (
    <Flex gap={20}>
      {menus.map((menu, index) => (
        <Button
          key={index}
          className={"radius--md"}
          variant="subtle"
          color="var(--academic-grey)"
        >
          <Text span c={"var(--academic-text)"}>{menu.name}</Text>
        </Button>
      ))}
    </Flex>
  );
};

const Search = () => {
  return (
    <TextInput
      leftSection={<SearchIcon />}
      radius={20}
      readOnly
      placeholder="Axtarış"
      classNames={{
        input: styles.search,
        section: styles.search_section,
      }}
    />
  );
};

const Account = () => {
  return (
    <Button
      rightSection={<ChevronIcon {...{width:16, height:16, color:"var(--academic-text)"}}/>}
      px={2}
      h={40}
      radius={20}
      color="var(--academic-grey-light)"
    >
      <Center
        className="radius--full"
        w={32}
        h={32}
        bg={"var(--academic-primary)"}
      >
        <UserIcon />
      </Center>
    </Button>
  );
};

const menus = [
  {
    name: "Cari kurs",
    path: "/",
  },
  {
    name: "Kurslar",
    path: "/",
  },
  {
    name: "İmtahan",
    path: "/",
  },
  {
    name: "Şəxsi kabinet",
    path: "/",
  },
];

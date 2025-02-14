import { Box, Flex, Text } from "@mantine/core";
import React from "react";

export default function page() {
  return (
    <Flex direction={"column"} gap={20}>
      <Select />
    </Flex>
  );
}

const Select = () => {
  return (
    <Flex
      gap={20}
      align={"center"}
      justify={"center"}
      direction={"column"}
      mih={"calc(100vh - 60px)"}
    >
      <Text fz={50} fw={600} c={"var(--academic-dark)"}>
        Nə İstəyirsiniz?
      </Text>
      <Flex gap={20}>
        <Card label="Lorem ipsum dolar halah" icon="" />
        <Card label="Lorem ipsum dolar halah" icon="" />
      </Flex>
    </Flex>
  );
};

const Card = (props: { label: string; icon: React.ReactNode }) => {
  return (
    <Flex
      direction={"column"}
      gap={20}
      w={400}
      h={300}
      p={40}
      align={"center"}
      justify={"center"}
      bg={"var(--academic-dark)"}
      style={{ borderRadius: 20 }}
    >
      <Box w={150} h={150}>
        {props.icon}
      </Box>
      <Text fz={16}>{props.label}</Text>
    </Flex>
  );
};

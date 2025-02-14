import React from "react";
import { Box, Container } from "@mantine/core";

interface Props extends React.PropsWithChildren {
  bg?: boolean;
}
export default function AppLayoutContainer(props: Props) {
  return (
    <Box h={"100%"} bg={props.bg ? "var(--academic-dark)" : undefined}>
      <Container size={"xl"} h={"100%"}>
        {props.children}
      </Container>
    </Box>
  );
}

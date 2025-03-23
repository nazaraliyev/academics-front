import React from "react";
import { Container } from "@mantine/core";
import LayoutHeader from "./components/header";

export default function Layout(props: React.PropsWithChildren) {
  return (
    <Container size={1280}>
      <LayoutHeader />
      <main>{props.children}</main>
    </Container>
  );
}

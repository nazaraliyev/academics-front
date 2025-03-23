"use client";
import React from "react";
import { AppShell, Container, Stack } from "@mantine/core";
import LayoutHeader from "./components/header";

export default function Layout(props: React.PropsWithChildren) {
  // States
  return (
    <Container size={1280}>
      <LayoutHeader />
      <main>{props.children}</main>
    </Container>
  );
}

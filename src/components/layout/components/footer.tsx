"use client";
import React from "react";
import AppLayoutContainer from "./container";
import { Box, Divider, Flex, Grid, Text } from "@mantine/core";
import {
  FaDiscord,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

export default function AppLayoutFooter() {
  return (
    <AppLayoutContainer bg>
      <Flex pt={50} pb={20} direction={"column"} gap={20}>
        {/* <Text fw={900} fz={40} c={"#fca311"}>
          Akademik
        </Text>
        <Grid>
          <Grid.Col span={4}>
            <Flex direction={"column"} gap={6}>
              <Text fz={18} c={"var(--academic-white)"}>
                Haqqimizda
              </Text>
              <Text c={"var(--academic-grey-2)"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                non quae placeat voluptas molestiae dicta deleniti enim officiis
                fugiat odit autem blanditiis suscipit tempore, fuga fugit!
                Voluptate unde veritatis ipsum!
              </Text>
            </Flex>
          </Grid.Col>
          <Grid.Col span={4}>
            <Flex direction={"column"} gap={6}>
              <Text fz={18} c={"var(--academic-white)"}>
                Contact
              </Text>
              <Text c={"var(--academic-grey-2)"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                non quae placeat voluptas molestiae dicta deleniti enim officiis
                fugiat odit autem blanditiis suscipit tempore, fuga fugit!
                Voluptate unde veritatis ipsum!
              </Text>
            </Flex>
          </Grid.Col>
          <Grid.Col span={4}>
            <Flex direction={"column"} gap={6}>
              <Text fz={18} c={"var(--academic-white)"}>
                Linkler
              </Text>
              <Text c={"var(--academic-grey-2)"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                non quae placeat voluptas molestiae dicta deleniti enim officiis
                fugiat odit autem blanditiis suscipit tempore, fuga fugit!
                Voluptate unde veritatis ipsum!
              </Text>
            </Flex>
          </Grid.Col>
        </Grid> */}
        <Grid>
          <Grid.Col span={4}>
            <Text fw={900} fz={40} c={"#fca311"}>
              Akademik
            </Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <List label="Linkler" items={links} />
          </Grid.Col>
          <Grid.Col span={2}>
            <List label="Linkler" items={links} />
          </Grid.Col>
          <Grid.Col span={2}>
            <List label="Linkler" items={links} />
          </Grid.Col>
          <Grid.Col span={2}>
            <List label="Linkler" items={links} />
          </Grid.Col>
        </Grid>
        <Divider mt={20}/>
        <Flex justify={"space-between"} align={"center"}>
          <Flex align={"center"} gap={30}>
            <Text>© 2025 Akademik.</Text>
            <Flex gap={16}>
              <Link href={""}>
                <Text td={"underline"}>Terms</Text>
              </Link>
              <Link href={""}>
                <Text td={"underline"}>Privacy</Text>
              </Link>
            </Flex>
          </Flex>
          <Flex gap={12} align={"center"}>
            <FaFacebook size={20} />
            <FaLinkedin size={20} />
            <FaDiscord size={20} />
            <AiFillInstagram size={20} />
            <FaTiktok size={16} />
            <FaYoutube size={20} />
          </Flex>
        </Flex>
      </Flex>
    </AppLayoutContainer>
  );
}

interface ListProps {
  label: string;
  items: { label: string; href: string }[];
}
const List: React.FC<ListProps> = (props) => {
  return (
    <Flex direction={"column"} gap={16}>
      <Text>{props.label}</Text>
      <Flex direction={"column"} gap={6}>
        {props.items.map((item) => (
          <Link href={item.href} style={{ textDecoration: "none" }}>
            <Text c={"var(--academic-grey-2)"}>{item.label}</Text>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

const links = [
  {
    label: "Ana sehife",
    href: "/",
  },
  {
    label: "Haqqimizda",
    href: "/",
  },
  {
    label: "Kurslar",
    href: "/",
  },
  {
    label: "Planlar",
    href: "/",
  },
];

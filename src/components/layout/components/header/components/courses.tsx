import { Button, HoverCard } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function AppLayoutHeaderCourses() {
    // States
  const [opened, { open, close }] = useDisclosure(false);
  
  return (
    <HoverCard onOpen={open} onClose={close}>
      <HoverCard.Target>
        <Button
          variant="subtle"
          p={8}
          c={"var(--academic-white)"}
          styles={{ section: { marginInlineStart: 4 } }}
          rightSection={
            <IoIosArrowForward
              style={{
                transition: "0.2s",
                transform: `rotate(${opened ? 90 : 0}deg)`,
              }}
            />
          }
        >
          Kusrlar
        </Button>
      </HoverCard.Target>
      <HoverCard.Dropdown></HoverCard.Dropdown>
    </HoverCard>
  );
}

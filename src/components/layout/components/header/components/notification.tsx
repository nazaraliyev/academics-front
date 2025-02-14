import React from "react";
import { Button, Popover } from "@mantine/core";
import { HiMiniBell } from "react-icons/hi2";


export default function AppLayoutHeaderNotification() {
  return (
    <Popover position="bottom-end">
      <Popover.Target>
        <Button variant="secondary" w={32} h={32} p={0}>
          <HiMiniBell size={16} color="var(--academic-white)" />
        </Button>
      </Popover.Target>
    </Popover>
  );
}

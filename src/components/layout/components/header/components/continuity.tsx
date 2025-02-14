import React from "react";
import { Button, Popover } from "@mantine/core";
import { FaFire } from "react-icons/fa";


export default function AppLayoutHeaderContinuity() {
  return (
    <Popover position="bottom-end">
      <Popover.Target>
        <Button variant="secondary" w={32} h={32} p={0}>
          <FaFire size={16} color="var(--academic-white)" />
        </Button>
      </Popover.Target>
    </Popover>
  );
}

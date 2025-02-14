import React from "react";
import { Button, Popover } from "@mantine/core";
import { FaUser } from "react-icons/fa";

export default function AppLayoutHeaderAccount() {
  return (
    <Popover position="bottom-end">
      <Popover.Target>
        <Button variant="secondary" w={32} h={32} p={0}>
          <FaUser size={16} color="var(--academic-white)" />
        </Button>
      </Popover.Target>
    </Popover>
  );
}

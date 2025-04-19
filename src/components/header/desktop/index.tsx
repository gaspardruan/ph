import { softwareConfig } from "@/routes/doc-config";
import { SystemButtonGroup } from "../SystemButtonGroup";
import { Dropdown } from "./Dropdown";
import { TextButton } from "./TextButton";
import { memo } from "react";

export const DesktopNav = memo(function DesktopNav() {
  return (
    <div className="hidden md:flex divide-x divide-nord-neutral/10 dark:divide-nord-neutral-dark/10">
      <div className="flex pr-2 lg:pr-6 gap-2 lg:gap-6">
        <TextButton text="Project">
          <Dropdown {...softwareConfig} />
        </TextButton>
      </div>
      <SystemButtonGroup />
    </div>
  );
});

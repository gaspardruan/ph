export type DocConfigItem = {
  scope: string;
  items: string[];
};

export const softwareConfig: DocConfigItem = {
  scope: "project",
  items: ["pflux", "mmimage"],
};

export const docConfig: DocConfigItem[] = [softwareConfig];

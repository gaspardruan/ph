export type DocConfigItem = {
  scope: string;
  items: string[];
};

export const softwareConfig: DocConfigItem = {
  scope: "software",
  items: ["pflux", "mmimage"],
};

export const docConfig: DocConfigItem[] = [softwareConfig];

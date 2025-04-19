import { readFile } from "fs/promises";
import { join } from "path";

const docsDir = join(process.cwd(), "docs");

export function getDocById(id: string, scope: string) {
  const path = join(docsDir, scope, `${id}.md`);
  return readFile(path, "utf-8");
}

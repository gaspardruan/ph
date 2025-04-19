import { docConfig, DocConfigItem } from "@/routes/doc-config";
import { getDocById } from "@/utils/getDocById";

type Params = {
  id: string;
  scope: string;
};

export async function generateStaticParams() {
  return docConfig.flatMap(({ items, scope }: DocConfigItem) =>
    items.map((id): Params => ({ id, scope }))
  );
}

async function getDocs(params: Promise<Params>) {
  const { id, scope } = await params;
  return await getDocById(id, scope);
}

export default function DocRenderer({ params }: { params: Promise<Params> }) {
  const doc = getDocs(params);
  return <main>{doc}</main>;
}

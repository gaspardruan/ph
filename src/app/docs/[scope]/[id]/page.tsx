import { Doc } from "@/components/DocEditor";
import { docConfig, DocConfigItem } from "@/routes/doc-config";
import { getDocById } from "@/utils/getDocById";
import { toTitle } from "@/utils/title";

type Params = {
  id: string;
  scope: string;
};

export function generateStaticParams() {
  return docConfig.flatMap(({ items, scope }: DocConfigItem) =>
    items.map((id): Params => ({ id, scope }))
  );
}

async function getDocs(params: Promise<Params>) {
  const { id, scope } = await params;
  return await getDocById(id, scope);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id, scope } = await params;
  const ogURL = `https://zhongqiuu.com/docs/${scope}/${id}`;
  const ogTitle = toTitle(id);
  const title = `${ogTitle} | Ruan Zhongqiu`;

  return {
    title,
    description: `Documentation for ${ogTitle}`,
    openGraph: {
      title,
      url: ogURL,
      description: `Documentation for ${ogTitle}`,
    },
  };
}

export default async function DocRenderer({
  params,
}: {
  params: Promise<Params>;
}) {
  const doc = await getDocs(params);
  return (
    <main>
      <div>
        <Doc content={doc} />
      </div>
    </main>
  );
}

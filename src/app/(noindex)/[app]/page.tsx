import { APP_IDS } from "@/lib/constants";
import { notFound } from "next/navigation";

type PageParams = {
  app: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

export async function generateStaticParams(): Promise<PageParams[]> {
  return APP_IDS.map((app) => ({
    app,
  }));
}

export default function AppPage({ params }: PageProps) {
  return notFound();
}

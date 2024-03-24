import { APP_IDS } from "@/lib/constants";
import { notFound } from "next/navigation";

export type Props = {
  app: string;
};

export function generateStaticParams(): Props[] {
  return APP_IDS.map((app) => ({
    app,
  }));
}

export default function AppPage({ params }: { params: Props }) {
  return notFound();
}

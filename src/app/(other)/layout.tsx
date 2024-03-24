import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="my-8 max-w-5xl mx-auto">{children}</div>
      <Footer />
    </>
  );
}

import Navbar from "@/app/components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="pt-10">{children}</main>
      <Footer />
    </div>
  );
}

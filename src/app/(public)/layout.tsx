import Navbar from "@/components/navbar/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="pt-10">{children}</main>
    </div>
  );
}

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex">
      <Sidebar />
      <div className="w-full flex-1 relative overflow-hidden">
        <Header/>
     

        {children}
        
        </div>
    </div>
  );
}

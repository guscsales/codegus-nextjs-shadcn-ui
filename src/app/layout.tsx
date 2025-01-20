import type {Metadata} from "next";
import "./globals.css";
import Link from "next/link";
import ThemeSwitcher from "@/core-components/theme-switcher";
import ThemeProvider from "@/providers/theme-provider";
import {Toaster as SonnerToaster} from "@/components/ui/sonner";
import {Toaster as ToastToaster} from "@/components/ui/toaster";
import {readdir} from "fs/promises";
import path from "path";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "./_components/app-sidebar";

export const metadata: Metadata = {
  title: "Série Shadcn/UI | Codegus",
};

async function getNavItems() {
  try {
    const componentsPath = path.join(process.cwd(), "src/app/(components)");
    const items = await readdir(componentsPath, {withFileTypes: true});
    return items.filter((item) => item.isDirectory()).map((dir) => dir.name);
  } catch (error) {
    console.error("Error reading nav items:", error);
    return [];
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = await getNavItems();

  return (
    <html lang="en">
      <body className="min-h-screen grid grid-cols-[20rem_1fr]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            {/* <aside className="flex flex-col gap-6 p-6 border-r border">
              <h1 className="text-xl font-bold">
                <span>Codegus</span>{" "}
                <span className="text-zinc-500">{"// "}Shadcn UI</span>
              </h1>
              <div className="font-light text-zinc-400">
                Série de Vídeos passando por cada componente...
              </div>
              <ThemeSwitcher />
              
            </aside> */}
            <AppSidebar items={navItems} />
            <main className="p-4">
              <SidebarTrigger />
              <div className="p-1 mt-2">{children}</div>
            </main>
            <SonnerToaster />
            <ToastToaster />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

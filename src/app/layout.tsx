import type {Metadata} from "next";
import "./globals.css";
import Link from "next/link";
import ThemeSwitcher from "@/core-components/theme-switcher";
import ThemeProvider from "@/providers/theme-provider";
import {Toaster as SonnerToaster} from "@/components/ui/sonner";
import {Toaster as ToastToaster} from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Série Shadcn/UI | Codegus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen grid grid-cols-[20rem_1fr]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <aside className="flex flex-col gap-6 p-6 border-r border">
            <h1 className="text-xl font-bold">
              <span>Codegus</span>{" "}
              <span className="text-zinc-500">{"// "}Shadcn UI</span>
            </h1>
            <div className="font-light text-zinc-400">
              Série de Vídeos passando por cada componente...
            </div>
            <ThemeSwitcher />
            <nav className="flex flex-col gap-1">
              <div className="text-sm font-bold">Componentes</div>
              <Link
                href="/button"
                className="hover:underline font-bold text-blue-500"
              >
                Button
              </Link>
              <Link
                href="/dialog"
                className="hover:underline font-bold text-blue-500"
              >
                Dialog
              </Link>
              <Link
                href="/sonner"
                className="hover:underline font-bold text-blue-500"
              >
                Sonner
              </Link>
              <Link
                href="/toast"
                className="hover:underline font-bold text-blue-500"
              >
                Toast
              </Link>
              <Link
                href="/datatable"
                className="hover:underline font-bold text-blue-500"
              >
                DataTable
              </Link>
            </nav>
          </aside>
          <main className="p-4">{children}</main>
          <SonnerToaster />
          <ToastToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

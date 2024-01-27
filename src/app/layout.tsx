import type {Metadata} from "next";
import "./globals.css";
import Link from "next/link";
import ThemeProvider from "@/providers/theme-provider";
import ThemeSwitcher from "@/components/theme-switcher";

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
      <body className="h-screen flex flex-col gap-24 items-center justify-center">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="flex flex-col gap-4 text-center">
            <h1 className="text-3xl font-bold">
              <span>Codegus</span>{" "}
              <span className="text-zinc-500 dark:text-zinc-400">
                {"// "}Shadcn UI
              </span>
            </h1>
            <div className="font-light text-zinc-400">
              Série de Vídeos passando por cada componente...
            </div>
            <ThemeSwitcher />
            <nav className="flex gap-1 justify-center">
              <Link
                href="/button"
                className="hover:underline font-bold text-blue-500"
              >
                Button
              </Link>
            </nav>
          </header>
          <main className="border border-solid border-zinc-200 dark:border-zinc-700 rounded py-14 px-36">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

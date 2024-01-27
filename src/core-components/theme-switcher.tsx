"use client";

import {Button} from "@/components/ui/button";
import {useTheme} from "next-themes";

export default function ThemeSwitcher() {
  const {setTheme} = useTheme();

  return (
    <div className="font-light text-zinc-400">
      <Button onClick={() => setTheme("light")}>Light</Button> ou{" "}
      <Button onClick={() => setTheme("dark")}>Dark</Button>
    </div>
  );
}

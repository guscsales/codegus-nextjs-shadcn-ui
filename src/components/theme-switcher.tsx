"use client";

import {useTheme} from "next-themes";
import {Button} from "./ui/button";

export default function ThemeSwitcher() {
  const {setTheme} = useTheme();

  return (
    <div className="my-3">
      <Button onClick={() => setTheme("light")}>Light</Button> ou{" "}
      <Button onClick={() => setTheme("dark")}>Dark</Button>
    </div>
  );
}

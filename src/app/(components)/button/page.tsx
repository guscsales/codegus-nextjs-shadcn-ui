import {Button, buttonVariants} from "@/components/ui/button";
import Header from "@/core-components/header";
import Link from "next/link";

export default function ButtonPage() {
  return (
    <>
      <Header title="Button" />
      <div className="flex gap-2">
        <Button>Clique Aqui</Button>

        <Link
          href="/logout"
          className={buttonVariants({variant: "destructive"})}
        >
          Logout
        </Link>
      </div>
    </>
  );
}

"use client";

import {Button} from "@/components/ui/button";
import {toast} from "sonner";

export default function SonnerExamples() {
  return (
    <div className="flex gap-2">
      <Button onClick={() => toast("Esse aqui é um toast notification")}>
        Criar Notificação Toast
      </Button>
      <Button
        onClick={() => toast.success("Esse aqui é um toast notification")}
      >
        Criar Notificação Toast de Sucesso
      </Button>
      <Button onClick={() => toast.error("Esse aqui é um toast notification")}>
        Criar Notificação Toast de Erro
      </Button>
    </div>
  );
}

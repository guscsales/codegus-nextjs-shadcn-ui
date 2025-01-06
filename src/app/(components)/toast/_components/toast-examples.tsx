"use client";

import {Button} from "@/components/ui/button";
import {useToast} from "@/components/ui/use-toast";

export default function ToastExamples() {
  const {toast} = useToast();

  return (
    <div className="flex gap-2">
      <Button
        onClick={() =>
          toast({
            title: "Toast Notification",
            description: "Esse aqui é um toast notification",
          })
        }
      >
        Criar Notificação Toast
      </Button>
      <Button
        onClick={() =>
          toast({
            title: "Toast Notification",
            description: "Esse aqui é um toast notification",
            variant: "destructive",
          })
        }
      >
        Criar Notificação Toast de Erro
      </Button>
    </div>
  );
}

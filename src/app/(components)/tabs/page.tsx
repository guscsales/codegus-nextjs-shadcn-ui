import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Header from "@/core-components/header";

export default function TabsPage() {
  return (
    <>
      <Header title="Tabs" />

      <Tabs defaultValue="login">
        <TabsList>
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="cadastro">Cadastro</TabsTrigger>
          <TabsTrigger value="recuperar">Esqueci minha senha</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-2">
                <Input placeholder="Email" />
                <Input placeholder="Senha" />
                <Button>Entrar</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cadastro">Cadastro!</TabsContent>

        <TabsContent value="recuperar">Esqueci minha senha!</TabsContent>
      </Tabs>
    </>
  );
}

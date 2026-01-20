import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      {/*Esquerda*/}
      <div className="flex h-full flex-col justify-center p-8 mx-auto max-w-[550px]">
        <Image
        src="/poupixlogo.svg"
        alt="Logo Poupix"
        width={173}
        height={173}
        className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-vindo ao Poupix</h1>
        <p className="text-muted-foreground mb-8">A plataforma que simplifica sua rotina financeira. Organize seus gastos com precisão e retome o controle do seu dinheiro para construir o futuro que você sempre planejou.</p>
        <Button className="" variant="outline"><LogInIcon className="mr-2" /> Fazer login ou criar conta</Button>
      </div>
      {/*Direita*/}
      <div className="relative h-full w-full">
        <Image 
        src="/placeholderlogin.png"
        alt="Faça Login"
        fill
        className="object-cover"
        />
      </div>
    </div>
  );
}

export default LoginPage;
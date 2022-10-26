import { Icon, Input } from "../../components/Index";

export const Login = () => {
  return (
    <div>
      <header className="p-4 border border-b border-red-300">
        <div className="container max-w-xl flex justify-center">
          <img src="/images/logo.svg" className="w-32 md:w-40" />
        </div>
      </header>

      <main className="container max-w-xl p-4">
        <div className="flex space-x-4 items-center p-4">
          <a href="/">
            <Icon name="back" className="h-6" />
          </a>
          <h2 className="text-xl font-bold">Entre na sua conta</h2>
        </div>

        <form className="space-y-6 p-4">
          <Input
            type="text"
            name="email"
            label="Seu e-mail"
            placeholder="Digite seu e-mail"
          />

          <Input
            type="password"
            name="password"
            label="Sua Senha"
            placeholder="Digite sua senha"
          />

          <a href="/dashboard" className="block w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl ">
            Entrar
          </a>
        </form>
      </main>
    </div>
  );
};
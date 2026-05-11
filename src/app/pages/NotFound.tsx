import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
          <div className="text-4xl font-bold text-gray-900 mt-4 mb-2">
            Página Não Encontrada
          </div>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Desculpe, a página que você está procurando não existe ou foi
            movida.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/">
            <Button size="lg">
              <Home className="mr-2 w-5 h-5" />
              Voltar ao Início
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
}

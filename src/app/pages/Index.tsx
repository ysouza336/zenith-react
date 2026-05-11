import { Link } from "react-router";
import {
  AlertTriangle,
  TrendingDown,
  Heart,
  Scale,
  MapPin,
  Cloud,
  Building2,
  Shield,
  ArrowRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function Index() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Inteligência Preditiva para Cidades Resilientes
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              O Zênite utiliza dados climáticos, topográficos e simulações
              avançadas para antecipar desastres, reduzir danos e planejar
              cidades mais resilientes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/comercializacao">
                <Button size="lg" variant="secondary">
                  Conhecer Soluções
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/sobre-zenith">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                  Saiba Mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas que Resolve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Problemas que Resolvemos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transformando a gestão de desastres de reativa para preditiva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <AlertTriangle className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle className="text-lg">Previsões Genéricas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Substituímos previsões climáticas genéricas por análises
                  precisas de microclimas urbanos
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingDown className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle className="text-lg">Atuação Reativa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Permitimos ação proativa da Defesa Civil com alertas
                  antecipados por rua
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Urbanismo Cego</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Integramos métricas ambientais no planejamento urbano e
                  licenciamento
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle className="text-lg">Laudos Desatualizados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Aceleramos licenciamentos com dados ambientais em tempo real
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Mapa 3D Interativo
                  </h3>
                  <p className="text-gray-600">
                    Réplica digital da cidade com visualização detalhada de
                    terreno e infraestrutura
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Camadas de Análise
                  </h3>
                  <p className="text-gray-600">
                    Fluxo de água, ilhas de calor, simulação de vento e
                    previsão futura em timeline
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Tecnologia Avançada
                  </h3>
                  <p className="text-gray-600">
                    Integração com simulações climáticas globais em plataforma
                    web acessível
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <Cloud className="w-32 h-32 text-blue-600 mx-auto mb-4 opacity-50" />
                <p className="text-gray-600">Dashboard Interativo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compromisso ESG
            </h2>
            <p className="text-lg text-gray-600">
              Ambiental, Social e Governança
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Ambiental</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600 text-sm">
                  ✓ Adaptação às mudanças climáticas
                </p>
                <p className="text-gray-600 text-sm">
                  ✓ Infraestrutura sustentável
                </p>
                <p className="text-gray-600 text-sm">✓ Green IT</p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Social</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600 text-sm">
                  ✓ Proteção de comunidades vulneráveis
                </p>
                <p className="text-gray-600 text-sm">
                  ✓ Democratização de dados climáticos
                </p>
                <p className="text-gray-600 text-sm">
                  ✓ Justiça climática
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Governança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600 text-sm">
                  ✓ Transparência de dados
                </p>
                <p className="text-gray-600 text-sm">✓ Conformidade LGPD</p>
                <p className="text-gray-600 text-sm">
                  ✓ Combate ao greenwashing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Transformar sua Cidade?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato e descubra como o Zênite pode proteger sua
            comunidade
          </p>
          <Link to="/falaconosco">
            <Button size="lg" variant="secondary">
              Fale Conosco
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

import {
  Target,
  TrendingUp,
  TrendingDown,
  Users,
  Zap,
  Cloud,
  BarChart3,
  Shield,
  Globe,
  Scale,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function SobreZenith() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Sobre o Zênite</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Uma plataforma de inteligência preditiva que utiliza dados
            climáticos, topográficos e simulações avançadas para antecipar
            desastres e planejar cidades mais resilientes.
          </p>
        </div>
      </section>

      {/* Objetivos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos Objetivos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Shield className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>Salvar Vidas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Alertas precisos por rua permitem evacuação antecipada e
                  proteção de comunidades vulneráveis antes de desastres
                  acontecerem.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingDown className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle>Reduzir Prejuízos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Minimizar danos em infraestrutura e patrimônio público e
                  privado através de previsões precisas e planejamento
                  inteligente.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-10 h-10 text-purple-600 mb-2" />
                <CardTitle>Melhorar Saúde Pública</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Monitoramento de umidade, calor e ventilação para criar
                  ambientes urbanos mais saudáveis e confortáveis.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Scale className="w-10 h-10 text-orange-600 mb-2" />
                <CardTitle>Promover Justiça Climática</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Transparência de dados e democratização do acesso à
                  informação climática para todas as comunidades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impacto SROI */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Impacto Comprovado (SROI)
            </h2>
            <p className="text-lg text-gray-600">
              Retorno Social sobre Investimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    26:1
                  </div>
                  <div className="text-sm font-semibold text-gray-900 mb-2">
                    Prevenção Total
                  </div>
                  <div className="text-sm text-gray-600">
                    Até R$ 4M preservados
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    12:1
                  </div>
                  <div className="text-sm font-semibold text-gray-900 mb-2">
                    Evacuação Antecipada
                  </div>
                  <div className="text-sm text-gray-600">~R$ 1,9M salvos</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">
                    5:1
                  </div>
                  <div className="text-sm font-semibold text-gray-900 mb-2">
                    Alerta Emergencial
                  </div>
                  <div className="text-sm text-gray-600">~R$ 750K salvos</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">0:1</div>
                  <div className="text-sm font-semibold text-gray-900 mb-2">
                    Sem Sistema
                  </div>
                  <div className="text-sm text-gray-600">
                    Até R$ 4M em prejuízos
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tecnologia */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tecnologia e Escalabilidade
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Infraestrutura em Nuvem
              </h3>
              <p className="text-gray-600">
                Hospedagem em AWS/Azure para alta disponibilidade e performance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Modelo SaaS</h3>
              <p className="text-gray-600">
                Pagamento por uso com flexibilidade e sem necessidade de
                hardware pesado
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Escalável e Flexível
              </h3>
              <p className="text-gray-600">
                De bairros a cidades inteiras, adapta-se ao seu contexto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valor Estratégico */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Valor Estratégico
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="flex items-start gap-4 pt-6">
                <Target className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Gestão Transformadora
                  </h3>
                  <p className="text-gray-600">
                    Transforma a gestão de desastres de reativa para preditiva,
                    permitindo ações preventivas eficazes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 pt-6">
                <TrendingDown className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Redução de Custos
                  </h3>
                  <p className="text-gray-600">
                    Diminui custos públicos e privados através de prevenção
                    eficiente e planejamento inteligente.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 pt-6">
                <BarChart3 className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Aceleração de Projetos
                  </h3>
                  <p className="text-gray-600">
                    Acelera projetos imobiliários com licenciamento ambiental
                    baseado em dados atualizados.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 pt-6">
                <Users className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Confiança da População
                  </h3>
                  <p className="text-gray-600">
                    Aumenta a confiança da população através de transparência e
                    comunicação eficaz de riscos.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

import {
  Building2,
  Shield,
  Droplet,
  CheckCircle,
  ArrowRight,
  Cloud,
  TrendingUp,
  FileText,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export default function Comercializacao() {
  const segmentos = [
    {
      tipo: "B2G",
      nome: "Setor Público",
      icon: Building2,
      color: "blue",
      solucoes: [
        {
          titulo: "Alertas de Enchente",
          descricao: "Sistema de alertas precisos por rua com antecedência de até 48h",
          beneficios: [
            "Evacuação preventiva organizada",
            "Redução de fatalidades",
            "Economia de custos emergenciais",
            "Dashboard para Defesa Civil",
          ],
          investimento: "A partir de R$ 150K/ano",
        },
        {
          titulo: "Planejamento Urbano",
          descricao: "Análises climáticas para orientar desenvolvimento urbano sustentável",
          beneficios: [
            "Mapeamento de ilhas de calor",
            "Simulação de ventilação",
            "Orientação para arborização",
            "Relatórios ambientais",
          ],
          investimento: "A partir de R$ 200K/ano",
        },
        {
          titulo: "Gestão de Crise",
          descricao: "Central de comando integrada para situações emergenciais",
          beneficios: [
            "Monitoramento em tempo real",
            "Coordenação de equipes",
            "Histórico de eventos",
            "Integração com 193/199",
          ],
          investimento: "A partir de R$ 300K/ano",
        },
      ],
    },
    {
      tipo: "B2B",
      nome: "Setor Privado",
      icon: TrendingUp,
      color: "green",
      solucoes: [
        {
          titulo: "Construtoras",
          descricao: "Licenciamento ambiental acelerado e análise de viabilidade",
          beneficios: [
            "Estudos de impacto ambiental",
            "Análise de risco climático",
            "Aceleração de aprovações",
            "Redução de custos com laudos",
          ],
          investimento: "R$ 15K - 50K por projeto",
        },
        {
          titulo: "Seguradoras",
          descricao: "Precificação inteligente baseada em risco climático real",
          beneficios: [
            "Mapeamento de risco por endereço",
            "Histórico de eventos climáticos",
            "API para integração",
            "Redução de sinistros",
          ],
          investimento: "Licença anual + API calls",
        },
        {
          titulo: "Saneamento",
          descricao: "Previsão de demanda e gestão de reservatórios",
          beneficios: [
            "Previsão de chuvas precisas",
            "Otimização de reservatórios",
            "Economia de tratamento",
            "Planejamento de manutenção",
          ],
          investimento: "A partir de R$ 120K/ano",
        },
      ],
    },
  ];

  const planos = [
    {
      nome: "Starter",
      preco: "R$ 150K",
      periodo: "/ano",
      descricao: "Ideal para municípios até 100 mil habitantes",
      recursos: [
        "Alertas de enchente",
        "1 região de monitoramento",
        "Dashboard básico",
        "Suporte por email",
        "Relatórios mensais",
      ],
      destaque: false,
    },
    {
      nome: "Professional",
      preco: "R$ 300K",
      periodo: "/ano",
      descricao: "Para cidades de médio porte",
      recursos: [
        "Tudo do Starter +",
        "Até 3 regiões de monitoramento",
        "Planejamento urbano",
        "API de integração",
        "Suporte prioritário 24/7",
        "Relatórios semanais",
        "Treinamento de equipe",
      ],
      destaque: true,
    },
    {
      nome: "Enterprise",
      preco: "Personalizado",
      periodo: "",
      descricao: "Solução completa para grandes cidades",
      recursos: [
        "Tudo do Professional +",
        "Regiões ilimitadas",
        "Gestão de crise integrada",
        "Consultoria especializada",
        "SLA garantido",
        "Customizações",
        "Gerente de conta dedicado",
      ],
      destaque: false,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Comercialização</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Soluções personalizadas para o setor público e privado. Transforme
            dados climáticos em decisões estratégicas.
          </p>
        </div>
      </section>

      {/* Modelo de Negócio */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Modelo de Negócio
            </h2>
            <p className="text-lg text-gray-600">
              Modelo SaaS escalável com pagamento por uso
            </p>
          </div>

          {segmentos.map((segmento, index) => (
            <div key={index} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={`w-12 h-12 bg-${segmento.color}-100 rounded-lg flex items-center justify-center`}
                >
                  <segmento.icon
                    className={`w-6 h-6 text-${segmento.color}-600`}
                  />
                </div>
                <div>
                  <Badge className="mb-2">{segmento.tipo}</Badge>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {segmento.nome}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {segmento.solucoes.map((solucao, i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>{solucao.titulo}</CardTitle>
                      <p className="text-sm text-gray-600">
                        {solucao.descricao}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {solucao.beneficios.map((beneficio, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{beneficio}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t">
                        <div className="text-sm text-gray-600 mb-1">
                          Investimento
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          {solucao.investimento}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Planos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Planos para Prefeituras
            </h2>
            <p className="text-lg text-gray-600">
              Escolha o plano ideal para sua cidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {planos.map((plano, index) => (
              <Card
                key={index}
                className={`${
                  plano.destaque
                    ? "border-blue-600 border-2 shadow-xl scale-105"
                    : ""
                }`}
              >
                {plano.destaque && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                    MAIS POPULAR
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plano.nome}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plano.preco}
                    </span>
                    <span className="text-gray-600">{plano.periodo}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {plano.descricao}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plano.recursos.map((recurso, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{recurso}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/falaconosco">
                    <Button
                      className="w-full"
                      variant={plano.destaque ? "default" : "outline"}
                    >
                      Falar com Vendas
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens Competitivas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por Que Escolher o Zênite?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Cloud className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Infraestrutura em Nuvem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Sem necessidade de hardware pesado. Acesse de qualquer lugar.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle className="text-lg">LGPD Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Total conformidade com a Lei Geral de Proteção de Dados.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-purple-600 mb-2" />
                <CardTitle className="text-lg">ROI Comprovado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Retorno social de até 26:1 em cenários de prevenção total.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="w-10 h-10 text-orange-600 mb-2" />
                <CardTitle className="text-lg">Suporte Completo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Treinamento, documentação e suporte técnico especializado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Implementar o Zênite?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Fale com nossa equipe e descubra o plano ideal para sua organização
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/falaconosco">
              <Button size="lg" variant="secondary">
                Solicitar Demonstração
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/casos-reais">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              >
                Ver Casos de Sucesso
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

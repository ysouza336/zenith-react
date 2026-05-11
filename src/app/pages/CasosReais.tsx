import {
  MapPin,
  Calendar,
  TrendingDown,
  Users,
  AlertCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export default function CasosReais() {
  const casos = [
    {
      cidade: "São Carlos - SP",
      data: "Março 2026",
      tipo: "Enchente Urbana",
      status: "Prevenção Total",
      impacto: "R$ 3.2M salvos",
      sroi: "26:1",
      descricao:
        "Alertas com 48h de antecedência permitiram evacuação preventiva de 450 famílias na região do Córrego do Gregório. Infraestrutura preservada e zero fatalidades.",
      acoes: [
        "Alertas enviados para 450 famílias",
        "Evacuação coordenada pela Defesa Civil",
        "Bloqueio preventivo de 8 ruas de risco",
        "Monitoramento em tempo real do nível das águas",
      ],
      color: "green",
    },
    {
      cidade: "Ribeirão Preto - SP",
      data: "Janeiro 2026",
      tipo: "Ilha de Calor",
      status: "Planejamento Urbano",
      impacto: "15% redução térmica",
      sroi: "8:1",
      descricao:
        "Mapeamento de ilhas de calor orientou plantio de 2.000 árvores em áreas estratégicas, melhorando conforto térmico e reduzindo custos com saúde pública.",
      acoes: [
        "Mapeamento térmico de alta precisão",
        "Identificação de 12 hotspots críticos",
        "Plantio estratégico de 2.000 árvores",
        "Redução de 3°C na temperatura média",
      ],
      color: "blue",
    },
    {
      cidade: "Araraquara - SP",
      data: "Fevereiro 2026",
      tipo: "Deslizamento",
      status: "Alerta Emergencial",
      impacto: "R$ 850K salvos",
      sroi: "5:1",
      descricao:
        "Simulação de fluxo de água identificou risco de deslizamento. Alerta emitido 12h antes permitiu evacuação de 80 residências em área de encosta.",
      acoes: [
        "Detecção de saturação do solo",
        "Alerta emitido com 12h de antecedência",
        "Evacuação de 80 residências",
        "Contenção emergencial realizada",
      ],
      color: "yellow",
    },
  ];

  const metricas = [
    {
      valor: "1,200+",
      label: "Famílias Protegidas",
      icon: Users,
      color: "text-blue-600",
    },
    {
      valor: "R$ 5M+",
      label: "Economia Gerada",
      icon: TrendingDown,
      color: "text-green-600",
    },
    {
      valor: "Zero",
      label: "Fatalidades",
      icon: CheckCircle,
      color: "text-purple-600",
    },
    {
      valor: "3",
      label: "Cidades Atendidas",
      icon: MapPin,
      color: "text-orange-600",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Casos Reais</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Resultados comprovados em cidades do interior de São Paulo.
            Salvando vidas e protegendo patrimônios com inteligência preditiva.
          </p>
        </div>
      </section>

      {/* Métricas de Impacto */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metricas.map((metrica, index) => (
              <div key={index} className="text-center">
                <metrica.icon className={`w-8 h-8 ${metrica.color} mx-auto mb-2`} />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {metrica.valor}
                </div>
                <div className="text-sm text-gray-600">{metrica.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos Detalhados */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {casos.map((caso, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-5 h-5 text-gray-600" />
                        <CardTitle className="text-xl">{caso.cidade}</CardTitle>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {caso.data}
                        </div>
                        <Badge variant="outline">{caso.tipo}</Badge>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge
                        className={`${
                          caso.color === "green"
                            ? "bg-green-100 text-green-700"
                            : caso.color === "blue"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {caso.status}
                      </Badge>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          {caso.impacto}
                        </div>
                        <div className="text-sm text-gray-600">
                          SROI: {caso.sroi}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-6">{caso.descricao}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Ações Realizadas
                    </h4>
                    <ul className="space-y-2">
                      {caso.acoes.map((acao, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <ArrowRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>{acao}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Medimos o Impacto
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Metodologia SROI (Social Return on Investment)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <CardTitle className="text-lg">Cenário Base</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Estimativa de danos sem intervenção baseada em histórico
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <CardTitle className="text-lg">Intervenção</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Ações preventivas orientadas pelo Zênite
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-blue-600">3</span>
                </div>
                <CardTitle className="text-lg">Resultado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Danos reais após intervenção
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-blue-600">4</span>
                </div>
                <CardTitle className="text-lg">Cálculo SROI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Retorno social dividido pelo investimento
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que Dizem Nossos Parceiros
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4 italic">
                      "O Zênite transformou nossa capacidade de resposta. Agora
                      agimos antes do desastre acontecer, não depois."
                    </p>
                    <div className="font-semibold text-gray-900">
                      João Silva
                    </div>
                    <div className="text-sm text-gray-600">
                      Coordenador da Defesa Civil - São Carlos
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4 italic">
                      "Os dados precisos do Zênite aceleraram nossos
                      licenciamentos em 40%. Economia de tempo e dinheiro."
                    </p>
                    <div className="font-semibold text-gray-900">
                      Maria Santos
                    </div>
                    <div className="text-sm text-gray-600">
                      Diretora de Urbanismo - Ribeirão Preto
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

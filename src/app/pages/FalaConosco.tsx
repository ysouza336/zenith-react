import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Building2,
  User,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

export default function FalaConosco() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    organizacao: "",
    cargo: "",
    interesse: "",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        organizacao: "",
        cargo: "",
        interesse: "",
        mensagem: "",
      });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contatos = [
    {
      icon: Mail,
      titulo: "Email",
      conteudo: "contato@zenite.com.br",
      link: "mailto:contato@zenite.com.br",
    },
    {
      icon: Phone,
      titulo: "Telefone",
      conteudo: "+55 (16) 3000-0000",
      link: "tel:+551630000000",
    },
    {
      icon: MapPin,
      titulo: "Endereço",
      conteudo: "São Paulo, Brasil",
      link: null,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Fale Conosco</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Entre em contato com nossa equipe. Estamos prontos para ajudar você
            a transformar sua cidade em um lugar mais resiliente.
          </p>
        </div>
      </section>

      {/* Contatos Rápidos */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contatos.map((contato, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <contato.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {contato.titulo}
                  </h3>
                  {contato.link ? (
                    <a
                      href={contato.link}
                      className="text-blue-600 hover:underline"
                    >
                      {contato.conteudo}
                    </a>
                  ) : (
                    <p className="text-gray-600">{contato.conteudo}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Solicite uma Demonstração
              </h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário ao lado e nossa equipe entrará em contato
                em até 24 horas úteis para agendar uma demonstração
                personalizada da plataforma Zênite.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Demonstração Personalizada
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Apresentação adaptada às necessidades específicas da sua
                      organização
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Consultoria Gratuita
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Análise inicial dos desafios climáticos da sua região
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Proposta Customizada
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Plano de implementação e investimento sob medida
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Sem Compromisso
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Conheça a plataforma sem qualquer obrigação de contratação
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <Card>
              <CardHeader>
                <CardTitle>Formulário de Contato</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-gray-600">
                      Recebemos seu contato e retornaremos em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="nome">Nome Completo *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          required
                          className="pl-10"
                          placeholder="Seu nome"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="pl-10"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="telefone">Telefone *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="telefone"
                          name="telefone"
                          type="tel"
                          value={formData.telefone}
                          onChange={handleChange}
                          required
                          className="pl-10"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="organizacao">Organização *</Label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="organizacao"
                          name="organizacao"
                          value={formData.organizacao}
                          onChange={handleChange}
                          required
                          className="pl-10"
                          placeholder="Nome da prefeitura ou empresa"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="cargo">Cargo</Label>
                      <Input
                        id="cargo"
                        name="cargo"
                        value={formData.cargo}
                        onChange={handleChange}
                        placeholder="Seu cargo"
                      />
                    </div>

                    <div>
                      <Label htmlFor="interesse">Interesse *</Label>
                      <select
                        id="interesse"
                        name="interesse"
                        value={formData.interesse}
                        onChange={handleChange}
                        required
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="alertas">Alertas de Enchente</option>
                        <option value="planejamento">Planejamento Urbano</option>
                        <option value="gestao">Gestão de Crise</option>
                        <option value="construtora">
                          Licenciamento (Construtora)
                        </option>
                        <option value="seguradora">
                          Precificação (Seguradora)
                        </option>
                        <option value="saneamento">
                          Gestão de Reservatórios
                        </option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="mensagem">Mensagem</Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Textarea
                          id="mensagem"
                          name="mensagem"
                          value={formData.mensagem}
                          onChange={handleChange}
                          rows={4}
                          className="pl-10"
                          placeholder="Conte-nos mais sobre suas necessidades..."
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Enviar Mensagem
                      <Send className="ml-2 w-4 h-4" />
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Ao enviar este formulário, você concorda com nossa
                      Política de Privacidade e aceita receber comunicações do
                      Zênite.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Quanto tempo leva para implementar o Zênite?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A implementação básica leva de 4 a 6 semanas, incluindo
                  configuração, treinamento da equipe e período de teste.
                  Implementações enterprise podem levar até 3 meses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  É necessário hardware especial?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Não. O Zênite é 100% baseado em nuvem. Você precisa apenas de
                  um computador ou tablet com acesso à internet e um navegador
                  moderno.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Como é feito o treinamento da equipe?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Oferecemos treinamento presencial ou online, documentação
                  completa, vídeos tutoriais e suporte contínuo para garantir
                  que sua equipe aproveite ao máximo a plataforma.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  O Zênite pode ser integrado com sistemas existentes?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sim! Oferecemos API robusta para integração com sistemas de
                  gestão municipal, plataformas de emergência e outras
                  ferramentas que você já utiliza.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

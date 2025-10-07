import { AlertTriangle, Zap, Construction, Flame, DoorOpen, ClipboardCheck, Shield, FileCheck, Clock, Award } from "lucide-react";
import { RiskCard } from "@/components/RiskCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImage from "@/assets/hero-safety.jpg";

const Index = () => {
  const risks = [
    {
      icon: Zap,
      title: "Instalações Elétricas e Gás",
      description: "Fiações deterioradas, disjuntores inadequados ou instalações de gás mal dimensionadas podem causar incêndios e explosões.",
    },
    {
      icon: Construction,
      title: "Estrutura Comprometida",
      description: "Infiltrações, rachaduras e corrosão na estrutura enfraquecem o edifício e colocam vidas em risco.",
    },
    {
      icon: Flame,
      title: "Sistema de Combate a Incêndio",
      description: "Extintores vencidos, hidrantes sem manutenção e alarmes inoperantes tornam o prédio vulnerável.",
    },
    {
      icon: DoorOpen,
      title: "Rotas de Fuga Inadequadas",
      description: "Saídas de emergência bloqueadas ou mal sinalizadas dificultam evacuação em situações críticas.",
    },
    {
      icon: AlertTriangle,
      title: "Sinalização Deficiente",
      description: "Falta de placas de orientação e iluminação de emergência compromete a segurança dos ocupantes.",
    },
    {
      icon: ClipboardCheck,
      title: "Ausência de Inspeções",
      description: "Sem vistorias periódicas, problemas pequenos se tornam grandes riscos e prejuízos financeiros.",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Proteção para todos os ocupantes do edifício",
    },
    {
      icon: FileCheck,
      title: "Conformidade Legal",
      description: "Evite multas e responsabilizações jurídicas",
    },
    {
      icon: Award,
      title: "Valorização",
      description: "Preserve e aumente o valor do patrimônio",
    },
  ];

  const faqItems = [
    {
      question: "Quanto tempo dura a vistoria?",
      answer: "O tempo varia conforme o tamanho do imóvel, mas geralmente entre 2 a 4 horas para edifícios residenciais ou comerciais de médio porte.",
    },
    {
      question: "O que está incluso no diagnóstico?",
      answer: "Análise completa de instalações elétricas, gás, estrutura, sistemas de combate a incêndio, sinalização de emergência, rotas de fuga e identificação de riscos ocultos com relatório detalhado.",
    },
    {
      question: "Preciso estar presente durante a vistoria?",
      answer: "É recomendável que um responsável esteja presente para acompanhar a inspeção e esclarecer dúvidas, mas pode ser feito com síndico, zelador ou representante.",
    },
    {
      question: "Depois da vistoria, recebo um relatório?",
      answer: "Sim! A vistoria gratuita fornece um relatório simplificado. Após a contratação do serviço completo, você receberá um relatório técnico detalhado com fotos, identificação de não conformidades, classificação de riscos, medidas específicas para resolver os problemas e orçamento para os serviços necessários.",
    },
    {
      question: "A vistoria inicial é realmente gratuita?",
      answer: "Sim, a vistoria inicial é totalmente gratuita e você receberá um relatório simplificado. Se optar pela contratação do serviço completo, receberá diagnóstico detalhado com plano de ação e orçamento.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80 z-10" />
          <img 
            src={heroImage} 
            alt="Diagnóstico de segurança predial" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-20">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Diagnóstico de Segurança Predial
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4">
              Proteja seu imóvel com análise técnica completa
            </p>
            <div className="bg-accent/10 backdrop-blur-sm border-2 border-accent rounded-lg p-6 mb-8 inline-block">
              <p className="text-lg md:text-xl text-primary-foreground font-semibold">
                Alvará — projeto aprovado — <span className="text-accent">nada disso garante</span> que seu edifício está seguro.
              </p>
              <p className="text-md md:text-lg text-primary-foreground/90 mt-2">
                Descubra riscos ocultos antes que se tornem acidentes.
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Vistoria Gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Risks Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Os Perigos que Você Talvez Não Perceba
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Riscos invisíveis podem estar presentes mesmo em edifícios aparentemente bem mantidos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {risks.map((risk, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <RiskCard {...risk} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Nossa Solução — Vistoria Técnica Completa
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Equipe de engenheiros especializados em segurança predial, comprometidos com a proteção do seu patrimônio
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-lg p-8 border border-border shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">O que avaliamos:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Estrutura e fundações",
                  "Instalações elétricas completas",
                  "Sistemas de gás e ventilação",
                  "Sistemas de combate a incêndio",
                  "Rotas de fuga e saídas de emergência",
                  "Sinalização de segurança",
                  "Infiltrações e patologias",
                  "Conformidade com normas técnicas",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-lg p-8 md:p-12 shadow-xl border border-border">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Solicite sua Vistoria Inicial Gratuita
                </h2>
                <p className="text-lg text-muted-foreground">
                  Sem compromisso. Entraremos em contato em até 24 horas para agendar uma avaliação no horário que for mais conveniente para você.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Placeholder */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Confiança de Quem Já Protegeu Seu Patrimônio
            </h2>
            <p className="text-muted-foreground mb-12">
              Empresas e condomínios que evitaram problemas graves com nossas vistorias
            </p>
            
            <div className="bg-card rounded-lg p-8 border border-border shadow-md">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Award key={star} className="w-6 h-6 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-lg text-foreground italic mb-4">
                "A vistoria identificou problemas na instalação elétrica que poderiam ter causado um incêndio. Investimento que salvou nosso condomínio."
              </p>
              <p className="text-muted-foreground font-semibold">
                — Síndico, Condomínio Residencial
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Perguntas Frequentes
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">MDA Engenharia</h3>
                <p className="text-primary-foreground/80">
                  Especialistas em diagnóstico e segurança de edificações desde 2010.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Contato</h3>
                <div className="space-y-2 text-primary-foreground/80">
                  <p>📱 WhatsApp: (61) 99386-2269</p>
                  <p>✉️ davicm00@gmail.com</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
                <div className="space-y-2 text-primary-foreground/80">
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Segunda a Sexta: 8h às 18h
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
              <p className="mb-2">CREA-SP 123456 | CNPJ: 00.000.000/0001-00</p>
              <p>© 2024 Segurança Predial. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

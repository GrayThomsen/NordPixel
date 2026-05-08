'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Brain, Shield, MessageSquare, Image, Code, Lightbulb, AlertTriangle, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../components/LanguageProvider';

export function AILearningPage() {
  const { language } = useLanguage();
  const [activeDemo, setActiveDemo] = useState<number | null>(null);
  const topics = [
    {
      icon: Brain,
      title: language === 'da' ? 'Hvad er AI?' : 'What is AI?',
      description: language === 'da' ? 'Forstå det grundlæggende i kunstig intelligens og hvordan det virker' : 'Understand the basics of artificial intelligence and how it works',
      color: 'text-purple-500',
    },
    {
      icon: Shield,
      title: language === 'da' ? 'AI-etik' : 'AI Ethics',
      description: language === 'da' ? 'Lær om ansvarlig brug af AI og etiske overvejelser' : 'Learn about responsible AI use and ethical considerations',
      color: 'text-green-500',
    },
    {
      icon: MessageSquare,
      title: language === 'da' ? 'Prompt engineering' : 'Prompt Engineering',
      description: language === 'da' ? 'Lær at kommunikere effektivt med AI-systemer' : 'Master the art of communicating with AI systems',
      color: 'text-blue-500',
    },
    {
      icon: AlertTriangle,
      title: language === 'da' ? 'Kildekritik og misinformation' : 'Misinformation Awareness',
      description: language === 'da' ? 'Lær at genkende AI-genereret indhold og undgå misinformation' : 'Identify AI-generated content and avoid misinformation',
      color: 'text-red-500',
    },
    {
      icon: Image,
      title: language === 'da' ? 'AI-billedgenerering' : 'AI Image Generation',
      description: language === 'da' ? 'Udforsk kreative muligheder med AI-værktøjer til billeder' : 'Explore creative possibilities with AI art tools',
      color: 'text-[#F5A623]',
    },
    {
      icon: Code,
      title: language === 'da' ? 'AI-assisteret kodning' : 'AI-Assisted Coding',
      description: language === 'da' ? 'Brug AI-værktøjer til at styrke din programmeringsproces' : 'Use AI tools to enhance your programming workflow',
      color: 'text-indigo-500',
    },
  ];

  const learningPaths = [
    {
      title: language === 'da' ? 'Begynderforløb' : 'Beginner Path',
      duration: language === 'da' ? '4 timer' : '4 hours',
      courses: language === 'da' ? ['Hvad er AI?', 'AI i hverdagen', 'Grundlæggende promptskrivning'] : ['What is AI?', 'AI in Daily Life', 'Basic Prompt Writing'],
      level: language === 'da' ? 'Begynder' : 'Beginner',
    },
    {
      title: language === 'da' ? 'Etik- og sikkerhedsforløb' : 'Ethics & Safety Path',
      duration: language === 'da' ? '5 timer' : '5 hours',
      courses: language === 'da' ? ['Grundlæggende AI-etik', 'Genkend misinformation', 'Ansvarlig brug af AI'] : ['AI Ethics Basics', 'Misinformation Detection', 'Responsible AI Use'],
      level: language === 'da' ? 'Begynder' : 'Beginner',
    },
    {
      title: language === 'da' ? 'Kreativt AI-forløb' : 'Creative AI Path',
      duration: language === 'da' ? '6 timer' : '6 hours',
      courses: language === 'da' ? ['Prompt engineering', 'AI-billedgenerering', 'AI i kunst og design'] : ['Prompt Engineering', 'AI Image Generation', 'AI in Art & Design'],
      level: language === 'da' ? 'Mellem' : 'Intermediate',
    },
  ];

  const interactiveExamples = [
    {
      title: language === 'da' ? 'Gode vs. dårlige prompts' : 'Good vs Bad Prompts',
      description: language === 'da' ? 'Lær hvad der gør en AI-prompt effektiv' : 'Learn what makes an effective AI prompt',
      detail: language === 'da' ? 'Gode prompts specificerer mål, målgruppe, format og begrænsninger. Dårlige prompts er for uklare og giver ustabile resultater.' : 'Good prompts specify the goal, audience, format, and constraints. Bad prompts leave too much ambiguity and produce inconsistent results.',
    },
    {
      title: language === 'da' ? 'Genkend AI-genereret indhold' : 'Detect AI-Generated Content',
      description: language === 'da' ? 'Øv dig i at skelne mellem AI-skabt og menneskeskabt indhold' : 'Practice identifying AI vs human-created content',
      detail: language === 'da' ? 'Sammenlign tone, faktuel forankring og om teksten bruger generiske formuleringer uden reel præcision.' : 'Compare tone consistency, factual grounding, and whether the text overuses generic phrasing without real specificity.',
    },
    {
      title: language === 'da' ? 'Etiske scenarier' : 'Ethical Scenarios',
      description: language === 'da' ? 'Udforsk virkelige etiske dilemmaer med AI' : 'Explore real-world AI ethical dilemmas',
      detail: language === 'da' ? 'Gennemgå cases om bias, privatliv, samtykke og overdreven tillid til automatisering, så elever kan diskutere afvejninger.' : 'Review cases involving bias, privacy, consent, and over-reliance on automation so students can reason through tradeoffs.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-[#FFF5E6] dark:from-neutral-950 dark:via-purple-950/20 dark:to-neutral-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="primary" className="mb-6">
              {language === 'da' ? 'AI-undervisning' : 'AI Education'}
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
              {language === 'da' ? 'AI-læringshub' : 'AI Learning Hub'}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8">
              {language === 'da' ? 'Forstå AI, lær at bruge det ansvarligt, og forbered dig på en AI-præget fremtid' : 'Understand AI, learn to use it responsibly, and prepare for the AI-powered future'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="primary" size="lg">
                <Link href="/courses">
                  {language === 'da' ? 'Start læring' : 'Start Learning'}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/teaching-materials">
                  {language === 'da' ? 'Undervisningsressourcer' : 'Teaching Resources'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">{language === 'da' ? 'Kernetemaer' : 'Core Topics'}</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {language === 'da' ? 'Grundig AI-undervisning til begyndere og skoler' : 'Comprehensive AI education for beginners and schools'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <Card key={index} hover className="h-full">
                <CardHeader>
                  <div className={`w-14 h-14 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center mb-4`}>
                    <topic.icon className={`w-7 h-7 ${topic.color}`} />
                  </div>
                  <h3 className="text-xl mb-2">{topic.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {topic.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">{language === 'da' ? 'Læringsforløb' : 'Learning Paths'}</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              {language === 'da' ? 'Strukturerede forløb til forskellige mål med AI-undervisning' : 'Structured courses for different AI education goals'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <h3 className="text-2xl mb-2">{path.title}</h3>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="primary">{path.level}</Badge>
                    <Badge>{path.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">{language === 'da' ? 'Indeholder:' : 'Includes:'}</h4>
                  <ul className="space-y-2 mb-6">
                    {path.courses.map((course, i) => (
                      <li key={i} className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400">
                        <Sparkles className="w-4 h-4 text-[#F5A623] flex-shrink-0 mt-0.5" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/courses">
                      {language === 'da' ? 'Start forløb' : 'Start Path'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">{language === 'da' ? 'Interaktiv læring' : 'Interactive Learning'}</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              {language === 'da' ? 'Praktiske øvelser og eksempler fra virkeligheden' : 'Hands-on exercises and real-world examples'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interactiveExamples.map((example, index) => (
              <Card key={index} hover className="h-full">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-[#F5A623]/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Lightbulb className="w-12 h-12 text-[#F5A623]" />
                  </div>
                  <h3 className="text-xl mb-2">{example.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {example.description}
                  </p>
                  <Button variant="primary" className="w-full" onClick={() => setActiveDemo(activeDemo === index ? null : index)}>
                    {activeDemo === index ? (language === 'da' ? 'Skjul demo' : 'Hide Demo') : (language === 'da' ? 'Prøv interaktiv demo' : 'Try Interactive Demo')}
                  </Button>
                  {activeDemo === index && (
                    <div className="mt-4 rounded-xl border border-[#F5A623]/20 bg-[#F5A623]/5 p-4 text-sm text-neutral-700 dark:text-neutral-300">
                      {example.detail}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-8 text-white">
              <h2 className="text-3xl md:text-4xl mb-4">{language === 'da' ? 'Hvorfor AI-forståelse er vigtigt' : 'Why AI Literacy Matters'}</h2>
              <p className="text-lg opacity-90">
                {language === 'da' ? 'Det er afgørende at forstå AI for at kunne navigere i den moderne digitale verden' : 'Understanding AI is essential for navigating the modern digital world'}
              </p>
            </div>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-[#F5A623] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">{language === 'da' ? 'Kritisk tænkning' : 'Critical Thinking'}</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {language === 'da' ? 'Lær at vurdere AI-genereret indhold og forstå dets begrænsninger' : 'Learn to evaluate AI-generated content and understand its limitations'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-[#F5A623] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">{language === 'da' ? 'Fremtidens kompetencer' : 'Future Skills'}</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {language === 'da' ? 'Forbered dig på arbejde og hverdagsliv i en verden med AI' : 'Prepare for careers and life in an AI-integrated world'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-[#F5A623] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">{language === 'da' ? 'Ansvarlig brug' : 'Responsible Use'}</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {language === 'da' ? 'Forstå de etiske konsekvenser og brug AI-værktøjer ansvarligt' : 'Understand ethical implications and use AI tools responsibly'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-[#F5A623] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">{language === 'da' ? 'Kreativ udfoldelse' : 'Creative Expression'}</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {language === 'da' ? 'Brug AI som et kreativt værktøj til kunst, skrivning og innovation' : 'Leverage AI as a creative tool for art, writing, and innovation'}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

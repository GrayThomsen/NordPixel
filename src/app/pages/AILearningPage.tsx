import { Link } from 'react-router';
import { Brain, Shield, MessageSquare, Image, Code, Lightbulb, AlertTriangle, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export function AILearningPage() {
  const topics = [
    {
      icon: Brain,
      title: 'What is AI?',
      description: 'Understand the basics of artificial intelligence and how it works',
      color: 'text-purple-500',
    },
    {
      icon: Shield,
      title: 'AI Ethics',
      description: 'Learn about responsible AI use and ethical considerations',
      color: 'text-green-500',
    },
    {
      icon: MessageSquare,
      title: 'Prompt Engineering',
      description: 'Master the art of communicating with AI systems',
      color: 'text-blue-500',
    },
    {
      icon: AlertTriangle,
      title: 'Misinformation Awareness',
      description: 'Identify AI-generated content and avoid misinformation',
      color: 'text-red-500',
    },
    {
      icon: Image,
      title: 'AI Image Generation',
      description: 'Explore creative possibilities with AI art tools',
      color: 'text-[#F5A623]',
    },
    {
      icon: Code,
      title: 'AI-Assisted Coding',
      description: 'Use AI tools to enhance your programming workflow',
      color: 'text-indigo-500',
    },
  ];

  const learningPaths = [
    {
      title: 'Beginner Path',
      duration: '4 hours',
      courses: ['What is AI?', 'AI in Daily Life', 'Basic Prompt Writing'],
      level: 'Beginner',
    },
    {
      title: 'Ethics & Safety Path',
      duration: '5 hours',
      courses: ['AI Ethics Basics', 'Misinformation Detection', 'Responsible AI Use'],
      level: 'Beginner',
    },
    {
      title: 'Creative AI Path',
      duration: '6 hours',
      courses: ['Prompt Engineering', 'AI Image Generation', 'AI in Art & Design'],
      level: 'Intermediate',
    },
  ];

  const interactiveExamples = [
    {
      title: 'Good vs Bad Prompts',
      description: 'Learn what makes an effective AI prompt',
      example: true,
    },
    {
      title: 'Detect AI-Generated Content',
      description: 'Practice identifying AI vs human-created content',
      example: true,
    },
    {
      title: 'Ethical Scenarios',
      description: 'Explore real-world AI ethical dilemmas',
      example: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-[#FFF5E6] dark:from-neutral-950 dark:via-purple-950/20 dark:to-neutral-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="primary" className="mb-6">
              AI Education
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
              AI Learning Hub
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8">
              Understand AI, learn to use it responsibly, and prepare for the AI-powered future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button variant="primary" size="lg">
                  Start Learning
                </Button>
              </Link>
              <Link to="/teaching-materials">
                <Button variant="outline" size="lg">
                  Teaching Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Core Topics</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Comprehensive AI education for beginners and schools
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
            <h2 className="text-4xl md:text-5xl mb-4">Learning Paths</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Structured courses for different AI education goals
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
                  <h4 className="font-semibold mb-3">Includes:</h4>
                  <ul className="space-y-2 mb-6">
                    {path.courses.map((course, i) => (
                      <li key={i} className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400">
                        <Sparkles className="w-4 h-4 text-[#F5A623] flex-shrink-0 mt-0.5" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/courses">
                    <Button variant="outline" className="w-full">
                      Start Path
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Interactive Learning</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Hands-on exercises and real-world examples
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
                  <Button variant="primary" className="w-full">
                    Try Interactive Demo
                  </Button>
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
              <h2 className="text-3xl md:text-4xl mb-4">Why AI Literacy Matters</h2>
              <p className="text-lg opacity-90">
                Understanding AI is essential for navigating the modern digital world
              </p>
            </div>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-[#F5A623] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Critical Thinking</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Learn to evaluate AI-generated content and understand its limitations
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-[#F5A623] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Future Skills</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Prepare for careers and life in an AI-integrated world
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-[#F5A623] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Responsible Use</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Understand ethical implications and use AI tools responsibly
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-[#F5A623] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Creative Expression</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Leverage AI as a creative tool for art, writing, and innovation
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

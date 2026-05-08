'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Progress } from '../components/ui/Progress';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../components/LanguageProvider';

export function CoursesPage() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = [
    { value: 'all', label: t('courses.all') },
    { value: 'web-development', label: language === 'da' ? 'Webudvikling' : 'Web Development' },
    { value: 'ai-literacy', label: language === 'da' ? 'AI-forståelse' : 'AI Literacy' },
    { value: 'creative-technology', label: language === 'da' ? 'Kreativ teknologi' : 'Creative Technology' },
    { value: 'digital-safety', label: language === 'da' ? 'Digital sikkerhed' : 'Digital Safety' },
  ];

  const difficulties = [
    { value: 'all', label: t('courses.all') },
    { value: 'beginner', label: t('difficulty.beginner') },
    { value: 'intermediate', label: t('difficulty.intermediate') },
    { value: 'advanced', label: t('difficulty.advanced') },
  ];

  const courses = language === 'da' ? [
    {
      id: 'html-css',
      title: 'HTML & CSS Grundlæggende',
      description: 'Lær webens byggesten gennem praktiske projekter',
      difficulty: 'beginner',
      duration: '6 timer',
      lessons: 24,
      students: 1243,
      category: 'web-development',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
    },
    {
      id: 'ai-literacy',
      title: 'AI-forståelse for Begyndere',
      description: 'Forstå AI, hvordan det virker, og hvilke etiske hensyn der følger med',
      difficulty: 'beginner',
      duration: '4 timer',
      lessons: 16,
      students: 892,
      category: 'ai-literacy',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    },
    {
      id: 'first-website',
      title: 'Byg Din Første Hjemmeside',
      description: 'Skab en komplet personlig hjemmeside fra bunden',
      difficulty: 'beginner',
      duration: '8 timer',
      lessons: 32,
      students: 2104,
      category: 'web-development',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=400',
    },
    {
      id: 'prompt-engineering',
      title: 'Prompt Engineering Grundforløb',
      description: 'Lær at kommunikere effektivt med AI-værktøjer',
      difficulty: 'beginner',
      duration: '3 timer',
      lessons: 12,
      students: 654,
      category: 'ai-literacy',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1696258686454-60082b2c33e2?w=400',
    },
    {
      id: 'javascript-intro',
      title: 'Introduktion til JavaScript',
      description: 'Gør dine hjemmesider interaktive med JavaScript',
      difficulty: 'intermediate',
      duration: '10 timer',
      lessons: 40,
      students: 1567,
      category: 'web-development',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400',
    },
    {
      id: 'ai-ethics',
      title: 'AI-etik og Ansvar',
      description: 'Forstå de etiske konsekvenser ved AI-teknologi',
      difficulty: 'intermediate',
      duration: '5 timer',
      lessons: 20,
      students: 423,
      category: 'ai-literacy',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400',
    },
    {
      id: 'creative-coding',
      title: 'Kreativ Kodning med p5.js',
      description: 'Skab kunst og animationer med kode',
      difficulty: 'intermediate',
      duration: '7 timer',
      lessons: 28,
      students: 789,
      category: 'creative-technology',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
    },
    {
      id: 'digital-safety',
      title: 'Digital Sikkerhed og Privatliv',
      description: 'Beskyt dig selv online og forstå digital sikkerhed',
      difficulty: 'beginner',
      duration: '4 timer',
      lessons: 16,
      students: 1123,
      category: 'digital-safety',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400',
    },
  ] : [
    {
      id: 'html-css',
      title: 'HTML & CSS Fundamentals',
      description: 'Master the building blocks of the web with hands-on projects',
      difficulty: 'beginner',
      duration: '6 hours',
      lessons: 24,
      students: 1243,
      category: 'web-development',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
    },
    {
      id: 'ai-literacy',
      title: 'AI Literacy for Beginners',
      description: 'Understand AI, how it works, and ethical considerations',
      difficulty: 'beginner',
      duration: '4 hours',
      lessons: 16,
      students: 892,
      category: 'ai-literacy',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    },
    {
      id: 'first-website',
      title: 'Build Your First Website',
      description: 'Create a complete personal website from scratch',
      difficulty: 'beginner',
      duration: '8 hours',
      lessons: 32,
      students: 2104,
      category: 'web-development',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=400',
    },
    {
      id: 'prompt-engineering',
      title: 'Prompt Engineering Basics',
      description: 'Learn to communicate effectively with AI tools',
      difficulty: 'beginner',
      duration: '3 hours',
      lessons: 12,
      students: 654,
      category: 'ai-literacy',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1696258686454-60082b2c33e2?w=400',
    },
    {
      id: 'javascript-intro',
      title: 'Introduction to JavaScript',
      description: 'Make your websites interactive with JavaScript',
      difficulty: 'intermediate',
      duration: '10 hours',
      lessons: 40,
      students: 1567,
      category: 'web-development',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400',
    },
    {
      id: 'ai-ethics',
      title: 'AI Ethics & Responsibility',
      description: 'Understanding the ethical implications of AI technology',
      difficulty: 'intermediate',
      duration: '5 hours',
      lessons: 20,
      students: 423,
      category: 'ai-literacy',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400',
    },
    {
      id: 'creative-coding',
      title: 'Creative Coding with p5.js',
      description: 'Create art and animations with code',
      difficulty: 'intermediate',
      duration: '7 hours',
      lessons: 28,
      students: 789,
      category: 'creative-technology',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
    },
    {
      id: 'digital-safety',
      title: 'Digital Safety & Privacy',
      description: 'Protect yourself online and understand digital security',
      difficulty: 'beginner',
      duration: '4 hours',
      lessons: 16,
      students: 1123,
      category: 'digital-safety',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400',
    },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || course.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="bg-gradient-to-br from-neutral-50 to-[#FFF5E6] dark:from-neutral-900 dark:to-neutral-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl mb-6">{t('courses.title')}</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
            {t('courses.subtitle')}
          </p>

          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder={t('courses.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5" />
                  <h3 className="text-lg">{t('courses.filters')}</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">{t('courses.category')}</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.value}
                        onClick={() => setSelectedCategory(category.value)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.value
                            ? 'bg-[#F5A623]/10 text-[#F5A623]'
                            : 'hover:bg-neutral-50 dark:hover:bg-neutral-800'
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">{t('courses.difficulty')}</h4>
                  <div className="space-y-2">
                    {difficulties.map((difficulty) => (
                      <button
                        key={difficulty.value}
                        onClick={() => setSelectedDifficulty(difficulty.value)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedDifficulty === difficulty.value
                            ? 'bg-[#F5A623]/10 text-[#F5A623]'
                            : 'hover:bg-neutral-50 dark:hover:bg-neutral-800'
                        }`}
                      >
                        {difficulty.label}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="flex-1">
            <div className="mb-6">
              <p className="text-neutral-600 dark:text-neutral-400">
                {filteredCourses.length} {t('courses.found')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCourses.map((course) => (
                <Link key={course.id} href={`/courses/${course.id}`}>
                  <Card hover className="h-full overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <h3 className="text-xl mb-2">{course.title}</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
                        {course.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="primary">{t(`difficulty.${course.difficulty}`)}</Badge>
                        <Badge>{course.duration}</Badge>
                        <Badge>{course.lessons} {t('courses.lessons')}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                        {course.students.toLocaleString()} {t('home.courses.students')}
                      </p>
                      {course.progress > 0 && (
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>{language === 'da' ? 'Fremdrift' : 'Progress'}</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

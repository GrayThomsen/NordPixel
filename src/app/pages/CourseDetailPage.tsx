'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Play, BookOpen, Clock, Users, Award, CheckCircle, Lock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Progress } from '../components/ui/Progress';
import { useLanguage } from '../components/LanguageProvider';

export function CourseDetailPage({ courseId }: { courseId?: string }) {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'resources'>('overview');
  const [enrolled, setEnrolled] = useState(false);

  const course = language === 'da' ? {
    id: courseId || 'html-css',
    title: 'HTML & CSS Grundlæggende',
    description: 'Lær webens byggesten gennem omfattende praktiske projekter og virkelighedsnære eksempler. Kurset dækker alt fra grundlæggende HTML-struktur til avancerede CSS-layouts og animationer.',
    difficulty: 'Begynder',
    duration: '6 timer',
    lessons: 24,
    students: 1243,
    rating: 4.8,
    enrolled,
    progress: enrolled ? 12 : 0,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    instructor: 'Emma Hansen',
    instructorBio: 'Senior webudvikler med mere end 10 års erfaring i at undervise i digitale færdigheder',
  } : {
    id: courseId || 'html-css',
    title: 'HTML & CSS Fundamentals',
    description: 'Master the building blocks of the web with comprehensive hands-on projects and real-world examples. This course covers everything from basic HTML structure to advanced CSS layouts and animations.',
    difficulty: 'Beginner',
    duration: '6 hours',
    lessons: 24,
    students: 1243,
    rating: 4.8,
    enrolled,
    progress: enrolled ? 12 : 0,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    instructor: 'Emma Hansen',
    instructorBio: 'Senior Web Developer with 10+ years of experience teaching digital skills',
  };

  const modules = language === 'da' ? [
    {
      title: 'Introduktion til HTML',
      lessons: [
        { id: 1, title: 'Hvad er HTML?', duration: '8 min', completed: false, locked: false },
        { id: 2, title: 'HTML-dokumentets struktur', duration: '12 min', completed: false, locked: false },
        { id: 3, title: 'Tekstelementer', duration: '15 min', completed: false, locked: false },
        { id: 4, title: 'Links og billeder', duration: '18 min', completed: false, locked: false },
      ],
    },
    {
      title: 'Kom i gang med CSS',
      lessons: [
        { id: 5, title: 'Introduktion til CSS', duration: '10 min', completed: false, locked: !course.enrolled },
        { id: 6, title: 'Selektorer og egenskaber', duration: '14 min', completed: false, locked: !course.enrolled },
        { id: 7, title: 'Farver og typografi', duration: '16 min', completed: false, locked: !course.enrolled },
        { id: 8, title: 'Boksmodellen', duration: '20 min', completed: false, locked: !course.enrolled },
      ],
    },
    {
      title: 'Layout-teknikker',
      lessons: [
        { id: 9, title: 'Flexbox Grundlæggende', duration: '22 min', completed: false, locked: !course.enrolled },
        { id: 10, title: 'CSS Grid', duration: '25 min', completed: false, locked: !course.enrolled },
        { id: 11, title: 'Responsivt Design', duration: '28 min', completed: false, locked: !course.enrolled },
        { id: 12, title: 'Afsluttende Projekt', duration: '45 min', completed: false, locked: !course.enrolled },
      ],
    },
  ] : [
    {
      title: 'Introduction to HTML',
      lessons: [
        { id: 1, title: 'What is HTML?', duration: '8 min', completed: false, locked: false },
        { id: 2, title: 'HTML Document Structure', duration: '12 min', completed: false, locked: false },
        { id: 3, title: 'Text Elements', duration: '15 min', completed: false, locked: false },
        { id: 4, title: 'Links and Images', duration: '18 min', completed: false, locked: false },
      ],
    },
    {
      title: 'Getting Started with CSS',
      lessons: [
        { id: 5, title: 'Introduction to CSS', duration: '10 min', completed: false, locked: !course.enrolled },
        { id: 6, title: 'Selectors and Properties', duration: '14 min', completed: false, locked: !course.enrolled },
        { id: 7, title: 'Colors and Typography', duration: '16 min', completed: false, locked: !course.enrolled },
        { id: 8, title: 'The Box Model', duration: '20 min', completed: false, locked: !course.enrolled },
      ],
    },
    {
      title: 'Layout Techniques',
      lessons: [
        { id: 9, title: 'Flexbox Basics', duration: '22 min', completed: false, locked: !course.enrolled },
        { id: 10, title: 'CSS Grid', duration: '25 min', completed: false, locked: !course.enrolled },
        { id: 11, title: 'Responsive Design', duration: '28 min', completed: false, locked: !course.enrolled },
        { id: 12, title: 'Final Project', duration: '45 min', completed: false, locked: !course.enrolled },
      ],
    },
  ];

  const whatYoullLearn = language === 'da' ? [
    'Byg komplette websider fra bunden',
    'Forstå HTML-dokumentets struktur',
    'Style websites med moderne CSS',
    'Skab responsive layouts',
    'Brug Flexbox og Grid',
    'Anvend best practices og tilgængelighed',
  ] : [
    'Build complete web pages from scratch',
    'Understand HTML document structure',
    'Style websites with modern CSS',
    'Create responsive layouts',
    'Use Flexbox and Grid',
    'Apply best practices and accessibility',
  ];

  const resources = language === 'da' ? [
    { name: 'Kursusslides (PDF)', type: 'PDF', size: '2.4 MB', downloadPath: '/downloads/resources/course-slides.txt' },
    { name: 'Kodeeksempler', type: 'ZIP', size: '1.8 MB', downloadPath: '/downloads/resources/code-examples.txt' },
    { name: 'Cheat Sheet', type: 'PDF', size: '450 KB', downloadPath: '/downloads/resources/cheat-sheet.txt' },
    { name: 'Projekt-startfiler', type: 'ZIP', size: '3.2 MB', downloadPath: '/downloads/resources/project-starter-files.txt' },
  ] : [
    { name: 'Course Slides (PDF)', type: 'PDF', size: '2.4 MB', downloadPath: '/downloads/resources/course-slides.txt' },
    { name: 'Code Examples', type: 'ZIP', size: '1.8 MB', downloadPath: '/downloads/resources/code-examples.txt' },
    { name: 'Cheat Sheet', type: 'PDF', size: '450 KB', downloadPath: '/downloads/resources/cheat-sheet.txt' },
    { name: 'Project Starter Files', type: 'ZIP', size: '3.2 MB', downloadPath: '/downloads/resources/project-starter-files.txt' },
  ];

  const tabLabels = {
    overview: language === 'da' ? 'Oversigt' : 'Overview',
    curriculum: language === 'da' ? 'Indhold' : 'Curriculum',
    resources: language === 'da' ? 'Ressourcer' : 'Resources',
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="relative h-96 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
            <Link href="/courses" className="text-white/80 hover:text-white mb-4 inline-block">
              {language === 'da' ? '← Tilbage til kurser' : '← Back to Courses'}
            </Link>
            <h1 className="text-4xl md:text-5xl text-white mb-4">{course.title}</h1>
            <div className="flex flex-wrap gap-3">
              <Badge variant="primary">{course.difficulty}</Badge>
              <Badge className="bg-white/20 text-white">{course.duration}</Badge>
              <Badge className="bg-white/20 text-white">{course.lessons} lessons</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="border-b border-neutral-200 dark:border-neutral-800">
              <div className="flex gap-8">
                {(['overview', 'curriculum', 'resources'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-2 capitalize transition-colors ${
                      activeTab === tab
                        ? 'border-b-2 border-[#F5A623] text-[#F5A623]'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    {tabLabels[tab]}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl mb-4">{language === 'da' ? 'Om kurset' : 'About This Course'}</h2>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl mb-4">{language === 'da' ? 'Det lærer du' : "What You'll Learn"}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {whatYoullLearn.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-600 dark:text-neutral-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <h3 className="text-xl mb-2">{language === 'da' ? 'Underviser' : 'Instructor'}</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#F5A623] to-[#E09612] rounded-full flex items-center justify-center text-white text-xl">
                        {course.instructor.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-lg">{course.instructor}</p>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          {course.instructorBio}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="space-y-4">
                {modules.map((module, moduleIndex) => (
                  <Card key={moduleIndex}>
                    <CardHeader>
                      <h3 className="text-xl">
                        {language === 'da' ? 'Modul' : 'Module'} {moduleIndex + 1}: {module.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {module.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              {lesson.locked ? (
                                <Lock className="w-5 h-5 text-neutral-400" />
                              ) : lesson.completed ? (
                                <CheckCircle className="w-5 h-5 text-[#F5A623]" />
                              ) : (
                                <Play className="w-5 h-5 text-neutral-400" />
                              )}
                              <span className={lesson.locked ? 'text-neutral-400' : ''}>
                                {lesson.title}
                              </span>
                            </div>
                            <span className="text-sm text-neutral-600 dark:text-neutral-400">
                              {lesson.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'resources' && (
              <div>
                <h2 className="text-2xl mb-6">{language === 'da' ? 'Kursusressourcer' : 'Course Resources'}</h2>
                <div className="space-y-3">
                  {resources.map((resource, index) => (
                    <Card key={index} hover>
                      <CardContent className="py-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#F5A623]/10 rounded-lg flex items-center justify-center">
                              <BookOpen className="w-5 h-5 text-[#F5A623]" />
                            </div>
                            <div>
                              <p className="font-medium">{resource.name}</p>
                              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                {resource.type} • {resource.size}
                              </p>
                            </div>
                          </div>
                          <Button asChild variant="outline" size="sm">
                            <a href={resource.downloadPath} download>{language === 'da' ? 'Download' : 'Download'}</a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <div className="space-y-4">
                  {course.enrolled ? (
                    <>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>{language === 'da' ? 'Din fremdrift' : 'Your Progress'}</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} />
                      </div>
                      <Button variant="primary" size="lg" className="w-full" onClick={() => setActiveTab('curriculum')}>
                        <Play className="w-5 h-5 mr-2" />
                        {language === 'da' ? 'Fortsæt læringen' : 'Continue Learning'}
                      </Button>
                    </>
                  ) : (
                    <Button variant="primary" size="lg" className="w-full" onClick={() => setEnrolled(true)}>
                      {language === 'da' ? 'Tilmeld dig gratis' : 'Enroll Now - Free'}
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration} {language === 'da' ? 'i alt' : 'total'}</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                  <BookOpen className="w-5 h-5" />
                  <span>{course.lessons} {language === 'da' ? 'lektioner' : 'lessons'}</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                  <Users className="w-5 h-5" />
                  <span>{course.students.toLocaleString()} {language === 'da' ? 'elever' : 'students'}</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                  <Award className="w-5 h-5" />
                  <span>{language === 'da' ? 'Kursusbevis ved gennemførelse' : 'Certificate of completion'}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

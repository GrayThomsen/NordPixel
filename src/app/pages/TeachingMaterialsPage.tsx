'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Download, FileText, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../components/LanguageProvider';

export function TeachingMaterialsPage() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const ageGroups = [
    { value: 'all', label: language === 'da' ? 'Alle' : 'All' },
    { value: '6-10 years', label: language === 'da' ? '6-10 år' : '6-10 years' },
    { value: '11-14 years', label: language === 'da' ? '11-14 år' : '11-14 years' },
    { value: '15-18 years', label: language === 'da' ? '15-18 år' : '15-18 years' },
    { value: '18+ years', label: language === 'da' ? '18+ år' : '18+ years' },
  ];
  const subjects = [
    { value: 'all', label: language === 'da' ? 'Alle' : 'All' },
    { value: 'Web Development', label: language === 'da' ? 'Webudvikling' : 'Web Development' },
    { value: 'AI Literacy', label: language === 'da' ? 'AI-forståelse' : 'AI Literacy' },
    { value: 'Digital Safety', label: language === 'da' ? 'Digital sikkerhed' : 'Digital Safety' },
    { value: 'Creative Tech', label: language === 'da' ? 'Kreativ teknologi' : 'Creative Tech' },
  ];

  const materials = [
    {
      id: 1,
      title: language === 'da' ? 'Introduktion til HTML - Lektionsplan' : 'Introduction to HTML - Lesson Plan',
      description: language === 'da' ? 'Komplet lektionsplan til undervisning i grundlæggende HTML for begyndere' : 'Complete lesson plan for teaching HTML basics to beginners',
      ageGroup: '11-14 years',
      subject: 'Web Development',
      type: language === 'da' ? 'Lektionsplan' : 'Lesson Plan',
      format: 'PDF',
      pages: 12,
      curriculum: language === 'da' ? 'Kompatibel med dansk læreplan' : 'Danish Curriculum Compatible',
      downloadPath: '/downloads/materials/introduction-to-html-lesson-plan.txt',
    },
    {
      id: 2,
      title: language === 'da' ? 'Workshopmaterialer om AI-etik' : 'AI Ethics Workshop Materials',
      description: language === 'da' ? 'Diskussionsprompter, aktiviteter og øvelser om AI-etik' : 'Discussion prompts, activities, and exercises for AI ethics',
      ageGroup: '15-18 years',
      subject: 'AI Literacy',
      type: language === 'da' ? 'Workshop' : 'Workshop',
      format: 'PDF',
      pages: 18,
      curriculum: language === 'da' ? 'Kompatibel med dansk læreplan' : 'Danish Curriculum Compatible',
      downloadPath: '/downloads/materials/ai-ethics-workshop-materials.txt',
    },
    {
      id: 3,
      title: language === 'da' ? 'Øvelsespakke om websikkerhed' : 'Web Safety Exercise Pack',
      description: language === 'da' ? 'Interaktive øvelser til undervisning i digital sikkerhed' : 'Interactive exercises for teaching digital safety',
      ageGroup: '11-14 years',
      subject: 'Digital Safety',
      type: language === 'da' ? 'Øvelsespakke' : 'Exercise Pack',
      format: 'PDF',
      pages: 8,
      curriculum: language === 'da' ? 'Kompatibel med dansk læreplan' : 'Danish Curriculum Compatible',
      downloadPath: '/downloads/materials/web-safety-exercise-pack.txt',
    },
    {
      id: 4,
      title: language === 'da' ? 'Arbejdsark til CSS-grundforløb' : 'CSS Fundamentals Worksheets',
      description: language === 'da' ? 'Praktiske arbejdsark til at lære det grundlæggende i CSS' : 'Hands-on worksheets for learning CSS basics',
      ageGroup: '11-14 years',
      subject: 'Web Development',
      type: language === 'da' ? 'Arbejdsark' : 'Worksheet',
      format: 'PDF',
      pages: 15,
      curriculum: language === 'da' ? 'Kompatibel med dansk læreplan' : 'Danish Curriculum Compatible',
      downloadPath: '/downloads/materials/css-fundamentals-worksheets.txt',
    },
    {
      id: 5,
      title: language === 'da' ? 'Forstå AI - Begynderguide' : 'Understanding AI - Beginner Guide',
      description: language === 'da' ? 'Enkle forklaringer og aktiviteter om AI-grundbegreber' : 'Simple explanations and activities for AI basics',
      ageGroup: '6-10 years',
      subject: 'AI Literacy',
      type: language === 'da' ? 'Guide' : 'Guide',
      format: 'PDF',
      pages: 10,
      curriculum: language === 'da' ? 'Kompatibel med dansk læreplan' : 'Danish Curriculum Compatible',
      downloadPath: '/downloads/materials/understanding-ai-beginner-guide.txt',
    },
    {
      id: 6,
      title: language === 'da' ? 'Aktiviteter i kreativ kodning' : 'Creative Coding Activities',
      description: language === 'da' ? 'Sjove kodeprojekter til kreativ udfoldelse' : 'Fun coding projects for creative expression',
      ageGroup: '11-14 years',
      subject: 'Creative Tech',
      type: language === 'da' ? 'Aktivitetspakke' : 'Activity Pack',
      format: 'PDF',
      pages: 20,
      curriculum: language === 'da' ? 'Kompatibel med dansk læreplan' : 'Danish Curriculum Compatible',
      downloadPath: '/downloads/materials/creative-coding-activities.txt',
    },
  ];

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAge = selectedAgeGroup === 'all' || material.ageGroup === selectedAgeGroup;
    const matchesSubject = selectedSubject === 'all' || material.subject === selectedSubject;
    return matchesSearch && matchesAge && matchesSubject;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="bg-gradient-to-br from-neutral-50 to-[#FFF5E6] dark:from-neutral-900 dark:to-neutral-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl mb-6">{language === 'da' ? 'Undervisningsmaterialer' : 'Teaching Materials'}</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
            {language === 'da' ? 'Professionelle undervisningsressourcer til lærere og skoler. Download lektionsplaner, arbejdsark og aktiviteter.' : 'Professional educational resources for teachers and schools. Download lesson plans, worksheets, and activities.'}
          </p>

          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder={language === 'da' ? 'Søg materialer...' : 'Search materials...'}
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
                  <h3 className="text-lg">{language === 'da' ? 'Filtre' : 'Filters'}</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">{language === 'da' ? 'Aldersgruppe' : 'Age Group'}</h4>
                  <div className="space-y-2">
                    {ageGroups.map((age) => (
                      <button
                        key={age.value}
                        onClick={() => setSelectedAgeGroup(age.value)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                          selectedAgeGroup === age.value
                            ? 'bg-[#F5A623]/10 text-[#F5A623]'
                            : 'hover:bg-neutral-50 dark:hover:bg-neutral-800'
                        }`}
                      >
                        {age.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">{language === 'da' ? 'Emne' : 'Subject'}</h4>
                  <div className="space-y-2">
                    {subjects.map((subject) => (
                      <button
                        key={subject.value}
                        onClick={() => setSelectedSubject(subject.value)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                          selectedSubject === subject.value
                            ? 'bg-[#F5A623]/10 text-[#F5A623]'
                            : 'hover:bg-neutral-50 dark:hover:bg-neutral-800'
                        }`}
                      >
                        {subject.label}
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
                {filteredMaterials.length} {language === 'da' ? 'materialer fundet' : 'materials found'}
              </p>
            </div>

            <div className="space-y-4">
              {filteredMaterials.map((material) => (
                <Card key={material.id} hover>
                  <CardContent className="py-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex gap-4 flex-1">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#F5A623] to-[#E09612] rounded-xl flex items-center justify-center flex-shrink-0">
                          <FileText className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl mb-2">{material.title}</h3>
                          <p className="text-neutral-600 dark:text-neutral-400 mb-3">
                            {material.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="primary">{material.type}</Badge>
                            <Badge>{ageGroups.find((age) => age.value === material.ageGroup)?.label ?? material.ageGroup}</Badge>
                            <Badge>{subjects.find((subject) => subject.value === material.subject)?.label ?? material.subject}</Badge>
                            <Badge>{material.format} • {material.pages} {language === 'da' ? 'sider' : 'pages'}</Badge>
                          </div>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-3">
                            ✓ {material.curriculum}
                          </p>
                        </div>
                      </div>
                      <Button asChild variant="primary" className="md:ml-4">
                        <a href={material.downloadPath} download>
                          <Download className="w-4 h-4 mr-2" />
                          {language === 'da' ? 'Download' : 'Download'}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#F5A623] to-[#E09612] text-white py-16 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">{language === 'da' ? 'Har du brug for skræddersyede materialer?' : 'Need Custom Materials?'}</h2>
          <p className="text-lg mb-8 opacity-90">
            {language === 'da' ? 'Vi kan udvikle undervisningsmaterialer tilpasset din skole eller institution' : 'We can create tailored teaching materials for your school or institution'}
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/about#kontakt">{language === 'da' ? 'Kontakt os' : 'Contact Us'}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

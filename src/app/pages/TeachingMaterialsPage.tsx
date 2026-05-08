import { useState } from 'react';
import { Download, FileText, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export function TeachingMaterialsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const ageGroups = ['All', '6-10 years', '11-14 years', '15-18 years', '18+ years'];
  const subjects = ['All', 'Web Development', 'AI Literacy', 'Digital Safety', 'Creative Tech'];

  const materials = [
    {
      id: 1,
      title: 'Introduction to HTML - Lesson Plan',
      description: 'Complete lesson plan for teaching HTML basics to beginners',
      ageGroup: '11-14 years',
      subject: 'Web Development',
      type: 'Lesson Plan',
      format: 'PDF',
      pages: 12,
      curriculum: 'Danish Curriculum Compatible',
    },
    {
      id: 2,
      title: 'AI Ethics Workshop Materials',
      description: 'Discussion prompts, activities, and exercises for AI ethics',
      ageGroup: '15-18 years',
      subject: 'AI Literacy',
      type: 'Workshop',
      format: 'PDF',
      pages: 18,
      curriculum: 'Danish Curriculum Compatible',
    },
    {
      id: 3,
      title: 'Web Safety Exercise Pack',
      description: 'Interactive exercises for teaching digital safety',
      ageGroup: '11-14 years',
      subject: 'Digital Safety',
      type: 'Exercise Pack',
      format: 'PDF',
      pages: 8,
      curriculum: 'Danish Curriculum Compatible',
    },
    {
      id: 4,
      title: 'CSS Fundamentals Worksheets',
      description: 'Hands-on worksheets for learning CSS basics',
      ageGroup: '11-14 years',
      subject: 'Web Development',
      type: 'Worksheet',
      format: 'PDF',
      pages: 15,
      curriculum: 'Danish Curriculum Compatible',
    },
    {
      id: 5,
      title: 'Understanding AI - Beginner Guide',
      description: 'Simple explanations and activities for AI basics',
      ageGroup: '6-10 years',
      subject: 'AI Literacy',
      type: 'Guide',
      format: 'PDF',
      pages: 10,
      curriculum: 'Danish Curriculum Compatible',
    },
    {
      id: 6,
      title: 'Creative Coding Activities',
      description: 'Fun coding projects for creative expression',
      ageGroup: '11-14 years',
      subject: 'Creative Tech',
      type: 'Activity Pack',
      format: 'PDF',
      pages: 20,
      curriculum: 'Danish Curriculum Compatible',
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
          <h1 className="text-5xl md:text-6xl mb-6">Teaching Materials</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
            Professional educational resources for teachers and schools. Download lesson plans, worksheets, and activities.
          </p>

          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search materials..."
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
                  <h3 className="text-lg">Filters</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Age Group</h4>
                  <div className="space-y-2">
                    {ageGroups.map((age) => (
                      <button
                        key={age}
                        onClick={() => setSelectedAgeGroup(age.toLowerCase())}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                          selectedAgeGroup === age.toLowerCase()
                            ? 'bg-[#F5A623]/10 text-[#F5A623]'
                            : 'hover:bg-neutral-50 dark:hover:bg-neutral-800'
                        }`}
                      >
                        {age}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Subject</h4>
                  <div className="space-y-2">
                    {subjects.map((subject) => (
                      <button
                        key={subject}
                        onClick={() => setSelectedSubject(subject.toLowerCase())}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                          selectedSubject === subject.toLowerCase()
                            ? 'bg-[#F5A623]/10 text-[#F5A623]'
                            : 'hover:bg-neutral-50 dark:hover:bg-neutral-800'
                        }`}
                      >
                        {subject}
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
                {filteredMaterials.length} materials found
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
                            <Badge>{material.ageGroup}</Badge>
                            <Badge>{material.subject}</Badge>
                            <Badge>{material.format} • {material.pages} pages</Badge>
                          </div>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-3">
                            ✓ {material.curriculum}
                          </p>
                        </div>
                      </div>
                      <Button variant="primary" className="md:ml-4">
                        <Download className="w-4 h-4 mr-2" />
                        Download
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
          <h2 className="text-3xl md:text-4xl mb-4">Need Custom Materials?</h2>
          <p className="text-lg mb-8 opacity-90">
            We can create tailored teaching materials for your school or institution
          </p>
          <Button variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Users, Clock, Target, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useLanguage } from '../components/LanguageProvider';

export function WorkshopsPage() {
  const { language } = useLanguage();
  const [showBookingForm, setShowBookingForm] = useState<number | null>(null);
  const [submittedWorkshopId, setSubmittedWorkshopId] = useState<number | null>(null);

  const workshops = [
    {
      id: 1,
      title: language === 'da' ? 'Byg din første hjemmeside' : 'Build Your First Website',
      description: language === 'da' ? 'En praktisk workshop hvor elever skaber en komplet personlig hjemmeside med HTML og CSS' : 'A hands-on workshop where students create a complete personal website using HTML and CSS',
      targetAge: language === 'da' ? '11-14 år' : '11-14 years',
      duration: language === 'da' ? '3 timer' : '3 hours',
      difficulty: language === 'da' ? 'Begynder' : 'Beginner',
      participants: language === 'da' ? '10-25 elever' : '10-25 students',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600',
      outcomes: [
        language === 'da' ? 'Skab en komplet HTML-hjemmeside' : 'Create a complete HTML website',
        language === 'da' ? 'Style med CSS' : 'Style with CSS',
        language === 'da' ? 'Forstå webstruktur' : 'Understand web structure',
        language === 'da' ? 'Publicér på nettet' : 'Deploy to the web',
      ],
    },
    {
      id: 2,
      title: language === 'da' ? 'Introduktion til AI' : 'Introduction to AI',
      description: language === 'da' ? 'Udforsk hvad AI er, hvordan det virker, og hvordan det bruges i virkeligheden i en interaktiv session' : 'Explore what AI is, how it works, and its real-world applications in an interactive session',
      targetAge: language === 'da' ? '13-16 år' : '13-16 years',
      duration: language === 'da' ? '2 timer' : '2 hours',
      difficulty: language === 'da' ? 'Begynder' : 'Beginner',
      participants: language === 'da' ? '15-30 elever' : '15-30 students',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600',
      outcomes: [
        language === 'da' ? 'Forstå AI-grundbegreber' : 'Understand AI basics',
        language === 'da' ? 'Udforsk virkelige AI-eksempler' : 'Explore real AI examples',
        language === 'da' ? 'Praktisk brug af AI-værktøjer' : 'Hands-on AI tool practice',
        language === 'da' ? 'Diskutér etiske overvejelser' : 'Discuss ethical considerations',
      ],
    },
    {
      id: 3,
      title: language === 'da' ? 'Digital kreativitet for elever' : 'Digital Creativity for Students',
      description: language === 'da' ? 'Kombinér kodning, design og kreativitet for at skabe interaktiv digital kunst og animationer' : 'Combine coding, design, and creativity to make interactive digital art and animations',
      targetAge: language === 'da' ? '10-15 år' : '10-15 years',
      duration: language === 'da' ? '4 timer' : '4 hours',
      difficulty: language === 'da' ? 'Mellem' : 'Intermediate',
      participants: language === 'da' ? '10-20 elever' : '10-20 students',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600',
      outcomes: [
        language === 'da' ? 'Skab interaktiv kunst' : 'Create interactive art',
        language === 'da' ? 'Lær kreativ kodning' : 'Learn creative coding',
        language === 'da' ? 'Forstå animationens grundprincipper' : 'Understand animation basics',
        language === 'da' ? 'Byg et projekt til portfolio' : 'Build a portfolio project',
      ],
    },
    {
      id: 4,
      title: language === 'da' ? 'Forstå internettet' : 'Understanding the Internet',
      description: language === 'da' ? 'Gør internettets mekanismer forståelige, fra browsere til servere, på en begyndervenlig måde' : 'Demystify how the internet works, from browsers to servers, in a beginner-friendly way',
      targetAge: language === 'da' ? '11-14 år' : '11-14 years',
      duration: language === 'da' ? '2 timer' : '2 hours',
      difficulty: language === 'da' ? 'Begynder' : 'Beginner',
      participants: language === 'da' ? '15-30 elever' : '15-30 students',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600',
      outcomes: [
        language === 'da' ? 'Forstå hvordan websites fungerer' : 'Understand how websites work',
        language === 'da' ? 'Lær om servere og klienter' : 'Learn about servers and clients',
        language === 'da' ? 'Udforsk DNS og IP-adresser' : 'Explore DNS and IP addresses',
        language === 'da' ? 'Grundlæggende sikkerhed og tryghed' : 'Safety and security basics',
      ],
    },
    {
      id: 5,
      title: language === 'da' ? 'AI i undervisningen' : 'AI in Education',
      description: language === 'da' ? 'En workshop for lærere om, hvordan AI-værktøjer kan integreres effektivt i undervisningen' : 'A workshop for teachers exploring how to integrate AI tools into the classroom effectively',
      targetAge: language === 'da' ? 'Lærere' : 'Teachers',
      duration: language === 'da' ? '3 timer' : '3 hours',
      difficulty: language === 'da' ? 'Mellem' : 'Intermediate',
      participants: language === 'da' ? '10-20 lærere' : '10-20 teachers',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600',
      outcomes: [
        language === 'da' ? 'Integrér AI i undervisningen' : 'Integrate AI in teaching',
        language === 'da' ? 'Vurder AI-værktøjer' : 'Evaluate AI tools',
        language === 'da' ? 'Skab AI-understøttede lektioner' : 'Create AI-enhanced lessons',
        language === 'da' ? 'Håndtér etiske bekymringer' : 'Address ethical concerns',
      ],
    },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedWorkshopId(showBookingForm);
    (e.currentTarget as HTMLFormElement).reset();
    setShowBookingForm(null);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="bg-gradient-to-br from-neutral-50 to-[#FFF5E6] dark:from-neutral-900 dark:to-neutral-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl mb-6">{language === 'da' ? 'Workshops' : 'Workshops'}</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
            {language === 'da' ? 'Praktiske læringsoplevelser til skoler, elever og lærere. Book en workshop, der passer til jeres behov.' : 'Hands-on learning experiences for schools, students, and teachers. Book a workshop tailored to your needs.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {workshops.map((workshop) => (
            <Card key={workshop.id} className="overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full lg:w-96 h-64 lg:h-auto object-cover"
                />
                <div className="flex-1">
                  <CardHeader>
                    <h2 className="text-3xl mb-3">{workshop.title}</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                      {workshop.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="primary">{workshop.difficulty}</Badge>
                      <Badge>{workshop.targetAge}</Badge>
                      <Badge>{workshop.duration}</Badge>
                      <Badge>{workshop.participants}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold mb-3">{language === 'da' ? 'Læringsudbytte:' : 'Learning Outcomes:'}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                      {workshop.outcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-neutral-600 dark:text-neutral-400">
                            {outcome}
                          </span>
                        </div>
                      ))}
                    </div>

                    {showBookingForm === workshop.id ? (
                      <form onSubmit={handleBookingSubmit} className="space-y-4 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
                        <h3 className="text-xl mb-4">{language === 'da' ? 'Book denne workshop' : 'Book This Workshop'}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Input label={language === 'da' ? 'Skole/organisation' : 'School/Organization'} placeholder={language === 'da' ? 'Navn på skole' : 'Your school name'} required />
                          <Input label={language === 'da' ? 'Kontaktperson' : 'Contact Person'} placeholder={language === 'da' ? 'Dit navn' : 'Your name'} required />
                          <Input label={language === 'da' ? 'E-mail' : 'Email'} type="email" placeholder={language === 'da' ? 'din@email.com' : 'your@email.com'} required />
                          <Input label={language === 'da' ? 'Telefon' : 'Phone'} type="tel" placeholder="+45 XX XX XX XX" required />
                          <Input label={language === 'da' ? 'Antal elever' : 'Number of Students'} type="number" placeholder="20" required />
                          <Input label={language === 'da' ? 'Ønsket dato' : 'Preferred Date'} type="date" required />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium">{language === 'da' ? 'Yderligere information' : 'Additional Information'}</label>
                          <textarea
                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
                            rows={4}
                            placeholder={language === 'da' ? 'Er der særlige ønsker eller spørgsmål?' : 'Any specific requirements or questions?'}
                          />
                        </div>
                        <div className="flex gap-3">
                          <Button variant="primary" type="submit">
                            {language === 'da' ? 'Send forespørgsel' : 'Submit Inquiry'}
                          </Button>
                          <Button variant="outline" type="button" onClick={() => setShowBookingForm(null)}>
                            {language === 'da' ? 'Annuller' : 'Cancel'}
                          </Button>
                        </div>
                      </form>
                    ) : (
                      <div className="space-y-4">
                        {submittedWorkshopId === workshop.id && (
                          <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-300">
                            {language === 'da' ? 'Forespørgslen er sendt. Vi kontakter dig inden for 24 timer.' : 'Booking inquiry submitted. We will contact you within 24 hours.'}
                          </div>
                        )}
                        <Button
                          variant="primary"
                          onClick={() => {
                            setSubmittedWorkshopId(null);
                            setShowBookingForm(workshop.id);
                          }}
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          {language === 'da' ? 'Book denne workshop' : 'Book This Workshop'}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-neutral-50 dark:bg-neutral-900 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">{language === 'da' ? 'Hvorfor booke en NordPixel-workshop?' : 'Why Book a NordPixel Workshop?'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="py-6">
                <Users className="w-10 h-10 text-[#F5A623] mb-4" />
                <h3 className="text-lg font-semibold mb-2">{language === 'da' ? 'Ekspertundervisere' : 'Expert Instructors'}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {language === 'da' ? 'Erfarne undervisere med passion for digitale kompetencer' : 'Experienced educators passionate about digital skills'}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-6">
                <Target className="w-10 h-10 text-[#F5A623] mb-4" />
                <h3 className="text-lg font-semibold mb-2">{language === 'da' ? 'Alderstilpasset' : 'Age-Appropriate'}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {language === 'da' ? 'Indhold tilpasset forskellige aldersgrupper og niveauer' : 'Content tailored to different age groups and skill levels'}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-6">
                <Clock className="w-10 h-10 text-[#F5A623] mb-4" />
                <h3 className="text-lg font-semibold mb-2">{language === 'da' ? 'Fleksibel planlægning' : 'Flexible Scheduling'}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {language === 'da' ? 'Vi tilpasser os skolens kalender' : "We work around your school's schedule"}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-6">
                <Calendar className="w-10 h-10 text-[#F5A623] mb-4" />
                <h3 className="text-lg font-semibold mb-2">{language === 'da' ? 'Komplette materialer' : 'Complete Materials'}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {language === 'da' ? 'Alle ressourcer og opfølgende materialer er inkluderet' : 'All resources and follow-up materials included'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#F5A623] to-[#E09612] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">{language === 'da' ? 'Har du brug for en skræddersyet workshop?' : 'Custom Workshop Needed?'}</h2>
          <p className="text-lg mb-8 opacity-90">
            {language === 'da' ? 'Vi kan udvikle workshops, der matcher jeres konkrete læringsmål' : 'We can create tailored workshops to meet your specific educational goals'}
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/about#kontakt">{language === 'da' ? 'Kontakt os om en skræddersyet workshop' : 'Contact Us for Custom Workshops'}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

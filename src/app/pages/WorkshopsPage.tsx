import { useState } from 'react';
import { Users, Clock, Target, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export function WorkshopsPage() {
  const [showBookingForm, setShowBookingForm] = useState<number | null>(null);

  const workshops = [
    {
      id: 1,
      title: 'Build Your First Website',
      description: 'A hands-on workshop where students create a complete personal website using HTML and CSS',
      targetAge: '11-14 years',
      duration: '3 hours',
      difficulty: 'Beginner',
      participants: '10-25 students',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600',
      outcomes: [
        'Create a complete HTML website',
        'Style with CSS',
        'Understand web structure',
        'Deploy to the web',
      ],
    },
    {
      id: 2,
      title: 'Introduction to AI',
      description: 'Explore what AI is, how it works, and its real-world applications in an interactive session',
      targetAge: '13-16 years',
      duration: '2 hours',
      difficulty: 'Beginner',
      participants: '15-30 students',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600',
      outcomes: [
        'Understand AI basics',
        'Explore real AI examples',
        'Hands-on AI tool practice',
        'Discuss ethical considerations',
      ],
    },
    {
      id: 3,
      title: 'Digital Creativity for Students',
      description: 'Combine coding, design, and creativity to make interactive digital art and animations',
      targetAge: '10-15 years',
      duration: '4 hours',
      difficulty: 'Intermediate',
      participants: '10-20 students',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600',
      outcomes: [
        'Create interactive art',
        'Learn creative coding',
        'Understand animation basics',
        'Build a portfolio project',
      ],
    },
    {
      id: 4,
      title: 'Understanding the Internet',
      description: 'Demystify how the internet works, from browsers to servers, in a beginner-friendly way',
      targetAge: '11-14 years',
      duration: '2 hours',
      difficulty: 'Beginner',
      participants: '15-30 students',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600',
      outcomes: [
        'Understand how websites work',
        'Learn about servers and clients',
        'Explore DNS and IP addresses',
        'Safety and security basics',
      ],
    },
    {
      id: 5,
      title: 'AI in Education',
      description: 'A workshop for teachers exploring how to integrate AI tools into the classroom effectively',
      targetAge: 'Teachers',
      duration: '3 hours',
      difficulty: 'Intermediate',
      participants: '10-20 teachers',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600',
      outcomes: [
        'Integrate AI in teaching',
        'Evaluate AI tools',
        'Create AI-enhanced lessons',
        'Address ethical concerns',
      ],
    },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking inquiry submitted! We will contact you within 24 hours.');
    setShowBookingForm(null);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="bg-gradient-to-br from-neutral-50 to-[#FFF5E6] dark:from-neutral-900 dark:to-neutral-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl mb-6">Workshops</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
            Hands-on learning experiences for schools, students, and teachers. Book a workshop tailored to your needs.
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
                    <h3 className="font-semibold mb-3">Learning Outcomes:</h3>
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
                        <h3 className="text-xl mb-4">Book This Workshop</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Input label="School/Organization" placeholder="Your school name" required />
                          <Input label="Contact Person" placeholder="Your name" required />
                          <Input label="Email" type="email" placeholder="your@email.com" required />
                          <Input label="Phone" type="tel" placeholder="+45 XX XX XX XX" required />
                          <Input label="Number of Students" type="number" placeholder="20" required />
                          <Input label="Preferred Date" type="date" required />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium">Additional Information</label>
                          <textarea
                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
                            rows={4}
                            placeholder="Any specific requirements or questions?"
                          />
                        </div>
                        <div className="flex gap-3">
                          <Button variant="primary" type="submit">
                            Submit Inquiry
                          </Button>
                          <Button variant="outline" type="button" onClick={() => setShowBookingForm(null)}>
                            Cancel
                          </Button>
                        </div>
                      </form>
                    ) : (
                      <Button
                        variant="primary"
                        onClick={() => setShowBookingForm(workshop.id)}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book This Workshop
                      </Button>
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
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Why Book a NordPixel Workshop?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="py-6">
                <Users className="w-10 h-10 text-[#F5A623] mb-4" />
                <h3 className="text-lg font-semibold mb-2">Expert Instructors</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Experienced educators passionate about digital skills
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-6">
                <Target className="w-10 h-10 text-[#F5A623] mb-4" />
                <h3 className="text-lg font-semibold mb-2">Age-Appropriate</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Content tailored to different age groups and skill levels
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-6">
                <Clock className="w-10 h-10 text-[#F5A623] mb-4" />
                <h3 className="text-lg font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  We work around your school's schedule
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-6">
                <Calendar className="w-10 h-10 text-[#F5A623] mb-4" />
                <h3 className="text-lg font-semibold mb-2">Complete Materials</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  All resources and follow-up materials included
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#F5A623] to-[#E09612] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Custom Workshop Needed?</h2>
          <p className="text-lg mb-8 opacity-90">
            We can create tailored workshops to meet your specific educational goals
          </p>
          <Button variant="secondary" size="lg">
            Contact Us for Custom Workshops
          </Button>
        </div>
      </div>
    </div>
  );
}

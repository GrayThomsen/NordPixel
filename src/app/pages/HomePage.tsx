import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Code, Users, BookOpen, Award, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { useLanguage } from '../components/LanguageProvider';

export function HomePage() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Code,
      title: t('home.feature1.title'),
      description: t('home.feature1.desc'),
    },
    {
      icon: Users,
      title: t('home.feature3.title'),
      description: t('home.feature3.desc'),
    },
    {
      icon: BookOpen,
      title: t('home.feature4.title'),
      description: t('home.feature4.desc'),
    },
  ];

  const featuredCourses = language === 'da' ? [
    {
      id: 'html-css',
      title: 'HTML & CSS Grundlæggende',
      difficulty: 'Begynder',
      duration: '6 timer',
      students: 1243,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
    },
    {
      id: 'ai-literacy',
      title: 'AI for Begyndere',
      difficulty: 'Begynder',
      duration: '4 timer',
      students: 892,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    },
    {
      id: 'web-dev',
      title: 'Byg Din Første Hjemmeside',
      difficulty: 'Begynder',
      duration: '8 timer',
      students: 2104,
      image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=400',
    },
  ] : [
    {
      id: 'html-css',
      title: 'HTML & CSS Fundamentals',
      difficulty: 'Beginner',
      duration: '6 hours',
      students: 1243,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
    },
    {
      id: 'ai-literacy',
      title: 'AI Literacy for Beginners',
      difficulty: 'Beginner',
      duration: '4 hours',
      students: 892,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    },
    {
      id: 'web-dev',
      title: 'Build Your First Website',
      difficulty: 'Beginner',
      duration: '8 hours',
      students: 2104,
      image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=400',
    },
  ];

  const testimonials = language === 'da' ? [
    {
      name: 'Maria Jensen',
      role: 'Lærer, Københavns Skole',
      content: 'NordPixel har transformeret hvordan vi underviser i digitale færdigheder. Materialerne er fremragende og alderspassende.',
      rating: 5,
    },
    {
      name: 'Lars Nielsen',
      role: 'Elev',
      content: 'Jeg byggede min første hjemmeside på kun 2 uger! Kurserne er klare og sjove at følge.',
      rating: 5,
    },
    {
      name: 'Anna Sørensen',
      role: 'Skoleadministrator',
      content: 'Professionel, pålidelig og præcis hvad moderne uddannelse har brug for.',
      rating: 5,
    },
  ] : [
    {
      name: 'Maria Jensen',
      role: 'Teacher, Copenhagen School',
      content: 'NordPixel has transformed how we teach digital skills. The materials are excellent and age-appropriate.',
      rating: 5,
    },
    {
      name: 'Lars Nielsen',
      role: 'Student',
      content: 'I built my first website in just 2 weeks! The courses are clear and fun to follow.',
      rating: 5,
    },
    {
      name: 'Anna Sørensen',
      role: 'School Administrator',
      content: 'Professional, reliable, and exactly what modern education needs.',
      rating: 5,
    },
  ];

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-neutral-50 to-[#FFF5E6] dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="primary" className="mb-6">
              {t('home.hero.badge')}
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
              {t('home.hero.title1')}
              <br />
              <span className="text-[#F5A623]">{t('home.hero.title2')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button variant="primary" size="lg">
                  {t('home.hero.cta1')}
                </Button>
              </Link>
              <Link to="/teaching-materials">
                <Button variant="outline" size="lg">
                  {t('home.hero.cta2')}
                </Button>
              </Link>
              <Link to="/workshops">
                <Button variant="secondary" size="lg">
                  {t('home.hero.cta3')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F5A623]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </section>

      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">{t('home.features.title')}</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-[#F5A623]" />
                    </div>
                    <h3 className="text-xl mb-2">{feature.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl mb-4">{t('home.courses.title')}</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                {t('home.courses.subtitle')}
              </p>
            </div>
            <Link to="/courses">
              <Button variant="outline">{t('home.courses.viewAll')}</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/courses/${course.id}`}>
                  <Card hover className="overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <h3 className="text-xl mb-2">{course.title}</h3>
                      <div className="flex gap-2 mb-2">
                        <Badge variant="primary">{course.difficulty}</Badge>
                        <Badge>{course.duration}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {course.students.toLocaleString()} {t('home.courses.students')}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">{t('home.testimonials.title')}</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              {t('home.testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#F5A623] text-[#F5A623]" />
                      ))}
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                      "{testimonial.content}"
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {testimonial.role}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#F5A623] to-[#E09612] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl mb-6">{t('home.cta.title')}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t('home.cta.subtitle')}
          </p>
          <Link to="/signup">
            <Button variant="secondary" size="lg">
              {t('home.cta.button')}
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">{t('home.newsletter.title')}</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
            {t('home.newsletter.subtitle')}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder={t('home.newsletter.placeholder')}
              className="flex-1 px-6 py-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
            />
            <Button variant="primary" size="lg">
              {t('home.newsletter.button')}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}

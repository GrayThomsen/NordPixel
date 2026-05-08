import { useState } from 'react';
import { Heart, Target, Lightbulb, Users, Mail, Send, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../components/LanguageProvider';

export function AboutPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(language === 'da'
      ? 'Tak for din besked! Jeg vender tilbage inden for 24 timer.'
      : 'Thank you for your message! I will get back to you within 24 hours.'
    );
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const values = [
    {
      icon: Heart,
      title: language === 'da' ? 'Passion for Uddannelse' : 'Passion for Education',
      description: language === 'da'
        ? 'Jeg tror på at styrke den næste generation med essentielle digitale færdigheder'
        : 'I believe in empowering the next generation with essential digital skills',
    },
    {
      icon: Target,
      title: language === 'da' ? 'Tilgængelighed Først' : 'Accessibility First',
      description: language === 'da'
        ? 'Gør digital uddannelse tilgængelig og forståelig for alle'
        : 'Making digital education available and understandable for everyone',
    },
    {
      icon: Lightbulb,
      title: language === 'da' ? 'Innovation' : 'Innovation',
      description: language === 'da'
        ? 'Holder mig opdateret med teknologitendenser for at levere relevant uddannelse'
        : 'Staying ahead of technology trends to provide relevant education',
    },
    {
      icon: Users,
      title: language === 'da' ? 'Fællesskab' : 'Community',
      description: language === 'da'
        ? 'Bygger et støttende fællesskab af elever, lærere og innovatorer'
        : 'Building a supportive community of learners, teachers, and innovators',
    },
  ];

  const faqs = language === 'da' ? [
    {
      question: 'Hvor meget koster jeres kurser?',
      answer: 'Alle mine online kurser er i øjeblikket gratis at tilgå. Jeg ønsker at gøre digital uddannelse tilgængelig for alle.',
    },
    {
      question: 'Tilbyder I workshops på stedet?',
      answer: 'Ja! Jeg tilbyder workshops på stedet for skoler og institutioner i hele Danmark. Kontakt mig for at diskutere dine behov.',
    },
    {
      question: 'Er kurserne egnede til begyndere?',
      answer: 'Absolut! Mange af mine kurser er designet specifikt til begyndere uden forudgående erfaring.',
    },
    {
      question: 'Kan jeg downloade undervisningsmaterialer?',
      answer: 'Ja, registrerede undervisere kan gratis downloade mine undervisningsmaterialer, lektionsplaner og arbejdsark.',
    },
    {
      question: 'Tilbyder I certifikater?',
      answer: 'Elever, der gennemfører kurser, modtager et gennemførelsescertifikat, der kan deles eller tilføjes til portfolier.',
    },
  ] : [
    {
      question: 'How much do your courses cost?',
      answer: 'All my online courses are currently free to access. I want to make digital education accessible to everyone.',
    },
    {
      question: 'Do you offer in-person workshops?',
      answer: 'Yes! I offer on-site workshops for schools and institutions across Denmark. Contact me to discuss your needs.',
    },
    {
      question: 'Are the courses suitable for complete beginners?',
      answer: 'Absolutely! Many of my courses are designed specifically for beginners with no prior experience.',
    },
    {
      question: 'Can I download teaching materials?',
      answer: 'Yes, registered educators can download my teaching materials, lesson plans, and worksheets for free.',
    },
    {
      question: 'Do you offer certificates?',
      answer: 'Students who complete courses receive a certificate of completion that can be shared or added to portfolios.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="bg-gradient-to-br from-neutral-50 to-[#FFF5E6] dark:from-neutral-900 dark:to-neutral-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl mb-6">
            {language === 'da' ? 'Om NordPixel' : 'About NordPixel'}
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            {language === 'da'
              ? 'Digital uddannelse gjort tilgængelig, engagerende og styrkende'
              : 'Digital education made accessible, engaging, and empowering'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl mb-6">
              {language === 'da' ? 'Min Historie' : 'My Story'}
            </h2>
            <div className="space-y-4 text-lg text-neutral-600 dark:text-neutral-400">
              <p>
                {language === 'da'
                  ? 'NordPixel blev grundlagt med en simpel vision: at hjælpe unge mennesker i Danmark med at forstå og skabe med teknologi, ikke kun forbruge den.'
                  : 'NordPixel was founded with a simple vision: to help young people in Denmark understand and create with technology, not just consume it.'}
              </p>
              <p>
                {language === 'da'
                  ? 'I takt med at digital teknologi udvikler sig hurtigt, så jeg et voksende behov for tilgængelig uddannelse af høj kvalitet, der ikke kun lærer kodning, men digital literacy, kreativ problemløsning og etisk teknologibrug.'
                  : 'As digital technologies rapidly evolve, I saw a growing need for accessible, high-quality education that teaches not just coding, but digital literacy, creative problem-solving, and ethical technology use.'}
              </p>
              <p>
                {language === 'da'
                  ? 'I dag arbejder jeg med skoler, lærere og elever i hele Danmark og leverer kurser, workshops og ressourcer, der gør læring om webudvikling, AI og digital kreativitet engagerende og tilgængelig.'
                  : 'Today, I work with schools, teachers, and students across Denmark, providing courses, workshops, and resources that make learning web development, AI, and digital creativity engaging and accessible.'}
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#F5A623] to-[#E09612] flex items-center justify-center text-white text-6xl">
              <div className="text-center">
                <div className="text-7xl mb-4">🚀</div>
                <p className="text-2xl">
                  {language === 'da' ? 'Bygger Digital Fremtid' : 'Building Digital Futures'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl mb-12 text-center">
            {language === 'da' ? 'Mine Værdier' : 'My Values'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="py-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#F5A623]/10 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-[#F5A623]" />
                  </div>
                  <h3 className="text-xl mb-2">{value.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl mb-12 text-center">
            {language === 'da' ? 'Mød Grundlæggeren' : 'Meet the Founder'}
          </h2>
          <Card className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 p-8">
              <div className="w-48 h-48 flex-shrink-0 mx-auto md:mx-0">
                <div className="w-full h-full bg-gradient-to-br from-[#F5A623] to-[#E09612] rounded-2xl flex items-center justify-center text-white text-6xl">
                  👨‍💻
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl mb-2">Emil Gray Thomsen</h3>
                <p className="text-lg text-[#F5A623] mb-4">
                  {language === 'da' ? 'Grundlægger & Underviser' : 'Founder & Educator'}
                </p>
                <div className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <p>
                    {language === 'da'
                      ? 'Med erfaring inden for webudvikling og uddannelse grundlagde jeg NordPixel for at bygge bro mellem traditionel undervisning og moderne digitale færdigheder.'
                      : 'With experience in web development and education, I founded NordPixel to bridge the gap between traditional education and modern digital skills.'}
                  </p>
                  <p>
                    {language === 'da'
                      ? 'Passioneret omkring at gøre teknologiuddannelse tilgængelig, har jeg undervist hundredvis af elever og undervisere på tværs af Danmark.'
                      : 'Passionate about making technology education accessible, I have taught hundreds of students and educators across Denmark.'}
                  </p>
                  <p>
                    {language === 'da'
                      ? 'Når jeg ikke underviser, bidrager jeg til open-source projekter og holder foredrag om uddannelsesteknologi.'
                      : 'When not teaching, I contribute to open-source projects and speak about educational technology.'}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div id="kontakt" className="mb-20">
          <h2 className="text-4xl mb-8 text-center">
            {language === 'da' ? 'Kontakt Mig' : 'Contact Me'}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-6 h-6 text-[#F5A623]" />
                  <h3 className="text-2xl">
                    {language === 'da' ? 'Send en Besked' : 'Send a Message'}
                  </h3>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {language === 'da'
                    ? 'Udfyld formularen, og jeg vender tilbage inden for 24 timer'
                    : 'Fill out the form and I will get back to you within 24 hours'}
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label={language === 'da' ? 'Dit Navn' : 'Your Name'}
                    placeholder={language === 'da' ? 'Indtast dit navn' : 'Enter your name'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    label={language === 'da' ? 'Email Adresse' : 'Email Address'}
                    type="email"
                    placeholder={language === 'da' ? 'din@email.dk' : 'your@email.com'}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Input
                    label={language === 'da' ? 'Emne' : 'Subject'}
                    placeholder={language === 'da' ? 'Hvad drejer det sig om?' : 'What is this about?'}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                  <div>
                    <label className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                      {language === 'da' ? 'Besked' : 'Message'}
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent transition-all"
                      rows={6}
                      placeholder={language === 'da' ? 'Din besked...' : 'Your message...'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button variant="primary" size="lg" type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    {language === 'da' ? 'Send Besked' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="py-8 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-[#F5A623]/10 rounded-full flex items-center justify-center">
                    <Mail className="w-7 h-7 text-[#F5A623]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    kontakt@nordpixel.dk
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-xl mb-2">
                    {language === 'da' ? 'Virksomhedsoplysninger' : 'Business Information'}
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {language === 'da' ? 'Virksomhed' : 'Company'}
                    </p>
                    <p className="font-semibold">NordPixel</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">CVR</p>
                    <p className="font-semibold">XXXXXXXX</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {language === 'da' ? 'Baseret i' : 'Based in'}
                    </p>
                    <p className="font-semibold">
                      {language === 'da' ? 'Danmark' : 'Denmark'}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="text-sm text-neutral-600 dark:text-neutral-400 text-center p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
                {language === 'da'
                  ? 'NordPixel er en enmandvirksomhed drevet af Emil Gray Thomsen. Jeg arbejder primært online og tilbyder kurser, workshops og konsultation til skoler og organisationer i hele Danmark.'
                  : 'NordPixel is a sole proprietorship run by Emil Gray Thomsen. I work primarily online and offer courses, workshops, and consultation to schools and organizations across Denmark.'}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl mb-8 text-center">
            {language === 'da' ? 'Ofte Stillede Spørgsmål' : 'Frequently Asked Questions'}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-400">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

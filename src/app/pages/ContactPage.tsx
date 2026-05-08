import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const faqs = [
    {
      question: 'How much do your courses cost?',
      answer: 'All our online courses are currently free to access. We want to make digital education accessible to everyone.',
    },
    {
      question: 'Do you offer in-person workshops?',
      answer: 'Yes! We offer on-site workshops for schools and institutions across Denmark. Contact us to discuss your needs.',
    },
    {
      question: 'Are the courses suitable for complete beginners?',
      answer: 'Absolutely! Many of our courses are designed specifically for beginners with no prior experience.',
    },
    {
      question: 'Can I download teaching materials?',
      answer: 'Yes, registered educators can download our teaching materials, lesson plans, and worksheets for free.',
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
          <h1 className="text-5xl md:text-6xl mb-6">Get in Touch</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="py-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#F5A623]/10 rounded-full flex items-center justify-center">
                <Mail className="w-7 h-7 text-[#F5A623]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                contact@nordpixel.dk
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="py-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#F5A623]/10 rounded-full flex items-center justify-center">
                <Phone className="w-7 h-7 text-[#F5A623]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                +45 XX XX XX XX
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="py-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#F5A623]/10 rounded-full flex items-center justify-center">
                <MapPin className="w-7 h-7 text-[#F5A623]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Copenhagen, Denmark
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-6 h-6 text-[#F5A623]" />
                <h2 className="text-2xl">Send a Message</h2>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                Fill out the form and we'll get back to you within 24 hours
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Your Name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Input
                  label="Subject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
                <div>
                  <label className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent transition-all"
                    rows={6}
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button variant="primary" size="lg" type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-2xl mb-6">Business Information</h2>
            <Card className="mb-6">
              <CardContent className="py-6 space-y-3">
                <div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Company Name</p>
                  <p className="font-semibold">NordPixel ApS</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">CVR Number</p>
                  <p className="font-semibold">XXXXXXXX</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Address</p>
                  <p className="font-semibold">Copenhagen, Denmark</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Email</p>
                  <p className="font-semibold">contact@nordpixel.dk</p>
                </div>
              </CardContent>
            </Card>

            <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-2xl flex items-center justify-center">
              <div className="text-center text-neutral-400">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl mb-8 text-center">Frequently Asked Questions</h2>
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

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UserPlus } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../components/LanguageProvider';

export function SignupPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setSubmitError(language === 'da' ? 'Adgangskoderne matcher ikke' : 'Passwords do not match');
      return;
    }
    setSubmitError('');
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-[#FFF5E6] dark:from-neutral-950 dark:to-neutral-900 flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#F5A623] to-[#E09612] rounded-full flex items-center justify-center">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl mb-2">{language === 'da' ? 'Opret konto' : 'Create Account'}</h1>
            <p className="text-neutral-600 dark:text-neutral-400">
              {language === 'da' ? 'Bliv en del af NordPixel og begynd din læringsrejse' : 'Join NordPixel and start your learning journey'}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitError && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300">
                {submitError}
              </div>
            )}
            <Input
              label={language === 'da' ? 'Fulde navn' : 'Full Name'}
              placeholder={language === 'da' ? 'Indtast dit navn' : 'Enter your name'}
              value={formData.name}
              onChange={(e) => {
                setSubmitError('');
                setFormData({ ...formData, name: e.target.value });
              }}
              required
            />
            <Input
              label={language === 'da' ? 'E-mailadresse' : 'Email Address'}
              type="email"
              placeholder={language === 'da' ? 'din@email.com' : 'your@email.com'}
              value={formData.email}
              onChange={(e) => {
                setSubmitError('');
                setFormData({ ...formData, email: e.target.value });
              }}
              required
            />
            <Input
              label={language === 'da' ? 'Adgangskode' : 'Password'}
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => {
                setSubmitError('');
                setFormData({ ...formData, password: e.target.value });
              }}
              required
            />
            <Input
              label={language === 'da' ? 'Bekræft adgangskode' : 'Confirm Password'}
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => {
                setSubmitError('');
                setFormData({ ...formData, confirmPassword: e.target.value });
              }}
              required
            />
            <div className="text-sm">
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" className="mt-1 rounded" required />
                <span className="text-neutral-600 dark:text-neutral-400">
                  {language === 'da' ? 'Jeg accepterer ' : 'I agree to the '}
                  <Link href="/terms" className="text-[#F5A623] hover:underline">
                    {language === 'da' ? 'servicevilkår' : 'Terms of Service'}
                  </Link>{' '}
                  {language === 'da' ? 'og ' : 'and '}
                  <Link href="/privacy" className="text-[#F5A623] hover:underline">
                    {language === 'da' ? 'privatlivspolitik' : 'Privacy Policy'}
                  </Link>
                </span>
              </label>
            </div>
            <Button variant="primary" size="lg" type="submit" className="w-full">
              {language === 'da' ? 'Opret konto' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
              {language === 'da' ? 'Har du allerede en konto? ' : 'Already have an account? '}
              <Link href="/login" className="text-[#F5A623] hover:underline font-medium">
                {language === 'da' ? 'Log ind' : 'Sign in'}
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LogIn } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../components/LanguageProvider';

export function LoginPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-[#FFF5E6] dark:from-neutral-950 dark:to-neutral-900 flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#F5A623] to-[#E09612] rounded-full flex items-center justify-center">
              <LogIn className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl mb-2">{language === 'da' ? 'Velkommen tilbage' : 'Welcome Back'}</h1>
            <p className="text-neutral-600 dark:text-neutral-400">
              {language === 'da' ? 'Log ind for at fortsætte læringen' : 'Sign in to continue learning'}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label={language === 'da' ? 'E-mailadresse' : 'Email Address'}
              type="email"
              placeholder={language === 'da' ? 'din@email.com' : 'your@email.com'}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Input
              label={language === 'da' ? 'Adgangskode' : 'Password'}
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span className="text-neutral-600 dark:text-neutral-400">{language === 'da' ? 'Husk mig' : 'Remember me'}</span>
              </label>
              <a href="mailto:kontakt@nordpixel.dk?subject=Password%20reset%20request" className="text-[#F5A623] hover:underline">
                {language === 'da' ? 'Glemt adgangskode?' : 'Forgot password?'}
              </a>
            </div>
            <Button variant="primary" size="lg" type="submit" className="w-full">
              {language === 'da' ? 'Log ind' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
              {language === 'da' ? 'Har du ikke en konto? ' : "Don't have an account? "}
              <Link href="/signup" className="text-[#F5A623] hover:underline font-medium">
                {language === 'da' ? 'Opret dig' : 'Sign up'}
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { useLanguage } from '../components/LanguageProvider';

export default function PrivacyPage() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-white px-4 py-20 text-neutral-900 dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl">{language === 'da' ? 'Privatlivspolitik' : 'Privacy Policy'}</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {language === 'da' ? 'NordPixel indsamler kun de oplysninger, der er nødvendige for at besvare henvendelser, håndtere workshopbookinger og forbedre undervisningstilbud.' : 'NordPixel only collects the information needed to answer enquiries, manage workshop bookings, and improve educational services.'}
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-2xl">{language === 'da' ? 'Hvad vi indsamler' : 'What We Collect'}</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            {language === 'da' ? 'Vi kan indsamle dit navn, din e-mailadresse, organisationsoplysninger og de informationer, du deler i kontakt- eller bookingformularer.' : 'We may collect your name, email address, organisation details, and the information you provide in contact or booking forms.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl">{language === 'da' ? 'Hvordan vi bruger det' : 'How We Use It'}</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            {language === 'da' ? 'Dine data bruges til at besvare dine forespørgsler, koordinere undervisningstilbud og sende de opdateringer, du aktivt tilmelder dig.' : 'Your data is used to respond to your requests, coordinate educational services, and send the updates you explicitly sign up for.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl">{language === 'da' ? 'Dine rettigheder' : 'Your Rights'}</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            {language === 'da' ? 'Du kan bede om indsigt, rettelse eller sletning af dine personoplysninger ved at kontakte kontakt@nordpixel.dk.' : 'You can request access, correction, or deletion of your personal data by contacting kontakt@nordpixel.dk.'}
          </p>
        </section>
      </div>
    </div>
  );
}
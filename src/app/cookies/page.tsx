import { BusinessInfoPage } from '@/components/shared/business-info-page'

export default function CookiesPage() {
  return (
    <BusinessInfoPage
      eyebrow="Legal"
      title="Cookie Policy"
      description="Details on essential, analytics, and preference cookies used to keep the platform reliable and relevant."
      metrics={[
        { value: 'April 18, 2026', label: 'Last updated' },
        { value: 'Essential', label: 'Always active' },
        { value: 'Configurable', label: 'Preference controls' },
        { value: 'Session + persistent', label: 'Cookie types' },
      ]}
      cards={[
        {
          title: 'Essential cookies',
          description: 'Required for account sign-in, session continuity, security checks, and core navigation behavior.',
        },
        {
          title: 'Analytics cookies',
          description: 'Used to understand page performance and improve listing discovery pathways.',
        },
        {
          title: 'Preference cookies',
          description: 'Remember selected filters, locale hints, and interface settings for repeat visits.',
        },
        {
          title: 'Cookie management',
          description: 'Browser settings and in-product controls allow you to update non-essential cookie choices.',
        },
      ]}
      lists={[
        {
          title: 'How we handle cookies',
          items: [
            'Minimum required scope for each cookie category',
            'Documented retention windows and review cycles',
            'Secure transport and modern browser constraints',
            'Transparent updates when policy changes',
          ],
        },
      ]}
      cta={{
        title: 'Need help with cookie settings?',
        description: 'Support can guide you through browser and account-level cookie preference options.',
        actionLabel: 'Get support',
        actionHref: '/help',
      }}
    />
  )
}

import { BusinessInfoPage } from '@/components/shared/business-info-page'

export default function HelpPage() {
  return (
    <BusinessInfoPage
      eyebrow="Resources"
      title="Help Center"
      description="Get clear answers on posting, search, account access, and listing quality best practices."
      actions={[
        { label: 'View system status', href: '/status', variant: 'outline' },
        { label: 'Contact support', href: '/contact' },
      ]}
      metrics={[
        { value: '<2h', label: 'Avg. first response' },
        { value: '96%', label: 'Resolution rate' },
        { value: '24/7', label: 'Monitoring' },
        { value: '180+', label: 'Help articles' },
      ]}
      cards={[
        {
          title: 'Account and login support',
          description: 'Recover access, update profile preferences, and manage sign-in safely across devices.',
        },
        {
          title: 'Listing publishing',
          description: 'Learn formatting tips, media guidelines, and how to improve visibility in search and category feeds.',
        },
        {
          title: 'Search and discovery troubleshooting',
          description: 'Fix common filter issues, understand ranking signals, and refine query quality quickly.',
        },
        {
          title: 'Safety and reporting',
          description: 'Report misuse, suspicious posts, or policy concerns through practical and transparent workflows.',
        },
      ]}
      lists={[
        {
          title: 'Popular help topics',
          items: [
            'How to create high-converting listings',
            'How to renew or update a listing',
            'How to save searches and revisit results',
            'How moderation and review timelines work',
          ],
        },
      ]}
      cta={{
        title: 'Need hands-on help?',
        description: 'Send your issue details and we will guide you with direct, step-by-step support.',
        actionLabel: 'Open support request',
        actionHref: '/contact',
      }}
    />
  )
}

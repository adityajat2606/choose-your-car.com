import { BusinessInfoPage } from '@/components/shared/business-info-page'

export default function DevelopersPage() {
  return (
    <BusinessInfoPage
      eyebrow="Resources"
      title="Developers"
      description="Build integrations, automate workflows, and extend listing operations using our platform-ready endpoints and practical implementation guides."
      actions={[
        { label: 'Service status', href: '/status', variant: 'outline' },
        { label: 'Contact developer support', href: '/contact' },
      ]}
      metrics={[
        { value: '18', label: 'Core endpoints' },
        { value: '<250ms', label: 'Avg. API latency' },
        { value: '99.95%', label: 'Uptime target' },
        { value: '6', label: 'SDK examples' },
      ]}
      cards={[
        {
          title: 'Listing ingestion workflows',
          description: 'Sync structured business records with category metadata, location signals, and media fields.',
        },
        {
          title: 'Search and filter integration',
          description: 'Use query and category parameters to surface relevant content inside your own internal tools.',
        },
        {
          title: 'Auth and webhook reliability',
          description: 'Implement secure token rotation and event-driven sync with retry-safe callbacks.',
        },
      ]}
      lists={[
        {
          title: 'Developer quick start',
          items: [
            'Create API credentials and scopes',
            'Test listing create and update endpoints',
            'Set webhook handlers for status and moderation events',
            'Monitor error rates and fallback strategy',
          ],
        },
      ]}
      cta={{
        title: 'Need integration guidance?',
        description: 'Our team can help you design a safe rollout path for production listing operations.',
        actionLabel: 'Request technical consult',
        actionHref: '/contact',
      }}
    />
  )
}

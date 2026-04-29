import { BusinessInfoPage } from '@/components/shared/business-info-page'

export default function StatusPage() {
  return (
    <BusinessInfoPage
      eyebrow="Resources"
      title="System Status"
      description="Real-time visibility into platform health across publishing, search, media delivery, and account services."
      actions={[
        { label: 'Support center', href: '/help', variant: 'outline' },
        { label: 'Report incident', href: '/contact' },
      ]}
      metrics={[
        { value: '99.97%', label: '30-day uptime' },
        { value: '0', label: 'Critical outages today' },
        { value: '2m', label: 'Alert propagation' },
        { value: '14m', label: 'Avg. incident resolve' },
      ]}
      cards={[
        {
          title: 'Publishing services: Operational',
          description: 'Listing create/update actions are processing normally with expected response times.',
        },
        {
          title: 'Search services: Operational',
          description: 'Query performance and indexing throughput are healthy across categories and local routes.',
        },
        {
          title: 'Media delivery: Operational',
          description: 'Image and asset delivery remains stable across mobile and desktop traffic patterns.',
        },
        {
          title: 'Auth and account: Operational',
          description: 'Sign-in, session continuity, and account update workflows are functioning as expected.',
        },
      ]}
      lists={[
        {
          title: 'Recent incidents',
          items: [
            'Apr 08, 2026: Search indexing lag in one region (resolved)',
            'Mar 26, 2026: Delayed media processing for uploads (resolved)',
            'Mar 11, 2026: Elevated auth retry volume (resolved)',
            'Feb 20, 2026: Intermittent dashboard timeout (resolved)',
          ],
        },
      ]}
      cta={{
        title: 'Seeing an issue not listed here?',
        description: 'Share the exact page, time, and action so we can investigate quickly.',
        actionLabel: 'Submit a status report',
        actionHref: '/contact',
      }}
    />
  )
}

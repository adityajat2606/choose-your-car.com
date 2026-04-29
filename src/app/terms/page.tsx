import { BusinessInfoPage } from '@/components/shared/business-info-page'
import { SITE_CONFIG } from '@/lib/site-config'

export default function TermsPage() {
  return (
    <BusinessInfoPage
      eyebrow="Legal"
      title="Terms of Service"
      description={`Rules and responsibilities for using ${SITE_CONFIG.name}, including account conduct, content standards, and platform limitations.`}
      metrics={[
        { value: 'April 18, 2026', label: 'Last updated' },
        { value: '13', label: 'Core policy sections' },
        { value: '24h', label: 'Critical abuse handling' },
        { value: 'Direct', label: 'Appeal process' },
      ]}
      cards={[
        {
          title: 'Account responsibilities',
          description: 'Keep credentials secure, maintain accurate business information, and use platform tools in good faith.',
        },
        {
          title: 'Content ownership and license',
          description: 'You retain ownership of submitted content while granting platform rights to display and distribute it for service operation.',
        },
        {
          title: 'Acceptable use requirements',
          description: 'No fraudulent listings, harassment, malicious automation, or unlawful activity.',
        },
        {
          title: 'Enforcement and suspension',
          description: 'Violations may trigger content removal, account restrictions, or suspension depending on severity and recurrence.',
        },
      ]}
      lists={[
        {
          title: 'Key expectations',
          items: [
            'Publish truthful and verifiable listing details',
            'Respect category rules and local regulations',
            'Respond to moderation requests within required timelines',
            'Use provided contact paths for disputes and corrections',
          ],
        },
      ]}
      cta={{
        title: 'Need policy clarification?',
        description: 'We can help interpret specific sections relevant to your account or listing workflow.',
        actionLabel: 'Request clarification',
        actionHref: '/contact',
      }}
    />
  )
}

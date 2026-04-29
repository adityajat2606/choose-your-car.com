import { BusinessInfoPage } from '@/components/shared/business-info-page'

export default function CommunityPage() {
  return (
    <BusinessInfoPage
      eyebrow="Resources"
      title="Community"
      description="Connect with local publishers and listing owners sharing practical growth and quality insights."
      actions={[
        { label: 'Read help guides', href: '/help', variant: 'outline' },
        { label: 'Join conversation', href: '/contact' },
      ]}
      metrics={[
        { value: '22k+', label: 'Community members' },
        { value: '1.4k', label: 'Monthly discussions' },
        { value: '85%', label: 'Questions answered' },
        { value: '48', label: 'Local groups' },
      ]}
      cards={[
        {
          title: 'Operator discussions',
          description: 'Talk tactics for better local discovery, offer quality, and marketplace conversion efficiency.',
        },
        {
          title: 'Trusted peer feedback',
          description: 'Get practical review on listing quality, post structure, and audience targeting before publishing.',
        },
        {
          title: 'Local growth circles',
          description: 'Join regional groups focused on specific categories and local market behavior patterns.',
        },
        {
          title: 'Monthly product office hours',
          description: 'Ask the product team directly about roadmap direction and feature requests.',
        },
      ]}
      lists={[
        {
          title: 'Community standards',
          items: [
            'Respectful, practical discussion only',
            'Evidence-backed recommendations encouraged',
            'No spam, no misleading offers',
            'Local relevance and transparency first',
          ],
        },
      ]}
      cta={{
        title: 'Want to contribute as a local expert?',
        description: 'Share your domain knowledge and help businesses publish better listings and offers.',
        actionLabel: 'Apply as contributor',
        actionHref: '/contact',
      }}
    />
  )
}

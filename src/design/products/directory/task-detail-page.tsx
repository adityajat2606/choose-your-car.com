import Link from 'next/link'
import { ArrowLeft, ArrowRight, Globe, Mail, MapPin, Phone, ShieldCheck, Tag } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { TaskPostCard } from '@/components/shared/task-post-card'
import { RichContent, formatRichHtml } from '@/components/shared/rich-content'
import { PhotoLightboxGallery } from '@/components/shared/photo-lightbox-gallery'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'
import { getDirectoryUiPreset } from '@/design/directory-ui'

export function DirectoryTaskDetailPage({
  task,
  taskLabel,
  taskRoute,
  post,
  description,
  category,
  images,
  mapEmbedUrl,
  related,
}: {
  task: TaskKey
  taskLabel: string
  taskRoute: string
  post: SitePost
  description: string
  category: string
  images: string[]
  mapEmbedUrl: string | null
  related: SitePost[]
}) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const location = typeof content.address === 'string' ? content.address : typeof content.location === 'string' ? content.location : ''
  const website = typeof content.website === 'string' ? content.website : ''
  const phone = typeof content.phone === 'string' ? content.phone : ''
  const email = typeof content.email === 'string' ? content.email : ''
  const highlights = Array.isArray(content.highlights) ? content.highlights.filter((item): item is string => typeof item === 'string') : []
  const ui = getDirectoryUiPreset()
  const descriptionHtml = formatRichHtml(description, 'Details coming soon.')

  const schemaPayload = {
    '@context': 'https://schema.org',
    '@type': task === 'profile' ? 'Organization' : 'LocalBusiness',
    name: post.title,
    description,
    image: images[0],
    url: `${taskRoute}/${post.slug}`,
    address: location || undefined,
    telephone: phone || undefined,
    email: email || undefined,
  }

  return (
    <div className={`min-h-screen ${ui.shell}`}>
      <SchemaJsonLd data={schemaPayload} />
      <main className="pb-16">
        <section className="bg-[linear-gradient(120deg,#243649_0%,#1a2d41_60%,#132436_100%)] text-white">
          <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link href={taskRoute} className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                Back to {taskLabel}
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-white/80 bg-white/10">
                  <ContentImage src={images[0]} alt={post.title} fill className="object-cover" priority />
                </div>
                <div>
                  <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100/80">
                    <ShieldCheck className="h-4 w-4" />
                    {ui.label}
                  </p>
                  <h1 className="mt-2 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl">{post.title}</h1>
                  <p className="mt-1 text-sm text-white/75">{taskLabel}</p>
                </div>
              </div>
            </div>

            <div className="mt-7 border-b border-white/15">
              <span className="inline-flex -mb-px border-b-4 border-sky-400 bg-sky-500 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                Profile
              </span>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-8 grid max-w-[1600px] gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_38%] lg:px-8">
          <article className="space-y-6">
            <section className={`border p-5 sm:p-6 ${ui.detailPanel}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-700">Description</p>
              <RichContent html={descriptionHtml} className={`mt-4 text-sm leading-8 ${ui.muted}`} />
            </section>

            {images.length ? (
              <section className={`border p-5 sm:p-6 ${ui.detailPanel}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-700">Photos</p>
                <div className="mt-4">
                  <PhotoLightboxGallery photos={images} title={post.title} />
                </div>
              </section>
            ) : null}

            <section className={`border p-5 sm:p-6 ${ui.detailPanel}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-700">Activities</p>
              {highlights.length ? (
                <ul className="mt-4 space-y-2">
                  {highlights.slice(0, 6).map((item) => (
                    <li key={item} className={`text-sm leading-7 ${ui.muted}`}>- {item}</li>
                  ))}
                </ul>
              ) : (
                <p className={`mt-4 text-sm ${ui.muted}`}>{post.title} has not yet added business activities.</p>
              )}
            </section>

            <section className={`border p-5 sm:p-6 ${ui.detailPanel}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-700">Certifications</p>
              <p className={`mt-4 text-sm ${ui.muted}`}>{post.title} has not yet added certifications.</p>
            </section>

            <section className={`border p-5 sm:p-6 ${ui.detailPanel}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-700">Awards</p>
              <p className={`mt-4 text-sm ${ui.muted}`}>{post.title} has not yet added awards.</p>
            </section>
          </article>

          <aside className="space-y-5">
            <div className={`overflow-hidden border ${ui.detailPanel}`}>
              <div className="border-b px-5 py-4">
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-700">Offices</p>
              </div>
              {mapEmbedUrl ? (
                <iframe src={mapEmbedUrl} title={`${post.title} map`} className="h-[260px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              ) : (
                <div className="h-[260px] bg-slate-100" />
              )}
            </div>

            <div className={`border p-5 ${ui.detailAside}`}>
              <h3 className={`text-2xl font-semibold ${ui.title}`}>{post.title}</h3>
              <div className="mt-4 space-y-3 text-sm">
                {location ? <div className={`flex items-start gap-3 ${ui.muted}`}><MapPin className="mt-0.5 h-4 w-4 shrink-0" />{location}</div> : null}
                {phone ? <div className={`flex items-center gap-3 ${ui.muted}`}><Phone className="h-4 w-4 shrink-0" />{phone}</div> : null}
                {email ? <div className={`flex items-center gap-3 ${ui.muted}`}><Mail className="h-4 w-4 shrink-0" />{email}</div> : null}
                {website ? <div className={`flex items-center gap-3 ${ui.muted}`}><Globe className="h-4 w-4 shrink-0" />{website}</div> : null}
              </div>
              {website ? (
                <a href={website} target="_blank" rel="noreferrer" className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${ui.eyebrow}`}>
                  Visit website
                  <ArrowRight className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </aside>
        </div>

        {related.length ? (
          <section className="mx-auto mt-16 max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${ui.eyebrow}`}>Recommended</p>
                <h2 className={`mt-2 text-2xl font-semibold ${ui.title}`}>More nearby matches</h2>
              </div>
              <span className={`inline-flex w-fit items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${ui.chip}`}>
                <Tag className="h-3.5 w-3.5" />
                {taskLabel}
              </span>
            </div>
            <div className={ui.relatedGrid}>
              {related.map((item) => (
                <TaskPostCard key={item.id} post={item} href={`${taskRoute}/${item.slug}`} taskKey={task} compact />
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  )
}

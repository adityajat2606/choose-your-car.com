'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'
import { Building2, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { useAuth } from '@/lib/auth-context'

export default function LoginPage() {
  const router = useRouter()
  const { login, isLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.')
      return
    }

    try {
      await login(email.trim(), password)
      router.push('/')
    } catch {
      setError('Unable to sign in. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FEFDDF_0%,#fffdf2_100%)] text-[#1f2d3a]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-[#73A5CA]/24 bg-[linear-gradient(180deg,#73A5CA_0%,#FFC81E_60%,#E87F24_100%)] p-8 text-white shadow-[0_26px_70px_rgba(7,97,125,0.3)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/14 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em]">
              <Sparkles className="h-3.5 w-3.5" />
              Business dashboard access
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">Sign in to manage listings.</h1>
            <p className="mt-5 text-sm leading-8 text-[#2b3d4f]/90">Your account data is stored locally in this browser so you stay signed in between visits.</p>
            <div className="mt-8 grid gap-4">
              {[
                'Post and manage business listings',
                'Track local offers and responses',
                'Keep your profile and contact details updated',
              ].map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-white/20 bg-white/10 px-4 py-4 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#73A5CA]/24 bg-white p-8 shadow-[0_22px_60px_rgba(7,97,125,0.12)]">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#FEFDDF] p-2 text-[#E87F24]"><Building2 className="h-5 w-5" /></div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#73A5CA]">Welcome back</p>
            </div>

            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <label className="grid gap-2 text-sm">
                <span className="font-medium text-[#2b3d4f]">Email address</span>
                <input
                  className="h-12 rounded-xl border border-[#73A5CA]/24 bg-white px-4 text-sm outline-none transition focus:border-[#73A5CA]/40 focus:ring-2 focus:ring-[#73A5CA]/20"
                  placeholder="you@business.com"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span className="font-medium text-[#2b3d4f]">Password</span>
                <input
                  className="h-12 rounded-xl border border-[#73A5CA]/24 bg-white px-4 text-sm outline-none transition focus:border-[#73A5CA]/40 focus:ring-2 focus:ring-[#73A5CA]/20"
                  placeholder="Enter password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>

              {error ? <p className="text-sm text-red-600">{error}</p> : null}

              <button type="submit" disabled={isLoading} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#E87F24] px-6 text-sm font-semibold text-[#FEFDDF] transition hover:bg-[#E87F24]/90 disabled:cursor-not-allowed disabled:opacity-70">
                {isLoading ? 'Signing in...' : 'Sign in'}
                {!isLoading ? <ShieldCheck className="h-4 w-4" /> : null}
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between text-sm text-[#73A5CA]">
              <Link href="/forgot-password" className="hover:underline">Forgot password?</Link>
              <Link href="/register" className="inline-flex items-center gap-2 font-semibold text-[#E87F24] hover:underline">
                <CheckCircle2 className="h-4 w-4" />
                Create account
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}



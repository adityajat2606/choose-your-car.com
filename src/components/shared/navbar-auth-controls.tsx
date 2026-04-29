'use client'

import Link from 'next/link'
import { Bookmark, ChevronDown, LayoutGrid, LogOut, Plus, Settings, User, FileText, Building2, Tag, Image as ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'

const taskIcons: Partial<Record<TaskKey, any>> = {
  article: FileText,
  listing: Building2,
  sbm: LayoutGrid,
  image: ImageIcon,
  profile: User,
  social: LayoutGrid,
  pdf: FileText,
  org: Building2,
  comment: FileText,
}

export function NavbarAuthControls() {
  const { user, logout } = useAuth()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" className="hidden h-10 gap-1 rounded-full bg-[#FEFDDF] px-4 text-[#E87F24] shadow-[0_16px_30px_rgba(115,165,202,0.24)] hover:bg-[#FFC81E]/25 sm:flex">
            <Plus className="h-4 w-4" />
            Create
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 border-[#73A5CA]/25 bg-[rgba(254,253,223,0.98)]">
          {SITE_CONFIG.tasks.filter((task) => task.enabled && task.key !== 'classified').map((task) => {
            const Icon = taskIcons[task.key] || LayoutGrid
            return (
              <DropdownMenuItem key={task.key} asChild>
                <Link href={`/create/${task.key}`}>
                  <Icon className="mr-2 h-4 w-4" />
                  Create {task.label}
                </Link>
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        size="sm"
        onClick={logout}
        className="h-10 rounded-full bg-[#E87F24] px-4 text-[#FEFDDF] hover:bg-[#E87F24]/90"
      >
        <LogOut className="mr-2 h-4 w-4" />
        Sign Out
      </Button>
    </>
  )
}


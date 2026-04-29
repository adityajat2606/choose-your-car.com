"use client";

import { useMemo, useState, useEffect } from "react";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { buildPostUrl } from "@/lib/task-data";
import { normalizeCategory, isValidCategory } from "@/lib/categories";
import type { TaskKey } from "@/lib/site-config";
import type { SitePost } from "@/lib/site-connector";
import { getLocalPostsForTask } from "@/lib/local-posts";
import { cn } from "@/lib/utils";
import { getDirectoryUiPreset } from "@/design/directory-ui";

type Props = {
  task: TaskKey;
  initialPosts: SitePost[];
  category?: string;
  className?: string;
};

export function TaskListClient({ task, initialPosts, category, className }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const localPosts = getLocalPostsForTask(task);
  const ui = getDirectoryUiPreset();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const merged = useMemo(() => {
    // On server or before mount, only use initial posts to avoid hydration mismatch
    if (!isMounted) {
      return filterPosts(initialPosts, category);
    }

    const bySlug = new Set<string>();
    const combined: Array<SitePost & { localOnly?: boolean; task?: TaskKey }> = [];

    localPosts.forEach((post) => {
      if (post.slug) bySlug.add(post.slug);
      combined.push(post);
    });

    initialPosts.forEach((post) => {
      if (post.slug && bySlug.has(post.slug)) return;
      combined.push(post);
    });

    return filterPosts(combined, category);
  }, [category, initialPosts, localPosts, isMounted]);

  function filterPosts(posts: SitePost[], categoryFilter?: string) {
    const normalizedCategory = categoryFilter ? normalizeCategory(categoryFilter) : "all";
    if (normalizedCategory === "all") {
      return posts.filter((post) => {
        const content = post.content && typeof post.content === "object" ? post.content : {};
        const value = typeof (content as any).category === "string" ? (content as any).category : "";
        return !value || isValidCategory(value);
      });
    }

    return posts.filter((post) => {
      const content = post.content && typeof post.content === "object" ? post.content : {};
      const value =
        typeof (content as any).category === "string"
          ? normalizeCategory((content as any).category)
          : "";
      return value === normalizedCategory;
    });
  }

  if (!merged.length) {
    return (
      <div className={cn("rounded-md border-2 border-dashed p-10 text-center text-sm", ui.softPanel, ui.muted)}>
        No posts yet for this section.
      </div>
    );
  }

  const defaultGrid = task === "listing" ? ui.listGrid : "grid gap-6 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={cn(defaultGrid, className)}>
      {merged.map((post) => {
        const localOnly = (post as any).localOnly;
        const href = localOnly ? `/local/${task}/${post.slug}` : buildPostUrl(task, post.slug);
        return <TaskPostCard key={post.id} post={post} href={href} taskKey={task} />;
      })}
    </div>
  );
}

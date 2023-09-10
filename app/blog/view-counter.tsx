'use client';

import { useEffect } from 'react';
import { increment } from '@/server-actions/increment-view';

export default function ViewCounter({
  slug,
  allViews,
  trackView,
}: {
  slug: string;
  allViews: {
    slug: string;
    count: number;
  }[];
  trackView?: boolean;
}) {
  const viewsForSlug = allViews && allViews.find((view) => view.slug === slug);
  const number = new Number(viewsForSlug?.count || 0);

  useEffect(() => {
    if (trackView) {
      increment(slug);
    }
  }, []);

  const views = number.toLocaleString();

  return (
    <p className="text-muted-foreground">
      {`${views} view${views === '1' ? '' : 's'}`}
    </p>
  );
}

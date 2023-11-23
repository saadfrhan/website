'use client';

import { P } from '@/components/ui/p';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <P>Oh no, something went wrong... maybe refresh?</P>
    </div>
  );
}

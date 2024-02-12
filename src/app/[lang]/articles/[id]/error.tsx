'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    document.title = 'Not Found 404';
  }, []);

  return (
    <div>
      <h2>Article Not Found</h2>
    </div>
  );
}

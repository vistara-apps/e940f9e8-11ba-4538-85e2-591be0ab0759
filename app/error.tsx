'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-fg mb-4">
          Something went wrong!
        </h2>
        <p className="text-fg/60 mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

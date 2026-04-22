import { useRouter } from "@tanstack/react-router";

export function DefaultErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold">Something went wrong</h1>

        {import.meta.env.DEV && error.message && (
          <pre className="mt-4 text-xs text-red-500">{error.message}</pre>
        )}

        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

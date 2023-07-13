import { FallbackProps } from "react-error-boundary";

interface ErrorFallbackProps extends FallbackProps {
  /** Message to display above the error details. */
  message?: string;

  /** When true, call location.reload to completely reload everything. This is necessary when a remote fails to load. */
  hardReloadWhenTryAgainIsClicked?: boolean;
}

export function ErrorFallback({
  error,
  resetErrorBoundary,
  message = "Oops! Something went wrong.",
  hardReloadWhenTryAgainIsClicked = false,
}: ErrorFallbackProps) {
  return (
    <div role="alert">
      <p>{message}</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button
        onClick={
          hardReloadWhenTryAgainIsClicked
            ? () => location.reload()
            : resetErrorBoundary
        }
      >
        Try again
      </button>
    </div>
  );
}

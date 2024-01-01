/**
 * @class
 * Custom error class for use with the Artificium context.
 *
 * This error is thrown when attempting to access the Artificium context without it being set, typically when using the `useArtificium` hook outside the context of an `ArtificiumProvider`.
 *
 * @extends Error
 */
class ArtificiumContextError extends Error {
  constructor() {
    super("useArtificium must be used within an ArtificiumProvider");
  }
}

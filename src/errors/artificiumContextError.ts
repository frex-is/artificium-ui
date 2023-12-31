class ArtificiumContextError extends Error {
  constructor() {
    super("useArtificium must be used within an ArtificiumProvider")
  }
}
/**
 * Custom hook for splitting an array into smaller chunk
 * 
 * @param items `any[]` - The array to be chunked.
 * @param chunkSize `number` - The desired size of each chunk.
 *   
 * @returns `{ listOfChunks: any[][] }` - An object containing the list of chunks.
 */
export const useChunk = (items: any[], chunkSize: number) => {
  const createChunks = (array: any[], chunkSize: number) =>
    Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, i) =>
      array.slice(i * chunkSize, (i + 1) * chunkSize),
    );

  const listOfChunks: any[][] = createChunks(items, chunkSize);

  return { listOfChunks };
};
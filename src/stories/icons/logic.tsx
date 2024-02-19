import { FC } from "react";

export const useIconStore = (icons: FC[]) => {
  const createChunks = (array: any[], chunkSize: number) =>
    Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, i) =>
      array.slice(i * chunkSize, (i + 1) * chunkSize),
    );

  const rows: FC[][] = createChunks(icons, 8);

  return { rows };
};

export const categoryTypes = ['chat', 'board'] as const;
export type CategoryType = (typeof categoryTypes)[number];

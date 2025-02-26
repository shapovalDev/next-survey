// 01.01.1991
export const dateToStandardFormat = (date: Date): string =>
  date.toLocaleDateString('ua-UA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

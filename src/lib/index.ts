const intl = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export const formatDate = (date: Date) => {
  const parts = intl.formatToParts(date);
  const day = parts.find(({ type }) => type === 'day')?.value || '';
  const other = parts
    .filter(({ type }) => type !== 'day')
    .map(({ value }) => value)
    .join('');

  return { day, other };
};

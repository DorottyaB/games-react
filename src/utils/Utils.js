export const formatDate = str => {
  const date = new Date(str);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

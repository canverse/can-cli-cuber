export function formatTime(time: number, type: String = 'normal'): String {
  const start = type === 'normal' ? 14 : 17;
  const end = type === 'normal' ? -2 : -5;

  return new Date(time).toISOString().slice(start, end);
}

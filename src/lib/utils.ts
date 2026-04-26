export function nanoid() {
  return Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
}

export function formatTime(date: Date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export function truncate(str: string, max: number = 80) {
  return str.length > max ? str.substring(0, max) + "..." : str;
}
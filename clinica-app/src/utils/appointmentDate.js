export function getNextHour(now = new Date()) {
  const date = new Date(now);
  date.setHours(date.getHours() + 1, 0, 0, 0);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  return `${year}-${month}-${day}T${hour}:00`;
}

export function formatAppointmentDate(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):00$/.exec(value);
  if (!match) return null;

  const [, year, month, day, hour] = match;
  return `${day}/${month}/${year} ${hour}:00:00`;
}

export function isFutureAppointment(value, now = new Date()) {
  return new Date(value).getTime() > now.getTime();
}

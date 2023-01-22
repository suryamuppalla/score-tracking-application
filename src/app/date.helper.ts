export function getLastTwelveDays() {
  const dates: string[] = [];
  for (
    let dateObj = new Date(new Date().setDate(new Date().getDate() - 12));
    dateObj <= new Date();
    dateObj.setDate(dateObj.getDate() + 1)
  ) {
    dates.push(new Date(dateObj).toISOString().slice(0, 10));
  }
  return dates;
}

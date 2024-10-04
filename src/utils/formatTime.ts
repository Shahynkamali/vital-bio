const formatTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear() % 100;

  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;

  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedDay = day.toString().padStart(2, '0');
  const formattedMonth = month.toString().padStart(2, '0');
  const formattedYear = year.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes} ${ampm} ${formattedDay}.${formattedMonth}.${formattedYear}`;
};

export { formatTime };

//function that takes number of days ahead, hours, and minutes and returns a date object
export function getDateTime(daysAhead, hours, minutes) {
  const date = new Date();
  date.setDate(date.getDate() + daysAhead);
  date.setHours(hours);
  date.setMinutes(minutes);
  return date;
}

//turn date object into a string that displays day (tomorrow, today, etc) or date and time neatly
export function getDateTimeText(date) {

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const inOneWeek = new Date();
  inOneWeek.setDate(inOneWeek.getDate() + 7);

  const datetimeObj = new Date(date);
  const dateObj = new Date(date);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = days[datetimeObj.getDay()];
  const timeText = datetimeObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = dateObj.getDate();
  
  const monthNr = dateObj.getMonth() + 1;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const monthText = months[dateObj.getMonth()];

  if (dateString === today.getDate()) {
    return 'Today ' + timeText;
  } else if (dateString === tomorrow.getDate()) {
    return 'Tomorrow ' + timeText;
  } else if (datetimeObj > inOneWeek)
    return dateString + ' ' + monthText + ' ' + timeText;
  {
    return dayOfWeek + ' ' + timeText;
  }
}
import { format } from 'date-fns';

function CalendarButton(props) {
  
  const { eventTitle, eventDescription, startDate, endDate, googleMapsLink } = props;

  const formattedStartDate = format(startDate, "yyyyMMdd'T'HHmmss");
  const formattedEndDate = format(endDate, "yyyyMMdd'T'HHmmss");
  const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${formattedStartDate}/${formattedEndDate}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(googleMapsLink)}&sf=true&output=xml`;

  const createCalendarEvent = () => {
    window.open(calendarUrl, '_blank');
  };

  return (
    <button onClick={createCalendarEvent}>+ Google Calendar</button>
  );
}

export default CalendarButton;

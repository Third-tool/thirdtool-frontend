import styled from 'styled-components';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = () => {
  const [value, setValue] = useState(new Date());
  return (
    <CalendarWrapper>
      <StyledCalendar
        locale='en-US'
        formatDay={(locale, date) => String(date.getDate())}
        formatShortWeekday={(locale, date) =>
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]
        }
        value={value}
        onChange={setValue}
        tileDisabled={({ date, view }) => {
          if (view === 'month') {
            return date.getMonth() !== value.getMonth();
          }
          return false;
        }}
      />
    </CalendarWrapper>
  );
};

export default CalendarView;

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  border-radius: 16px;
  padding: 20px;
  height: 560px;
  width: 680px;
  margin-left: 40px;
`;

const StyledCalendar = styled(Calendar)`
  background-color: #333;
  width: 560px;
  border: none;

  .react-calendar__navigation {
    display: none;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    color: #fff;
  }

  .react-calendar__tile {
    background: transparent;
    color: #fff;
    height: 40px;
    font-size: 1rem;
    border-radius: 50%;
    transition: 0.2s;
  }

  .react-calendar__tile--now {
    background: #444;
    border-radius: 50%;
    color: #fff;
  }

  .react-calendar__tile:disabled {
    visibility: hidden;
  }

  .react-calendar__tile--active {
    background: none;
    border: 2px solid white;
    color: #fff;
    border-radius: 50%;
  }

  .react-calendar__tile:enabled:hover {
    background: #333;
  }
`;

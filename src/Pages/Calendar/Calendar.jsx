import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayDridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";
import timeGridPlugin from "@fullcalendar/timegrid";
import useCalender from "../../Store/Calendar";
import { createEventId } from "../../data/data";
/* eslint-disable no-restricted-globals */

const Calender = () => {
  const { currentEvents, setCurrentEvents } = useCalender();

  const handleEvents = async (events) => {
    await Promise.resolve(setCurrentEvents(events));
  };

  const handleDataSelect = (selectedInfo) => {
    let title = prompt("Please enter the title for the event");
    let calendarApi = selectedInfo.view.calendar;

    calendarApi.unselect();

    if (title)
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectedInfo.start,
        end: selectedInfo.end,
        allDay: selectedInfo.allDay,
      });
  };
  const handleEventClick = (clickInfo) => {
    if (confirm("Are you sure that you want to delete it?")) {
      clickInfo.event.remove();
    }
  };
  return (
    <div className="calender-container">
      <div>
        <FullCalendar
          plugins={[dayDridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          allDaySlot={false}
          initialView="timeGridWeek"
          slotDuration={"01:00:00"}
          editable={true}
          selectable={true}
          selectMirror={true}
          datMaxEvents={true}
          weekends={true}
          nowIndicator={true}
          initialEvents={currentEvents}
          eventsSet={handleEvents}
          select={handleDataSelect}
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
};

export default Calender;

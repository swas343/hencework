import { useEffect } from "react";

const CalendarCard = (props) =>{
    useEffect(() => {
        var calendarMiniEl = document.getElementById(props.id);
        var calendarMini = new window.FullCalendar.Calendar(calendarMiniEl, {
          initialView: "dayGridMonth",
          headerToolbar: {
            end: "today prev,next",
          },
        });
        calendarMini.render();
    })
    return (
        <div className="card-style calendar-card mb-30">
            <div id={props.id}></div>
        </div>
    )
}

export default CalendarCard;
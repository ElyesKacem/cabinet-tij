import React from "react";
// Your App.tsx file
import "react-day-picker/dist/style.css";
import "./calendar.css";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

export default function Calendar({ name, onChange, setShowCalendar }) {
  const today = new Date();
  const [selected, setSelected] = React.useState(today);

  // const css = `
  // .new-today{
  //   background-color:red;
  //   color:white;
  // }
  // .new-rdp-day{
  //   margin:auto;
  // }
  // .new-rdp-head-cell{
  //   witdh:100px;
  // }
  // `;

  const handle_change = (select) => {
    if (select) {
      setSelected(select);
      const event = { target: { name: name, value: new Date(select) } };
      onChange(event);
    }
  };

  let footer = (
    <div style={{ display: "flex" }}>
      <div>Please pick a day.</div>
      <div
        onClick={() => {
          setShowCalendar(false);
        }}
      >
        Ok
      </div>
    </div>
  );
  if (selected) {
    // footer = <p>You picked {format(selected, "PP")}.</p>;
    footer = (
      <div
        style={{
          display: "flex",
          marginTop: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>Day choosen : {format(selected, "PP")}.</div>
        <div
          className="calendar-ok"
          onClick={() => {
            setShowCalendar(false);
          }}
        >
          OK
        </div>
      </div>
    );
  }
  return (
    <div className="flexalignjustify">
      {/* <style>{css}</style> */}
      <DayPicker
        // modifiersClassNames={{
        //   selected: "new-rdp-head-cell",
        //   today: "new-today",
        // }}
        mode="single"
        selected={selected}
        footer={footer}
        styles={{
          caption: {
            background:
              "transparent linear-gradient(180deg, #242D65 0%, #CF2032 100%) 0% 0% no-repeat padding-box",
            borderRadius: 5,
            color: "white",
          },
          head_cell: {
            // color: "red",
            width: "60px",
          },
          table: {
            maxWidth: "none",
          },
          day: {
            margin: "auto",
          },
          nav_button_next: {
            color: "red",
          },
        }}
        // disabledDays={{ after: today }}
        // selectedDays={new Date()}
        onSelect={handle_change}
        defaultMonth={new Date()}
      />
    </div>
  );
}

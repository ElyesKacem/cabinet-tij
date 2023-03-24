import React from "react";
// Your App.tsx file
import "react-day-picker/dist/style.css";
import "./calendar.css";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { LangContext } from "../../context/Lang.context";

export default function Calendar({ name, onChange, setShowCalendar }) {
  const { lang } = React.useContext(LangContext);
  const today = new Date();
  const [selected, setSelected] = React.useState(today);

  const css = `
  .new-today{
    
    color:white;
  }
  .new-selected{
    background: transparent linear-gradient(180deg, #242d65 0%, #cf2032 100%) 0%;
    color:white;
    border:none;
    font-weight:bold;
  }
  `;

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
        <div>
          {lang == "en" ? "Chosen day" : "Date choisi"} :{" "}
          {format(selected, "PP")}.
        </div>
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
      <style>{css}</style>
      <DayPicker
        modifiersClassNames={{
          selected: "new-selected",
        }}
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
          day_selected: {
            color: "red",
          },

          // nav_button_next: {
          //   color: "red",
          // },
        }}
        // disabledDays={{ after: today }}
        // selectedDays={new Date()}
        onSelect={handle_change}
        defaultMonth={new Date()}
      />
    </div>
  );
}

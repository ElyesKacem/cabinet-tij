import React from "react";
// Your App.tsx file
import "react-day-picker/dist/style.css";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

export default function Calendar({ name, onChange }) {
  const today = new Date();
  const [selected, setSelected] = React.useState(today);
  const handle_change = (select) => {
    if (select) {
      setSelected(select);
      const event = { target: { name: name, value: new Date(select) } };
      onChange(event);
    }
  };

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <div className="flexalignjustify">
      <DayPicker
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
        }}
        // disabledDays={{ after: today }}
        // selectedDays={new Date()}
        onSelect={handle_change}
        defaultMonth={new Date()}
      />
    </div>
  );
}

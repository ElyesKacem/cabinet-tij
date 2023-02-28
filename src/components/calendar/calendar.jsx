import React from 'react';
// Your App.tsx file
import 'react-day-picker/dist/style.css';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

export default function Calendar() {
  const [selected, setSelected] = React.useState();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
}
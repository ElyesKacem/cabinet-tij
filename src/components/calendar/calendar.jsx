import React from 'react';
// Your App.tsx file
import 'react-day-picker/dist/style.css';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

export default function Calendar() {
  const today = new Date();
  const [selected, setSelected] = React.useState(today);

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  return (
    <div className='flexalignjustify'>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
        
        // disabledDays={{ after: today }}
        // selectedDays={new Date()}
        defaultMonth={new Date()}
      />
    </div>
  );
}
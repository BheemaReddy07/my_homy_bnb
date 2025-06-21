import React from 'react'
import { DateRange } from "react-date-range";

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function CalenderInput({ value, onChange, disabledDates, ...props }) {


    return (
        <DateRange
            ranges={[value]}
            onChange={onChange}
            minDate={new Date()}
            disabledDates={disabledDates}
            {...props}
        />
    )
}

export default CalenderInput
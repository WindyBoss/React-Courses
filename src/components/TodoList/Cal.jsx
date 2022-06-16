import Calendar from 'react-calendar';
import React, { Component, useState } from "react"; // -> Component from 'react' library

import 'react-calendar/dist/Calendar.css';
import { connect, getIn } from 'formik'; // -> react form library


const Cal = (props) => {
  const [value, onChange] = useState(new Date());

  console.log(value);
  console.log(props);

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

//  const ErrorMessage = props => {
//    // All FormikProps available on props.formik!
//    const error = getIn(props.formik.errors, props.name);
//    const touch = getIn(props.formik.touched, props.name);
//    return touch && error ? error : null;
//  };

export default connect(Cal);

import React from 'react';
import { Formik } from 'formik';

const BasicExample = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{ name: 'jared' }}
      onSubmit={(values, actions) => {
        console.log(JSON.stringify(values, null, 2));
      }}
      render={props => (
        <form onSubmit={props.handleSubmit}>
          <br />
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name1}
            name="name1"
          />
          <br />
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name2}
            name="name2"
          />
          <br />
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name3}
            name="name3"
          />
          <br />
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name4}
            name="name4"
          />
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <button type="submit">Submit</button>
        </form>
      )}
    />
  </div>
);

export default BasicExample;

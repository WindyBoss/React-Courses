import PropTypes from 'prop-types';
import React from 'react';

/*
* Children Methods ==> https://reactjs.org/docs/react-api.html#children
* if container tag is not necessary, it is possible to use React Fragment container, which can replace container and during rendering will be deleted from

import React, { Fragment } from "react";
const post = (
  <Fragment>
    <h2>Post Header</h2>
    <p>Post text</p>
  </Fragment>
);

*/

export default function Section({ title, children }) {
    return (
        <div>
            {title && <h2>{title}</h2>}
            {children} 
            {React.Children.count(children)}
        </div>

        
    );
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

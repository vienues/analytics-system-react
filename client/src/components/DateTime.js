import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon'


const DateTime = (props) => (
  DateTime.fromISO(props.children)
);

DateTime.propTypes = {

};

export default DateTime;

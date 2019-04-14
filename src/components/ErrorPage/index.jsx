import React from 'react';
// components
import { MdErrorOutline as ErrorIcon } from 'react-icons/lib/md';
// style
import colors from '../../dependencies/Colors';
import './errorPage.scss';

const Error = ({ code, title, description }) => (
  <div className="errorPage">
    <div className="errorPage_code">
      <ErrorIcon color={colors.gray} size={50} />
      <span className="">{code}</span>
    </div>
    <h3 className="errorPage_title">
      {title}
    </h3>
    <p className="errorPage_description">
      {description}
    </p>
  </div>
);

export default Error;
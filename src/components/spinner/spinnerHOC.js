import React from 'react';
import PropTypes from 'prop-types';
import './spinnerHOC.scss';

const SpinnerHOC = WrappedComponent => {
  const Spinner = ({ isloading, ...otherProps }) => {
    return isloading ? (
      <div className='spinner-overlay'>
        <div className='spinner-container'></div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  Spinner.propTypes = {
    isloading: PropTypes.bool.isRequired,
  };

  return Spinner;
};

export default SpinnerHOC;

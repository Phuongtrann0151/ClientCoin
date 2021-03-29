import React, { 
} from 'react';

import PropTypes from 'prop-types';

const Preload = (props) => {
  return (
    <div className="preload" style={props.style}>
        <section>
            <div className="loader loader-7">
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
        </section>
        <h6>Welcome to {props.siteName}</h6>
    </div>
  );
}

Preload.propTypes = {
    style: PropTypes.object,
    siteName: PropTypes.string
};

export default Preload
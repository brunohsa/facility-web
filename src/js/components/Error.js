import React, {Component} from 'react';
import errorIcon from '../../images/icons/error.png';
import PropTypes from 'prop-types';

class Error extends Component {

    render() {
        let props = this.props;
        return (
            <div className="error">
                <img alt='icon error' className="iconError" src={errorIcon}/>
                <p className="errorText"> 
                    { props.error } 
                </p> 
            </div>
        )
    }
}

Error.propTypes = {
    error: PropTypes.string.isRequired
}

export default Error;
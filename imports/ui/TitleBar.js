/**
 * Created by Akshat on 23-06-2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component{
    render(){
        return (
            <div className="title-bar">
               <div className="wrapper">
                   <h1>{this.props.title}</h1>
                   <h2 className="title-bar__element">{this.props.subTitle}</h2>
               </div>
            </div>
        )
    }
}

TitleBar.propTypes = {
    title : PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
};

TitleBar.defaultProps = {
    title: 'Default title'
};
import React from 'react';

export default class BoxSlide extends React.Component {
  render() {
    const currentSlideContent = this.props.content;
    const currentSlideStyles = {
      color: currentSlideContent.textColor,
      backgroundColor: currentSlideContent.backColor,
      display: (this.props.direction === 0 || this.props.direction === 2) ? "grid" : "inline-block",
      float: (this.props.direction === 0 || this.props.direction === 2) ? "left" : "inherit"
    }

    return (
      <div className="box-slide" style={currentSlideStyles}>
        <p>{currentSlideContent.text}</p>
      </div>
    );
  }
}
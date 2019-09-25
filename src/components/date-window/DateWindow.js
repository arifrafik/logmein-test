import React from "react";
import "./date-window.css";

class DateWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-bar-item date-window-container">
        From {this.props.startDate} To {this.props.defaultDate}
      </div>
    );
  }
}

export default DateWindow;

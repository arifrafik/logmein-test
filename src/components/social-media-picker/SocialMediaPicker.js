import React from "react";
import "./social-media-picker.css";
import "./../common-styles.css";
class SocialMediaPicker extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="search-bar-item social-media-container">
        <select
          className="select-css"
          onChange={this.props.onSocialMediaTypeChange}
        >
          {this.props.options.map(function(object, i) {
            return (
              <option value={object.value} key={i}>
                {object.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default SocialMediaPicker;

import React from "react";
import "./stock-market-symbols-picker.css";
import "./../common-styles.css";

class StockMarketSymbolsPicker extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="search-bar-item stock-market-container">
        <select
          className="select-css"
          onChange={this.props.onStockMarketSymbolChange}
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

export default StockMarketSymbolsPicker;

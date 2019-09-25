import React from "react";
import "./recommendation-table.css";
import { randomDataGenerator } from "./../../services/services";
class RecommendationTable extends React.Component {
  constructor(props) {
    super();
  }

  renderRecommendation = recommendation => {
    switch (recommendation) {
      case "BUY":
        return <i class="fa fa-angle-double-up"></i>;
      case "SELL":
        return <i class="fa fa-angellist"></i>;
      default:
        return <i class="fa fa-angle-double-down"></i>;
    }
  };
  getTableContent = arr => {
    const iterateItem = item => {
      return item.map((nextItem, j) => {
        return (
          <tr key={nextItem.date + j}>
            <td>{nextItem.date}</td>
            <td>{nextItem.stockSymbol}</td>
            <td>{nextItem.stockMarketPrice}$</td>
            <td>{nextItem.socialMediaType}</td>
            <td>{nextItem.mediaCount}</td>
            <td>
              {nextItem.recommendation}
              <span>{this.renderRecommendation(nextItem.recommendation)}</span>
            </td>
          </tr>
        );
      });
    };
    // return arr.map(function(item, i) {

    return (
      <table id="recommendation-table">
        <th>Date</th>
        <th>Stock Market Symbol</th>
        <th>Stock Market Price</th>
        <th>Social Media type</th>
        <th>Social Media Count</th>
        <th>Recommendation</th>
        <tbody>{iterateItem(arr)}</tbody>
      </table>
    );
    // });
  };

  render() {
    return (
      <div className="recommendation-table-container">
        {this.getTableContent(this.props.data)}
      </div>
    );
  }
}

export default RecommendationTable;

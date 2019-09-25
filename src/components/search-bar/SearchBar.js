import React from "react";
import "./SearchBar.css";

import SocialMediaPicker from "./../social-media-picker/SocialMediaPicker";
import StockMarketSymbolsPicker from "./../stock-market-picker/StockMarketSymbolsPicker";
import DateWindow from "./../date-window/DateWindow";
import { STOCK_MARKET_SYMBOLS, SOCIAL_MEDIA_TYPES } from "./../config";

class SearchBar extends React.Component {
  constructor(props) {
    super();
    let today = new Date();
    let day = today.getDate();
    let tenDaysBack = today.getDate() - 10;

    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    this.date = `${day}-${month}-${year}`;
    this.tenDaysAgo = `${tenDaysBack}-${month}-${year}`;

    this.stockMarketSymbol = STOCK_MARKET_SYMBOLS[0].value;
    this.socialMedia = SOCIAL_MEDIA_TYPES[0].value;

    this.onStockMarketSymbolChange = this.onStockMarketSymbolChange.bind(this);
    this.onSocialMediaTypeChange = this.onSocialMediaTypeChange.bind(this);
  }

  onStockMarketSymbolChange(evt) {
    let selectedSymbol = evt.target.value;
    this.stockMarketSymbol = selectedSymbol;
    this.props.updateTableData(this.stockMarketSymbol, this.socialMedia);
  }

  onSocialMediaTypeChange(evt) {
    let selectedSocialMediaType = evt.target.value;
    this.socialMedia = selectedSocialMediaType;
    this.props.updateTableData(this.stockMarketSymbol, this.socialMedia);
  }

  render() {
    return (
      <div className="search-bar-container">
        <StockMarketSymbolsPicker
          onStockMarketSymbolChange={this.onStockMarketSymbolChange}
          options={STOCK_MARKET_SYMBOLS}
        />
        <SocialMediaPicker
          onSocialMediaTypeChange={this.onSocialMediaTypeChange}
          options={SOCIAL_MEDIA_TYPES}
        />
        <DateWindow startDate={this.tenDaysAgo} defaultDate={this.date} />
        <div className="search-bar-item-center" />
      </div>
    );
  }
}

export default SearchBar;

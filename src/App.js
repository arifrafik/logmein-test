import React from "react";
import { Header } from "./components/header/header";
import SearchBar from "./components/search-bar/SearchBar";
import RecommendationTable from "./components/recommendation-table/RecommendationTable";
import "./App.css";
import { randomDataGenerator } from "./services/services";
import ExampleChart from "./components/chart/chart";
// get our fontawesome imports
class App extends React.Component {
  constructor() {
    super();
    // this.onStockMarketSymbolChange = this.onStockMarketSymbolChange.bind(this);
    // this.onSocialMediaTypeChange = this.onSocialMediaTypeChange.bind(this);
    this.updateTableData = this.updateTableData.bind(this);
    this.state = {
      tableData: [],
      loading: true
    };
  }

  componentDidMount() {
    this.setState(prevState => {
      return { tableData: randomDataGenerator(), loading: false };
    });
  }

  updateTableData(stockMarketSymbol, socialMediaType) {
    this.setState(prevState => {
      return {
        loading: true
      };
    });
    setTimeout(() => {
      this.setState(prevState => {
        return {
          tableData: randomDataGenerator(stockMarketSymbol, socialMediaType),
          loading: false
        };
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Header appName="Stock Market Recommender"></Header>
        <SearchBar updateTableData={this.updateTableData} />
        {this.state.loading ? (
          <div>
            <i className="fa fa-spinner fa-spin  fa-7x"></i>
          </div>
        ) : (
          <>
            <RecommendationTable data={this.state.tableData} />
            <ExampleChart data={this.state.tableData} />
          </>
        )}
      </div>
    );
  }
}

export default App;

import React from "react";
import { withRouter } from "react-router";
import SearchIndexItem from "../Search/search_index_item";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: this.props.location.search.split("=")[1],
    };
  }

  componentDidMount() {
    this.props.fetchSearchProducts(this.state.search);
  }

  render() {
    const { products } = this.props;

    let filteredProduct = products.map((product) => {
      return <SearchIndexItem key={product.id} product={product} />;
    });

    let matches;
    if (products.length === 0) {
      matches = <p className="search-results no-search">No Matches Found</p>;
    } else {
      matches = (
        <p className="search-results">{products.length} search result(s)</p>
      );
    }

    return (
      <div className="search-container">
        {matches}
        <div className="all-searched-products">{filteredProduct}</div>
      </div>
    );
  }
}

export default withRouter(Search);

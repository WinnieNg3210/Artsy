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

  // componentDidMount() {
  //   this.props.fetchSearchProducts(this.props.products);
  // }

  render() {
    const { products } = this.props;
    // const { search } = this.state;

    let filteredProduct = products.map((product) => {
      return <SearchIndexItem key={product.id} product={product} />;
    });

    return (
      <div className="search-container">
        <p className="search-results">{products.length} search result(s)</p>
        <div className="all-searched-products">{filteredProduct}</div>
      </div>
    );
  }
}

export default withRouter(Search);

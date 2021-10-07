import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.formDiv = React.createRef();
    this.state = {
      search: "",
      display: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.searchDisplay = this.searchDisplay.bind(this);
  }

  componentDidMount() {
    window.addEventListener("mousedown", this.handleOutsideClick);
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", this.handleOutsideClick);
  }

  handleOutsideClick(e) {
    if (this.formDiv.current && !this.formDiv.current.contains(e.target)) {
      this.setState({ display: false });
    }
  }

  searchDisplay() {
    if (!this.state.display) {
      this.setState({ display: true });
    }
  }

  handleSelect(e) {
    e.preventDefault();
    this.setState({ search: e.currentTarget.innerText, display: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .fetchSearchProducts(this.state.search)
      .then(() =>
        this.props.history.push(`/products?search=${this.state.search}`)
      );
  }

  updateSearch(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  suggestions() {
    const suggestions = [];
    const { search } = this.state;
    const { products } = this.props;

    if (search.length === 0) {
      return products.slice(0, 5);
    }

    products.forEach((product) => {
      if (product.title.toLowerCase().includes(search.toLowerCase())) {
        suggestions.push(product);
      }
    });

    return suggestions;
  }

  render() {
    const { search, display } = this.state;

    const searchResults = this.suggestions().map((result, i) => {
      return (
        <li key={i}>
          <Link
            to={`/products/${result.id}`}
            className="search-product-link"
            // onClick={this.handleSelect}
          >
            {result.title}
          </Link>
        </li>
      );
    });

    let showResult;
    if (display) {
      showResult = <ul className="search-dropdown">{searchResults}</ul>;
    }

    return (
      <div className="header-search-container">
        <div className="header-search-top">
          <form
            onSubmit={this.handleSubmit}
            className="header-search-bar"
            ref={this.formDiv}
          >
            <input
              className="header-search-input"
              type="text"
              placeholder="search anything"
              onChange={this.updateSearch("search")}
              value={search}
              onFocus={this.searchDisplay}
            />
          </form>
          <button type="submit" className="search-button">
            <SearchIcon className="header-search-icon" />
          </button>
        </div>
        {/* {showResult} */}
      </div>
    );
  }
}

export default withRouter(SearchBar);

import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { withRouter } from "react-router";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
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

  render() {
    const { search } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="header-search-bar">
        <input
          className="header-search-input"
          type="text"
          placeholder="search coming soon"
          onChange={this.updateSearch("search")}
          value={search}
        />
        <button type="submit" className="search-button">
          <SearchIcon className="header-search-icon" />
        </button>
      </form>
    );
  }
}

export default withRouter(SearchBar);

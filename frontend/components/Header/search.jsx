import React from "react";
import SearchIcon from "@material-ui/icons/Search";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //   this.props.fetchSearchProducts(this.state.)
  }

  updateSearch(e) {
    this.setState({ search: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="header-search-bar">
            <input
              className="header-search-input"
              type="text"
              placeholder="search coming soon"
              onChange={this.updateSearch}
              value={this.state.search}
            />
            {/* <input type="submit"> */}
            {/* <Link to="/search"></Link> */}
            <SearchIcon className="header-search-icon" />
            {/* </input> */}
          </div>
        </form>
      </div>
    );
  }
}

export default Search;

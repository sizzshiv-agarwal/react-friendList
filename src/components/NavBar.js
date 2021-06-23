// import { handleSearchMovies } from "../actions";
import React from "react";
import { connect } from "react-redux";
import { filterFriends } from "../actions/friendListActions";
class NavBar extends React.Component {
  handleSearchOnChange = (e) => {
    console.log("Value changed", this);
    this.setState({
      searchText: e.target.value,
    });
    this.props.dispatch(filterFriends());
  };

  render() {
    return (
      <div className="nav">
        <div className="search-container">
          <h1 className="text-heading-style">Friends List</h1>
          <input onChange={this.handleSearchOnChange}></input>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchText: state.searchText,
  };
}
export default connect(mapStateToProps)(NavBar);

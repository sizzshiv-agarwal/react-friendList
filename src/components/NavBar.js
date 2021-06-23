// import { handleSearchMovies } from "../actions";
import React from 'react';
import { connect } from 'react-redux';
import { setSearchTextValue } from '../actions/friendListActions';
class NavBar extends React.Component {
  handleSearchOnChange = e => {
    console.log('Value changed', this);
    this.props.dispatch({
      type: 'HANDLE_SEARCH_TEXT_VALUE',
      data: e.target.value
    });
  };

  handleEnterKey = e => {
    if (e.key === 'Enter' && this.props.searchText) {
      this.props.dispatch({
        type: 'ADD_FRIEND'
      });
    }
  };

  render() {
    return (
      <div className="nav">
        <div className="search-container">
          <h1 className="text-heading-style">Friends List</h1>
          <input
            onKeyDown={this.handleEnterKey}
            onChange={this.handleSearchOnChange}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchText: state.searchText,
    friendList: state.friendList
  };
}
export default connect(mapStateToProps)(NavBar);

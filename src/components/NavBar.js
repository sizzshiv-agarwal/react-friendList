// import { handleSearchMovies } from "../actions";
import React from 'react';
import { connect } from 'react-redux';
import { setSearchTextValue } from '../actions/friendListActions';
class NavBar extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'HANDLE_DUMMY_FRIEND_LIST'
    });
  }

  componentDidUpdate() {
    console.log('NAVBAR COMPONENT UPDTED');
  }
  handleSearchOnChange = e => {
    console.log('Value changed', this);
    if (e.target.value) {
      this.props.dispatch({
        type: 'HANDLE_SEARCH_TEXT_VALUE',
        data: e.target.value
      });
    } else {
      this.props.dispatch({
        type: 'RESET_FRIENDS_LIST'
      });
    }
    this.forceUpdate();
  };
  sortListBasedOnFavourites = () => {
    this.props.dispatch({
      type: 'SORT_FAVOURITES'
    });
  };

  handleEnterKey = e => {
    if (e.key === 'Enter' && this.props.searchText) {
      this.props.dispatch({
        type: 'ADD_FRIEND'
      });
    } else if (e.key === 'Enter' && !this.props.searchText) {
      this.props.dispatch({
        type: 'RESET_FRIENDS_LIST'
      });
    }
    this.forceUpdate();
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
          <span>
            <img
              src="https://img-premium.flaticon.com/png/512/307/premium/307517.png?token=exp=1624565821~hmac=526a73656181f259f39772800c0bda90"
              onClick={this.sortListBasedOnFavourites}
              alt="favourite-sort"
              className="image-dime top-style"
            />
          </span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friendListStore: state
  };
}
export default connect(mapStateToProps)(NavBar);

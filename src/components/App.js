import NavBar from './NavBar';
import FriendListCard from './FriendListCard';
import React from 'react';
import { connect } from 'react-redux';
// import { filterFriends } from "../actions/friendListActions";

class App extends React.Component {
  componentDidUpdate() {
    console.log('APP COMPONENT UPDTED');
  }

  componentDidMount() {}

  filterFriendsList = () => {
    if (!this.props.friendListStore.showSearchResult) {
      return this.props.friendListStore.friendList;
    }
    this.props.friendListStore.friendList.filter(friend => {
      if (
        friend.name.toLowerCase().includes.this.props.friendListStore.searchText
      ) {
        return friend;
      }
    });
  };
  render() {
    const listofObj = this.props.friendListStore.friendList;
    const length = listofObj.length;
    console.log('INSIDE APP RENDER');
    return (
      <div className="main">
        <NavBar />

        <div className="list">
          {length &&
            listofObj.map((friend, keys) => (
              <FriendListCard friend={friend} key={`movie -${keys}`} />
            ))}
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
export default connect(mapStateToProps)(App);

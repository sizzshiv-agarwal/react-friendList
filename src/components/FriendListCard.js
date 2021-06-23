import React from 'react';
import { connect } from 'react-redux';

class FriendListCard extends React.Component {
  addToFavourites = () => {
    this.props.dispatch({
      type: 'ADD_TO_FAVOURITES',
      friend: this.props.friend
    });
  };

  addToUnFavourites = () => {
    this.props.dispatch({
      type: 'ADD_TO_UNFAVOURITES',
      friend: this.props.friend
    });
  };

  deleteFriend = () => {
    this.props.dispatch({
      type: 'DELETE_FRIEND',
      friend: this.props.friend
    });
  };

  render() {
    const { friend } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <div className="title">{friend.name}</div>
          <div className="sub-title">
            {friend.isFriend ? (
              <p>is your friend</p>
            ) : (
              <p>is not your friend</p>
            )}
          </div>
          <div className="footer" />
        </div>
        <div className="right">
          <div className="buttons-row">
            {friend.isFavourite ? (
              <img
                src="https://image.flaticon.com/icons/png/512/786/786331.png"
                alt="star-icon"
                className="image-dime"
                onClick={this.addToUnFavourites}
              />
            ) : (
              <img
                src="https://image.flaticon.com/icons/png/512/786/786230.png"
                className="image-dime"
                alt="star-icon"
                onClick={this.addToFavourites}
              />
            )}
          </div>
        </div>
        <div className="end">
          <div className="buttons-row">
            <img
              src="https://image.flaticon.com/icons/png/512/3096/3096687.png"
              alt="TRASH-icon"
              className="image-dime"
              onClick={this.deleteFriend}
            />
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    friendList: state.friendList,
    dummyFriendList: state.dummyFriendList
  };
}
export default connect(mapStateToProps)(FriendListCard);

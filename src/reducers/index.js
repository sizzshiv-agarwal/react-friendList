import {
  FILTER_FRIENDS,
  ADD_TO_FAVOURITES,
  ADD_TO_UNFAVOURITES,
  DELETE_FRIEND,
  ADD_FRIEND,
  HANDLE_SEARCH_TEXT_VALUE
} from '../actions/actionTypes';
const friendListStore = {
  friendList: [
    {
      name: 'Rahul Gupta',
      isFavourite: false,
      isFriend: true,
      id: 1
    },
    {
      name: 'Shivangi Sharma',
      isFavourite: true,
      isFriend: true,
      id: 2
    },
    {
      name: 'Akash Singh',
      isFavourite: false,
      isFriend: true,
      id: 3
    }
  ],
  showSearchResult: false,
  searchText: ''
};

export default function friendListReducer(state = friendListStore, action) {
  switch (action.type) {
    case FILTER_FRIENDS: {
      return {
        showSearchResult: state.friendList.filter(friend => {
          if (friend.name.toLowerCase().includes(state.searchText)) return true;
        })
      };
    }
    case ADD_TO_UNFAVOURITES: {
      return {
        ...state,
        friendList: state.friendList.map(friend =>
          action.friend.id === friend.id
            ? { ...friend, isFavourite: false }
            : friend
        )
      };
    }
    case ADD_TO_FAVOURITES: {
      return {
        ...state,
        friendList: state.friendList.map(friend =>
          action.friend.id === friend.id
            ? { ...friend, isFavourite: true }
            : friend
        )
      };
    }
    case DELETE_FRIEND: {
      return {
        ...state,
        friendList: state.friendList.filter(
          friend => friend.id !== action.friend.id
        )
      };
    }
    case ADD_FRIEND: {
      return {
        ...state,
        friendList: [
          ...state.friendList,
          {
            name: state.searchText,
            isFavourite: false,
            isFriend: true,
            id: state.friendList.length + 1
          }
        ]
      };
    }
    case HANDLE_SEARCH_TEXT_VALUE: {
      return {
        ...state,
        searchText: action.data
      };
    }
    default:
      return state;
  }
}

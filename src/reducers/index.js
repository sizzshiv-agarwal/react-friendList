import { FILTER_FRIENDS } from "../actions/actionTypes";
const friendListStore = {
  friendList: [
    {
      name: "Rahul Gupta",
      isFavourite: false,
      isFriend: true,
    },
    {
      name: "Shivangi Sharma",
      isFavourite: false,
      isFriend: true,
    },
    {
      name: "Akash Singh",
      isFavourite: false,
      isFriend: true,
    },
    {
      name: "Rahul Gupta",
      isFavourite: false,
      isFriend: true,
    },
    {
      name: "Shivangi Sharma",
      isFavourite: false,
      isFriend: true,
    },
    {
      name: "Akash Singh",
      isFavourite: false,
      isFriend: true,
    },
    {
      name: "Rahul Gupta",
      isFavourite: false,
      isFriend: true,
    },
    {
      name: "Shivangi Sharma",
      isFavourite: false,
      isFriend: true,
    },
    {
      name: "Akash Singh",
      isFavourite: false,
      isFriend: true,
    },
    {
      name: "Rahul Gupta",
      isFavourite: false,
      isFriend: true,
    },
    {
      name: "Shivangi Sharma",
      isFavourite: false,
      isFriend: true,
    },
    {
      name: "Akash Singh",
      isFavourite: false,
      isFriend: true,
    },
    {
      name: "Rahul Gupta",
      isFavourite: false,
      isFriend: true,
    },
    {
      name: "Shivangi Sharma",
      isFavourite: false,
      isFriend: true,
    },
    {
      name: "Akash Singh",
      isFavourite: false,
      isFriend: true,
    },
    {
      name: "Rahul Gupta",
      isFavourite: false,
      isFriend: true,
    },
    {
      name: "Shivangi Sharma",
      isFavourite: false,
      isFriend: true,
    },
    {
      name: "Akash Singh",
      isFavourite: false,
      isFriend: true,
    },
  ],
  showSearchResult: false,
  searchText: "",
};

export default function friendListReducer(state = friendListStore, action) {
  switch (action.type) {
    case FILTER_FRIENDS: {
      return {
        showSearchResult: state.friendList.filter((friend) => {
          if (friend.name.toLowerCase().includes(state.searchText)) return true;
        }),
      };
    }
    default:
      return state;
  }
}

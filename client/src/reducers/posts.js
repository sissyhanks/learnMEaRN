//reducers are functions that take in the state and an action ... the state must always be set to somethig (here an empty array becasue the thing that is returned is an array of posts) and the term state is changed to posts in function take in and switch statements
// const reducer = 
// take out name of function and replace with export default 
import { FETCH_ALL, CREATE, DELETE, UPDATE } from '../constants/actionTypes'

const posts = (posts = [], action) => {
  //  based on the action type the functions will return either an action or state change based on the action
  // if(action.type === 'CREATE') {
  //   return ...
  // }
  //because there are usually lots of if statements, switch statements are used 
  switch (action.type) {
    //because all postys are being fetched from api in posts.js action creator and sent them through the action.payload >> action.payload can be passed to display them in this logic
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case UPDATE:
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default posts;
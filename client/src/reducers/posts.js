//reducers are functions that take in the state and an action ... the state must always be set to somethig (here an empty array becasue the thing that is returned is an array of posts) and the term state is changed to posts in function take in and switch statements
// const reducer = 
// take out name of function and replace with export default 
export default (posts = [], action) => {
  //  based on the action type the functions will return either an action or state change based on the action
  // if(action.type === 'CREATE') {
  //   return ...
  // }
  //because there are usually lots of if statements, switch statements are used 
  switch (action.type) {
    case 'FETCH_ALL':
      return posts;
    case 'CREATE':
      return posts;
    default:
      return posts;
  }
}


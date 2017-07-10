const initialState = {
  loggedInUser: ''
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case 'LOGIN':
      
      return Object.assign(
        {},
        state,
        {
          loggedInUser: action.payload
        }
      )

    default:
      return state;
  }
}

export function logInUser(user) {
  return {
    type: 'LOGIN',
    payload: user
  }
}
const store = Redux.createStore(
    (state = {login: false}) => state
);
  
const loginAction = () => {
    return {
      type: 'LOGIN'
    }
};


// initiate store mutation with dispatch
store.dispatch(loginAction());
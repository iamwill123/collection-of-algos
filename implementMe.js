let listeners = [];

function reducer(action, oldState) {

  switch (action.type) {

    case "CHANGE_NAME":

      return {

        role: oldState.role,

        name: action.payload.name,

        hobbies: oldState.hobbies

      }

    case "CHANGE_HOBBIES":

      return {

        role: oldState.role,

        name: oldState.name,

        hobbies: [...oldState.hobbies, ...action.payload.hobbies]

      };

    default:

      return oldState;

  }

}



function createStore(initialState) {

  let state = initialState;


  return {

    getState: function () {

      return state;

    },

    dispatch: function (action) {

      /* Get the modified state object via reducer */

      state = reducer(action, state);

      /* Notify each listener about the state change */

      listeners.forEach((listener) => {

        listener({ action });

      })

    },

    subscribe: function (newListener) {

      if (listeners.length == 0) {

        listeners.push(newListener);

      }

      listeners.forEach((listener) => {

        if (newListener !== listener) {

          listeners.push(newListener);

        }

      })

    },

    unsubscribe: function (oldListener) {

      listeners = listeners.filter((listener) => {

        return oldListener !== listener;

      })

    },

    thunk: function (callback, request, delay) {

      if (delay) {

        setTimeout(() => {

          request(callback);

        }, delay)

      }

      else {

        request(callback);

      }



    }

  }



}


var initialState = {

  name: "Tony Williams",

  role: "Product Manager",

  hobbies: ["swimming", "dancing", "laughing"]

};

let myStore = createStore(initialState);

function reactOnEvent({ action }) {
  console.log("Reacted ... . :) ", action);
}

myStore.subscribe(reactOnEvent);

console.log(myStore.getState()); //?

myStore.dispatch({
  type: "CHANGE_NAME",
  payload: { name: "Ryan" }
});

let prevState = myStore.getState()
myStore.dispatch({
  type: "CHANGE_HOBBIES",
  payload: { hobbies: ["bowling"] }
})



console.log(myStore.getState()); //?
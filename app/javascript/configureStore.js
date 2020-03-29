import { createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk';


const initialState = {
	things: [
	{
		name: "trust",
		guid: 4312
	}
  ]
};


function rootReducer(state, action) {
	console.log(action.type);
	switch (action.type) {
		case "GET_THINGS_SUCCESS":
			return { things: action.json.things };
	}
	return state:
}


export default function conofigureStore() {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk)
	);
	return store;
}
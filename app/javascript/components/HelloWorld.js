import React from "react"

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';
const GET_THINGS_SUCCESS = 'GET_THINGS_SUCCESS';

function getThings() {
	console.log('getThings() Action!!')
	return dispatch => {
		dispatch({ type: GET_THINGS_REQUEST });
		return fetch(`v1/things.json`)
			.then(response => response.json())
			.then(json => dispatch(getThingsSuccess(json)))
			.catch(error => console.log(error));
	};
};


export function getThingsSuccess(json) {
	return {
		type: GET_THINGS_SUCCESS,
		json
	};
};

import {
	ON_CHANGE_SEARCH_INPUT,
	CURRENT_USER_SUCCESS,
	REQUEST_BOX_SIZE_PENDING,
	REQUEST_BOX_SIZE_SUCCESS,
	CURRENT_USER_FAILED,
	REQUEST_BOX_SIZE_FAILED,
	LOAD_CURRENT_USER,
	CURRENT_ROUTE,
	REQUEST_SIGNIN_PENDING,
	REQUEST_SIGNIN_SUCCESS,
	REQUEST_SIGNIN_FAILD,
	ASSIGN_EMAIL,
	ASSIGN_PASSWORD,
	REMOVE_VALIDATOR_FROM_STATE,
	REGISTER_EMAIL,
	REGISTER_PASSOWRD,
	REGISTER_NAME,
	REQUEST_REGISTER_PENDING,
	REQUEST_REGISTER_SUCCESS,
	REQUEST_REGISTER_FAILED,
} from "./constents.js";

const initialStateRegister = {
	registerEmail: "",
	registerPassword: "",
	registerName: "",
	registerRequestIsPending: false,
	registerRequestIsSuccess: "",
	registerRequestIsFailed: "",
};

export const registerReducer = (state = initialStateRegister, action = {}) => {
	switch (action.type) {
		case REGISTER_EMAIL:
			return Object.assign({}, state, { registerEmail: action.payload });
		case REGISTER_PASSOWRD:
			return Object.assign({}, state, { registerPassword: action.payload });
		case REGISTER_NAME:
			return Object.assign({}, state, { registerName: action.payload });
		case REQUEST_REGISTER_PENDING:
			return Object.assign({}, state, { registerRequestIsPending: true });
		case REQUEST_REGISTER_SUCCESS:
			return Object.assign({}, state, { registerRequestIsSuccess: action.payload });
		case REQUEST_REGISTER_FAILED:
			return Object.assign({}, state, { registerRequestIsFailed: action.payload });
		default:
			return state;
	}
};

const intialStateSearch = {
	searchInput: "",
};

export const searchInputReducer = (state = intialStateSearch, action = {}) => {
	switch (action.type) {
		case ON_CHANGE_SEARCH_INPUT:
			return Object.assign({}, state, { searchInput: action.payload });
		default:
			return state;
	}
};

const initialState = {
	isPending: false,
	currentUser: {
		id: "",
		name: "",
		email: "",
		password: "",
		entries: 0,
		joined: null,
	},
	userError: "",
	box: {},
	requsetError: "",
	route: "signin",
};

export const requsetBoxSizeReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case REQUEST_BOX_SIZE_PENDING:
			return Object.assign({}, state, { isPending: true });
		case CURRENT_USER_SUCCESS:
			return Object.assign({}, state, { currentUser: action.payload });
		case CURRENT_USER_FAILED:
			return Object.assign({}, state, { userError: action.payload });
		case REQUEST_BOX_SIZE_SUCCESS:
			return Object.assign({}, state, { box: action.payload });
		case REQUEST_BOX_SIZE_FAILED:
			return Object.assign({}, state, { requsetError: action.payload });
		case LOAD_CURRENT_USER:
			return Object.assign({}, state, { currentUser: action.payload });
		case CURRENT_ROUTE:
			return Object.assign({}, state, { route: action.payload });
		default:
			return state;
	}
};

const initialStateSignin = {
	email: "",
	password: "",
	isPending: false,
	success: "",
	error: "",
};

export const requsetSigninReducer = (state = initialStateSignin, action = {}) => {
	switch (action.type) {
		case REQUEST_SIGNIN_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUEST_SIGNIN_SUCCESS:
			return Object.assign({}, state, { success: action.payload, isPending: false });
		case REQUEST_SIGNIN_FAILD:
			return Object.assign({}, state, { error: action.payload, isPending: false });
		case ASSIGN_EMAIL:
			return Object.assign({}, state, { email: action.payload });
		case ASSIGN_PASSWORD:
			return Object.assign({}, state, { password: action.payload });
		case REMOVE_VALIDATOR_FROM_STATE:
			return Object.assign({}, state, { password: action.payload, email: action.payload });
		default:
			return state;
	}
};

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

export const addEmail = (email) => {
	return {
		type: REGISTER_EMAIL,
		payload: email,
	};
};

export const addPassword = (password) => {
	return {
		type: REGISTER_PASSOWRD,
		payload: password,
	};
};

export const addName = (name) => {
	return {
		type: REGISTER_NAME,
		payload: name,
	};
};

export const requestRegister = (email, passowrd, name, onRouteChangeFunc) => (dispatch) => {
	dispatch({ type: REQUEST_REGISTER_PENDING });
	fetch("https://dry-mountain-86581.herokuapp.com/register", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: email,
			password: passowrd,
			name: name,
		}),
	})
		.then((response) => response.json())
		.then((user) => {
			if (user.id) {
				onRouteChangeFunc("signin");
				dispatch({ type: REQUEST_REGISTER_SUCCESS, payload: "Success" });
			}
		})
		.catch((error) => dispatch({ type: REQUEST_REGISTER_FAILED, payload: error }));
};

export const setSearchInput = (text) => {
	console.log(text);
	return {
		type: ON_CHANGE_SEARCH_INPUT,
		payload: text,
	};
};

export const fetchBoxRequest = (input, id, calculateFunc) => (dispatch) => {
	let data;
	dispatch({ type: REQUEST_BOX_SIZE_PENDING });
	fetch("https://dry-mountain-86581.herokuapp.com/imageUrl", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			input: input,
		}),
	})
		.then((response) => response.json())
		.then((response) => {
			data = response;
			fetch("https://dry-mountain-86581.herokuapp.com/image", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					id: id,
				}),
			})
				.then((response) => response.json())
				.then((response) => dispatch({ type: CURRENT_USER_SUCCESS, payload: response }))
				.catch((error) => dispatch({ type: CURRENT_USER_FAILED, payload: error }));
		})
		.then(() =>
			dispatch({
				type: REQUEST_BOX_SIZE_SUCCESS,
				payload: calculateFunc(data),
			})
		)
		.catch((error) => dispatch({ type: REQUEST_BOX_SIZE_FAILED, payload: error }));
};

export const loadUser = (user) => {
	return {
		type: LOAD_CURRENT_USER,
		payload: user,
	};
};

export const onRouteChange = (route) => {
	return {
		type: CURRENT_ROUTE,
		payload: route,
	};
};

export const requestSignin = (
	email,
	password,
	onRouteChangeFunc,
	loadCurrentUserFunc,
	removeValidatorsFunc
) => (dispatch) => {
	dispatch({ type: REQUEST_SIGNIN_PENDING });
	fetch("https://dry-mountain-86581.herokuapp.com/signin", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: email,
			password: password,
		}),
	})
		.then((response) => response.json())
		.then((currentUser) => {
			if (currentUser.id) {
				onRouteChangeFunc("home");
				loadCurrentUserFunc(currentUser);
				dispatch({ type: REQUEST_SIGNIN_SUCCESS, payload: "Success" });
				removeValidatorsFunc();
			} else {
				removeValidatorsFunc();
				dispatch({ type: REQUEST_SIGNIN_FAILD, payload: "Error" });
			}
		});
};

export const assignEmail = (email) => {
	return {
		type: ASSIGN_EMAIL,
		payload: email,
	};
};

export const assignPassword = (password) => {
	return {
		type: ASSIGN_PASSWORD,
		payload: password,
	};
};

export const removeValidatorsFromState = () => {
	return {
		type: REMOVE_VALIDATOR_FROM_STATE,
		payload: "",
	};
};

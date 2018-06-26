import axios from 'axios';

export const FETCH_NN = 'FETCH_NN';

export function fetchNearestNeighbours(object) {
	const config = { 
		headers: {  
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		}
	}	
	const url = "http://127.0.0.1:8000/predict";
	const request = axios.post(url, object, config);

	return (dispatch) => {
		request.then((response) => {
			dispatch({
				type: FETCH_NN,
				payload: response				
			});		
		})
	}
}
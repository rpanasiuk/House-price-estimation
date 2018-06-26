import axios from 'axios';

export const FETCH_DISTRICT = 'FETCH_DISTRICT';

export function fetchDistrict(object) {
	const config = { 
		headers: {  
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		}
	}	
	const url = "http://127.0.0.1:8000/district";
	const request = axios.post(url, object, config);

	return (dispatch) => {
		request.then((response) => {
			dispatch({
				type: FETCH_DISTRICT,
				payload: response				
			});		
		}).catch((err) => {
			console.log(err)
		})
	}
}
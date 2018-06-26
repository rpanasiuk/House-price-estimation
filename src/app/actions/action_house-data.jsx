export const HOUSE_DATA = 'HOUSE_DATA';

export function setHouseData(object) {
	return (dispatch) => {
		dispatch({
			type: HOUSE_DATA,
			payload: object				
		});	
	}	
}
import { FETCH_DISTRICT } from '../actions/action_district.jsx';

export default function(state=[], action) {
	switch (action.type) {
		case FETCH_DISTRICT:
			return action.payload.data;
	}
	return state;
}
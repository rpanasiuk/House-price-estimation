import { HOUSE_DATA } from '../actions/action_house-data.jsx';

export default function(state=[], action) {
	switch (action.type) {
		case HOUSE_DATA:
			return action.payload;
	}
	return state;
}
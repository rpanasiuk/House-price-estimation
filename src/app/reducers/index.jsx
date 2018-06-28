import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import FETCH_NN from './reducer_nn.jsx';
import HOUSE_DATA from './reducer_house-data.jsx';
import FETCH_DISTRICT from './reducer_district.jsx';

const rootReducer = combineReducers({
	markers: FETCH_NN,
	houseData: HOUSE_DATA,
	districtData: FETCH_DISTRICT,
	form: formReducer
});

export default rootReducer;
import { combineReducers } from 'redux';
import FETCH_NN from './reducer_nn.jsx';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	markers: FETCH_NN,
	form: formReducer	
});

export default rootReducer;

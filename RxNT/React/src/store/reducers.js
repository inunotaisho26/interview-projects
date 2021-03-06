import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import { reducer as notifReducer } from 'redux-notifications';

import authReducer from './auth.reducer';
import applicationReducer from '../containers/reducer';
import searchMasterReducer from '../components/search-master/reducer';
import addMasterReducer from '../components/add-master/reducer';
import timerReducer from '../uicomponents/forms/timer/reducer';

const rootReducer = combineReducers({
    form: formReducer,
    notifs: notifReducer,
    routing: routerReducer,
    auth: authReducer,
    searchMasterReducer,
    applicationReducer,
    timerReducer,
    addMasterReducer
});

export default rootReducer;

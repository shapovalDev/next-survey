import { combineReducers, createStore } from 'redux';
import surveyReducer from '@/store/survey/reducers/surveyReducer';

const rootReducer = combineReducers({
  survey: surveyReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

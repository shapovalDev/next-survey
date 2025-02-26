import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '@/stateManagement/answers/reducer';

const rootReducer = combineReducers({
  answers: reducer,
});

const enhancer =
  process.env.NODE_ENV !== 'PROD'
    ? composeWithDevTools(applyMiddleware())
    : compose(applyMiddleware());
export const store = createStore(rootReducer, enhancer);

export type RootState = ReturnType<typeof store.getState>;

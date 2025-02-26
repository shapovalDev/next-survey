import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import answersReducer from '@/stateManagement/answers/reducer';

const rootReducer = combineReducers({
  answers: answersReducer,
});

const enhancer =
  process.env.NEXT_PUBLIC_NODE_ENV !== 'PROD'
    ? composeWithDevTools(applyMiddleware())
    : compose(applyMiddleware());

// @ts-ignore
export const store = createStore(rootReducer, enhancer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

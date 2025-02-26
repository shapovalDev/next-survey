import { Reducer } from 'redux';
import { AnswerReducerActionType } from '@/stateManagement/answers/types';

interface AnswerState {
  data: any[];
}

const initialState: AnswerState = {
  data: [],
};

const answerReducer: Reducer<AnswerState> = (state = initialState, action) => {
  switch (action.type) {
    case AnswerReducerActionType.AddAnswer:
      return { ...state, data: [...state.data, action.payload] };

    default:
      return state;
  }
};

export default answerReducer;

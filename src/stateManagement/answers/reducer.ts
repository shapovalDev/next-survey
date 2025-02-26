import {
  AnswerAction,
  AnswerReducerActionType,
  AnswerState,
  StepAnswer,
} from '@/stateManagement/answers/types';

const initialState: AnswerState = {
  survey: null,
  data: [],
};

const reducer = (state: AnswerState = initialState, action: AnswerAction) => {
  switch (action.type) {
    case AnswerReducerActionType.SetCurrentSurvey: {
      return state.survey ? state : { ...state, survey: action.payload };
    }

    case AnswerReducerActionType.AddStepAnswer: {
      const isAnswerAlreadyProvided = state?.data?.some(
        ({ stepId }: StepAnswer) => stepId === action.payload.stepId,
      );

      const overwrittenData = state?.data?.map((answer: StepAnswer) =>
        answer.stepId === action.payload.stepId ? action.payload : answer,
      );

      const newData = isAnswerAlreadyProvided
        ? overwrittenData
        : [...state.data, action.payload];

      return {
        ...state,
        data: newData,
      };
    }

    case AnswerReducerActionType.ResetStore: {
      return { ...initialState };
    }

    default:
      return state;
  }
};

export default reducer;

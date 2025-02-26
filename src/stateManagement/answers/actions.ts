import {
  AddStepAnswerAction,
  AnswerReducerActionType,
  CurrentSurvey,
  SetCurrentSurveyAction,
  StepAnswer,
} from '@/stateManagement/answers/types';

export const setCurrentSurvey = (
  data: CurrentSurvey,
): SetCurrentSurveyAction => ({
  type: AnswerReducerActionType.SetCurrentSurvey,
  payload: data,
});

export const addAnswer = (data: StepAnswer): AddStepAnswerAction => ({
  type: AnswerReducerActionType.AddStepAnswer,
  payload: data,
});

export const resetStore = () => ({
  type: AnswerReducerActionType.ResetStore,
});

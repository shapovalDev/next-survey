import {
  AddStepAnswerAction,
  AnswerReducerActionType,
  CurrentSurvey,
  ResetStoreAction,
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

export const resetStore = (): ResetStoreAction => ({
  type: AnswerReducerActionType.ResetStore,
});

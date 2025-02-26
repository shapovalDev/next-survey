export enum AnswerReducerActionType {
  SetCurrentSurvey = 'SET_CURRENT_SURVEY',
  AddStepAnswer = 'ADD_STEP_ANSWER',
  ResetStore = 'RESET_STORE',
}

export interface AnswerState {
  survey: CurrentSurvey | null;
  data: StepAnswer[] | [];
}

export interface CurrentSurvey {
  id: string;
  title: string;
}

export interface Answer {
  id: string | null;
  value: string;
}

export interface StepAnswer {
  stepId: string;
  title: string;
  answer: Answer;
}
export interface SetCurrentSurveyAction {
  type: AnswerReducerActionType.SetCurrentSurvey;
  payload: CurrentSurvey;
}

export interface AddStepAnswerAction {
  type: AnswerReducerActionType.AddStepAnswer;
  payload: StepAnswer;
}

export interface ResetStoreAction {
  type: AnswerReducerActionType.ResetStore;
}

export type AnswerAction =
  | AddStepAnswerAction
  | SetCurrentSurveyAction
  | ResetStoreAction;

import { StepAnswer } from '@/stateManagement/answers/types';
import { NextCondition, Position, Screen } from '@/types/surveyType';
import { useMemo } from 'react';

const getNextStepId = (
  stepData: Screen,
  answers: StepAnswer[],
): string | undefined => {
  const { next, nextConditions = [], id: currentStepId } = stepData;

  // Check current step
  const currentStepCondition = nextConditions.find(
    ({ stepReference }: NextCondition) => stepReference === currentStepId,
  );

  if (currentStepCondition) {
    return currentStepCondition.next;
  }

  // Looking for suitable answer from redux store
  const matchingCondition = nextConditions.find(
    ({ stepReference, condition }: NextCondition) =>
      answers.some(
        ({ stepId, answer }) =>
          stepId === stepReference && answer.id === condition,
      ),
  );

  if (matchingCondition) {
    return matchingCondition.next;
  }

  // If nothing is found, use default "next"
  return next;
};

export const useNextStepPath = (
  surveyId: string,
  stepData: Screen,
  answers: StepAnswer[],
) => {
  return useMemo(() => {
    if (stepData?.position === Position.End) {
      return `/survey/${surveyId}/results`;
    }

    return `/survey/${surveyId}/step/${getNextStepId(stepData, answers)}`;
  }, [surveyId, stepData, answers]);
};

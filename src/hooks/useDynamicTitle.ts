import { useSelector } from 'react-redux';
import { RootState } from '@/stateManagement/store';
import { DynamicField } from '@/types/surveyType';
import { useMemo } from 'react';
import { StepAnswer } from '@/stateManagement/answers/types';

export const useDynamicTitle = (
  title: string,
  dynamicFields: DynamicField[] = [],
) => {
  const answers = useSelector((state: RootState) => state?.answers?.data);
  return useMemo(() => {
    if (!dynamicFields.length) {
      return title;
    }

    const replaceVariables = (title: string, dynamicFields: DynamicField[]) => {
      return dynamicFields.reduce((updatedTitle, field) => {
        const userAnswerId =
          (answers || []).find(
            ({ stepId }: StepAnswer) => field.stepReference === stepId,
          )?.answer?.id ?? '';

        const replacement =
          field?.conditions.find(({ answerId }) => answerId === userAnswerId)
            ?.value ?? '';

        return updatedTitle.replace(`{${field.variable}}`, replacement);
      }, title);
    };

    return replaceVariables(title, dynamicFields as DynamicField[]);
  }, [title, dynamicFields, answers]);
};

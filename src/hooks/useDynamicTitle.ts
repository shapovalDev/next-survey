import { useSelector } from 'react-redux';
import { RootState } from '@/stateManagement/store';
import { DynamicField } from '@/globalTypes';
import { useMemo } from 'react';

export const useDynamicTitle = (
  title: string,
  dynamicFields: DynamicField[] = [],
) => {
  const answers = useSelector((state: RootState) => state.answers.data);

  if (!dynamicFields.length) {
    return title;
  }

  const replaceVariables = (title: string, dynamicFields: DynamicField[]) => {
    return dynamicFields.reduce((updatedTitle, field) => {
      const userAnswerId =
        answers.find(({ stepId }) => field.stepReference === stepId)?.answer
          ?.id ?? '';
      const replacement =
        field?.conditions.find(({ answerId }) => answerId === userAnswerId)
          ?.value ?? '';
      return updatedTitle.replace(`{${field.variable}}`, replacement);
    }, title);
  };

  return useMemo(
    () => replaceVariables(title, dynamicFields as DynamicField[]),
    [dynamicFields],
  );
};

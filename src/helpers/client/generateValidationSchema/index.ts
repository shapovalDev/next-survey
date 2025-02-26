import * as yup from 'yup';
import { Validation } from '@/types/surveyType';
import { validationRulesCollection } from '@/helpers/client/generateValidationSchema/handlers';
import { Rule } from 'postcss';

const getBaseSchema = (fieldType: string) => {
  const handler = {
    string: yup.string(),
    date: yup.date(),
  };

  return handler[fieldType] ? handler[fieldType] : yup.string();
};

export const generateValidationSchema = (validation?: Validation) => {
  if (!validation || !validation.rules) {
    return yup.string();
  }

  let fieldSchema = getBaseSchema(validation.fieldType);

  validation.rules.forEach(({ ruleName, value }: Rule) => {
    const ruleCollection = validationRulesCollection[validation.fieldType];

    if (ruleCollection?.[ruleName]) {
      fieldSchema = ruleCollection[ruleName](value, fieldSchema);
    }
  });

  return fieldSchema;
};

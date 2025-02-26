import * as yup from 'yup';
import { Rule, Validation } from '@/types/surveyType';
import { validationRulesCollection } from '@/helpers/client/generateValidationSchema/handlers';
import { RuleCollection } from '@/helpers/client/generateValidationSchema/types';

const schemaTypes: Record<string, yup.AnySchema> = {
  string: yup.string(),
  date: yup.date(),
  number: yup.number(),
  boolean: yup.boolean(),
  array: yup.array(),
};

const getBaseSchema = <T extends yup.AnySchema>(fieldType: string): T => {
  return (schemaTypes[fieldType] || yup.string()) as T;
};

export const generateValidationSchema = (
  validation?: Validation,
): yup.AnySchema => {
  if (!validation || !validation.rules) {
    return yup.string();
  }

  let fieldSchema = getBaseSchema(validation.fieldType);

  validation.rules.forEach(({ ruleName, value }: Rule) => {
    const ruleCollection = validationRulesCollection[validation.fieldType];

    if (ruleCollection?.[ruleName as RuleCollection]) {
      // @ts-ignore
      fieldSchema = ruleCollection[ruleName](value, fieldSchema);
    }
  });

  return fieldSchema;
};

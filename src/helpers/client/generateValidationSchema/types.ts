import { validationRulesCollection } from '@/helpers/client/generateValidationSchema/handlers';
import { FieldType } from '@/types/surveyType';

export enum DateValidationValue {
  Today = 'today',
}

export type RuleCollection =
  keyof (typeof validationRulesCollection)[FieldType];

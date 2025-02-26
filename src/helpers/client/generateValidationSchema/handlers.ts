import * as yup from 'yup';
import { DateValidationValue } from '@/helpers/client/generateValidationSchema/types';

const minStringLength = (value: number | string, schema = yup.string()) =>
  schema.min(Number(value));

const maxStringLength = (value: number | string, schema = yup.string()) =>
  schema.max(Number(value));

const maxDate = (value: string | Date, schema = yup.date()) => {
  const isToday = value === DateValidationValue.Today;

  return isToday
    ? schema.max(new Date(), 'Date must be today or earlier')
    : schema.max(new Date(value), `Date must be before ${value}`);
};

export const validationRulesCollection = {
  string: {
    min: minStringLength,
    max: maxStringLength,
  },
  date: {
    max: maxDate,
  },
};

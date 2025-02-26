import React, { HTMLInputTypeAttribute } from 'react';
import Input from '@/ui/Input';
import * as yup from 'yup';
import { generateValidationSchema } from '@/helpers/client/generateValidationSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldType, Validation } from '@/types/surveyType';
import Button from '@/ui/Button';
import { dateToStandardFormat } from '@/helpers/dateFormat';

interface FormData {
  field?: any;
}

interface IProps {
  validation: Validation;
  submitAnswer: Function;
  type: HTMLInputTypeAttribute;
}

const SurveyCustomAnswer = ({
  validation,
  submitAnswer,
  type = FieldType.String,
}: IProps) => {
  const schema: yup.ObjectSchema<FormData> = yup.object({
    field: generateValidationSchema(validation),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'all',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = (formData: FormData) => {
    const { field } = formData || {};
    let data = field;

    if (type === FieldType.Date) {
      data = dateToStandardFormat(field as Date);
    }
    submitAnswer(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <Input
          type={type}
          register={{ ...register<'field'>('field') }}
          error={errors['field']}
          className="text-xl"
        />
      </div>
      <Button disabled={!!errors['field']} type="submit">
        Next
      </Button>
    </form>
  );
};

export default SurveyCustomAnswer;

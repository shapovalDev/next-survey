'use client';

import React, { FC } from 'react';
import { SurveyInterface } from '@/globalTypes';
import Button from '@/uiComponents/Button';
import { useRouter } from 'next/navigation';

interface IProps {
  surveys: SurveyInterface[] | [];
}

const SurveyList: FC<IProps> = ({ surveys }: IProps) => {
  const router = useRouter();

  const chooseSurvey = (survey) => {
    router.push(`/survey/${survey.id}/step/${survey.screens[0].id}`);
  };

  return (
    <>
      {surveys?.map((survey: SurveyInterface) => (
        <Button
          key={survey.id}
          className="mb-4 last:mb-0"
          onClick={() => chooseSurvey(survey)}
        >
          Start <b>"{survey.title}"</b>
        </Button>
      ))}
    </>
  );
};

export default SurveyList;

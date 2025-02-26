'use client';

import React from 'react';
import { SurveyInterface } from '@/types/surveyType';
import Button from '@/ui/Button';
import { useRouter } from 'next/navigation';

interface IProps {
  surveys: SurveyInterface[] | [];
}

const SurveyList = ({ surveys }: IProps) => {
  const router = useRouter();

  const chooseSurvey = (survey: SurveyInterface) => {
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

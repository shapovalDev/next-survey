'use client';

import React from 'react';
import DefaultLayout from '@/hoc/server/DefaultLayout';
import Table from '@/ui/Table';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/stateManagement/store';
import Button from '@/ui/Button';
import { useRouter } from 'next/navigation';
import { resetStore } from '@/stateManagement/answers/actions';

const Results = () => {
  const answers = useSelector((state: RootState) => state?.answers?.data);
  const surveyData = useSelector((state: RootState) => state?.answers?.survey);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const columns = [
    { key: 'id', title: 'Step ID' },
    { key: 'title', title: 'Title' },
    { key: 'answer', title: 'Answer' },
  ];

  const data = answers?.map(({ stepId, title, answer: { value } }) => ({
    id: stepId,
    title,
    answer: value,
  }));

  const backToSurveyList = () => {
    dispatch(resetStore());
    router.push('/');
  };

  return (
    <DefaultLayout classes="!w-full mt-4">
      <div className="text-lg sm:text-2xl font-bold mb-2">
        Results of <b>"{surveyData?.title}"</b> survey!
      </div>
      <div className="mb-10">
        <Table columns={columns} data={data} />
      </div>
      <div className="w-full flex justify-center items-center">
        <Button className="!w-1/2 !sm:w-1/3" onClick={backToSurveyList}>
          Surveys list
        </Button>
      </div>
    </DefaultLayout>
  );
};

export default Results;

'use client';

import React from 'react';
import DefaultLayout from '@/hoc/DefaultLayout';
import Table from '@/uiComponents/Table';
import { useSelector } from 'react-redux';
import { RootState } from '@/stateManagement/store';

const SurveyResults = () => {
  const answers = useSelector((state: RootState) => state.answers.data);

  const columns = [
    { key: 'id', title: 'Step ID' },
    { key: 'title', title: 'Title' },
    { key: 'answer', title: 'Answer' },
  ];

  const data = answers?.map(({ stepId, title, answer: { label } }) => ({
    id: stepId,
    title,
    answer: label,
  }));

  return (
    <DefaultLayout classes="!w-full">
      <span>Results</span>
      <Table columns={columns} data={data} />
    </DefaultLayout>
  );
};

export default SurveyResults;

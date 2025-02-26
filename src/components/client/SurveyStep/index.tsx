'use client';

import { Position, Screen, ScreenType } from '@/globalTypes';
import Button from '@/uiComponents/Button';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer, setCurrentSurvey } from '@/stateManagement/answers/actions';
import { useDynamicTitle } from '@/hooks/useDynamicTitle';
import { getNextStep } from '@/helpers/getNextStep';
import { RootState } from '@/stateManagement/store';

interface IProps {
  surveyId: string;
  surveyTitle: string;
  stepData: Screen;
}

const SurveyStep = ({ surveyId, surveyTitle, stepData }: IProps) => {
  const answers = useSelector((state: RootState) => state.answers.data);
  const router = useRouter();
  const dispatch = useDispatch();

  const { id, position, screenType, title, dynamicFields, subtitle, options } =
    stepData || {};

  const formattedTitle = useDynamicTitle(title, dynamicFields);

  const makeRedirect = () => {
    const nextStepId = getNextStep(stepData, answers);
    const nextPath = `/survey/${surveyId}/step/${nextStepId}`;

    router.push(nextPath);
  };

  const submitAnswer = (optionId: string, optionLabel: string) => {
    const isFirstStep = position === Position.Start;

    if (isFirstStep) {
      const currentSurvey = { id: surveyId, title: surveyTitle };
      dispatch(setCurrentSurvey(currentSurvey));
    }

    const answerData = {
      stepId: id,
      title: formattedTitle,
      answer: {
        id: optionId,
        label: optionLabel,
      },
    };

    dispatch(addAnswer(answerData));
    makeRedirect();
  };

  return (
    <div className="w-full">
      <h1 className="text-xl font-bold mb-4">{formattedTitle}</h1>
      <h3 className="text-md font-bold mb-4">{subtitle}</h3>
      {screenType === ScreenType.MultipleChoice &&
        options?.map(({ id, label }) => (
          <Button
            className="mb-4 last:mb-0"
            key={id}
            onClick={() => submitAnswer(id, label)}
          >
            {label}
          </Button>
        ))}
      {screenType === ScreenType.Info && (
        <Button onClick={makeRedirect}>Next</Button>
      )}
    </div>
  );
};

export default SurveyStep;

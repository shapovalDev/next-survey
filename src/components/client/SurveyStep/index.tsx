'use client';

import { Position, Screen, ScreenType } from '@/types/surveyType';
import Button from '@/ui/Button';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer, setCurrentSurvey } from '@/stateManagement/answers/actions';
import { useDynamicTitle } from '@/hooks/useDynamicTitle';
import { RootState } from '@/stateManagement/store';
import { useNextStepPath } from '@/hooks/useNextStepPath';
import SurveyCustomAnswer from '@/components/client/SurveyCustomAnswer';

interface IProps {
  surveyId: string;
  surveyTitle: string;
  stepData: Screen;
}

const SurveyStep = ({ surveyId, surveyTitle, stepData }: IProps) => {
  const answers = useSelector((state: RootState) => state.answers.data);
  const nextStepPath = useNextStepPath(surveyId, stepData, answers);
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    id,
    position,
    screenType,
    title,
    dynamicFields,
    subtitle,
    options,
    validation,
  } = stepData || {};
  const formattedTitle = useDynamicTitle(title, dynamicFields);

  const makeRedirect = () => router.push(nextStepPath);

  const saveCurrentSurvey = () => {
    const isFirstStep = position === Position.Start;

    if (isFirstStep) {
      const currentSurvey = { id: surveyId, title: surveyTitle };
      dispatch(setCurrentSurvey(currentSurvey));
    }
  };

  const submitAnswer = (answerValue: string, answerId: string) => {
    saveCurrentSurvey();

    const answerData = {
      stepId: id,
      title: formattedTitle,
      answer: {
        id: answerId || null,
        value: answerValue,
      },
    };

    dispatch(addAnswer(answerData));
    makeRedirect();
  };

  const renderContent = () => {
    switch (screenType) {
      case ScreenType.MultipleChoice:
        return options?.map(({ id, label }) => (
          <Button
            className="mb-4 last:mb-0"
            key={id}
            onClick={() => submitAnswer(label, id)}
          >
            {label}
          </Button>
        ));

      case ScreenType.TextField:
      case ScreenType.DateTime:
        return (
          <SurveyCustomAnswer
            type={validation?.fieldType}
            validation={validation}
            submitAnswer={submitAnswer}
          />
        );

      case ScreenType.Info:
        return <Button onClick={makeRedirect}>Next</Button>;

      default:
        return null;
    }
  };

  return (
    <div className="w-full text-center">
      <h1 className="text-xl font-bold mb-4">{formattedTitle}</h1>
      {subtitle && <h3 className="text-md mb-4">{subtitle}</h3>}
      {renderContent()}
    </div>
  );
};

export default SurveyStep;

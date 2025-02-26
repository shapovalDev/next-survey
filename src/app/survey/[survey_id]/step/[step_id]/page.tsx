import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getDataFromJSON } from '@/helpers/server/getDataFromJSON';
import { ScreenType, SurveyInterface } from '@/types/surveyType';
import DefaultLayout, { LayoutType } from '@/hoc/server/DefaultLayout';
import SurveyStep from '@/components/client/SurveyStep';
import { getFilesFromDirectory } from '@/helpers/server/getFilesFromDirectory';

interface StepParam {
  survey_id: string;
  step_id: string;
}

interface IProps {
  params: StepParam;
}

const SurveyPage = async ({ params }: IProps) => {
  const survey: SurveyInterface = getDataFromJSON(
    `public/data/${params.survey_id}.json`,
  );

  const step = survey.screens.find(({ id }) => id === params.step_id);

  if (!step) return notFound();

  const layoutType =
    step?.screenType === ScreenType.Info
      ? LayoutType.Secondary
      : LayoutType.Primary;

  return (
    <DefaultLayout backButton layoutType={layoutType}>
      <SurveyStep
        surveyId={survey.id}
        surveyTitle={survey.title}
        stepData={step}
      />
    </DefaultLayout>
  );
};

export default SurveyPage;

export const generateStaticParams = async () => {
  const surveyPaths = getFilesFromDirectory('public/data');

  let allSteps: { survey_id: string; step_id: string }[] = [];

  for (const path of surveyPaths) {
    const { id: surveyId, screens }: SurveyInterface = getDataFromJSON(path);

    const steps = screens.map(({ id }) => ({
      survey_id: surveyId,
      step_id: id,
    }));

    allSteps = [...allSteps, ...steps];
  }

  return allSteps;
};

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const { screens }: SurveyInterface = getDataFromJSON(
    `public/data/${params.survey_id}.json`,
  );

  const { title } = screens.find(
    (screen: { id: string }) => screen.id === params.step_id,
  );

  return {
    title: title,
    description: `Answer the question: ${title}`,
  };
}

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getDataFromJSON } from '@/helpers/getDataFromJSON';
import { SurveyInterface } from '@/globalTypes';
import DefaultLayout from '@/hoc/DefaultLayout';
import SurveyStep from '@/components/SurveyStep';

interface PageProps {
  params: { id: string };
}

const survey: SurveyInterface = getDataFromJSON('public/data/survey.json');

export const generateStaticParams = async () => {
  return survey.screens.map((screen: { id }) => ({
    id: screen.id,
  }));
};

const SurveyPage = ({ params }: PageProps) => {
  const step = survey.screens.find((s: { id: string }) => s.id === params.id);

  if (!step) return notFound();

  return (
    <DefaultLayout>
      <SurveyStep stepData={step} />
    </DefaultLayout>
  );
};

export default SurveyPage;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const screen = survey.screens.find((s: { id: string }) => s.id === params.id);
  return {
    title: screen ? screen.title : 'Survey',
    description: screen
      ? `Answer the question: ${screen.title}`
      : 'Survey Page',
  };
}

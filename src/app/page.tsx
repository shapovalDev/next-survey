import DefaultLayout from '../hoc/server/DefaultLayout';
import { getFilesFromDirectory } from '@/helpers/server/getFilesFromDirectory';
import { getDataFromJSON } from '@/helpers/server/getDataFromJSON';
import SurveyList from '../components/client/SurveyList';
import { SurveyInterface } from '@/types/surveyType';

const HomePage = () => {
  const surveyPaths = getFilesFromDirectory('public/data');
  const surveys = surveyPaths?.map((path: string) => getDataFromJSON(path));

  return (
    <DefaultLayout>
      <div className="w-full flex justify-center mb-4">
        <span className="text-2xl font-bold">Choose the survey!</span>
      </div>
      <SurveyList surveys={surveys as SurveyInterface[]} />
    </DefaultLayout>
  );
};

export default HomePage;

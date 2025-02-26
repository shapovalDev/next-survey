## Survey Frontend App

* A JSON structure was developed to describe the construction of a survey;
* A UI was developed, which will form a survey based on the JSON structure;
>_**It is assumed that the described JSON is the data that would was received from an imaginary backend, and the formation of this data is the task of an imaginary third-party application.**_

---

#### Deployed version: https://next-survey-chi.vercel.app

---

#### Local launch:

1. Create a .env file and add `NEXT_PUBLIC_NODE_ENV=DEV` there
2. Run the command in your terminal:
```bash
npm install && npm run dev
```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---
### Survey data

#### In the `/public/data` folder you will be able to see two .json files.
* `survey_1.json` - file with the structure of the survey from [Figma](https://www.figma.com/file/pLPedeHKj4l1wxtfy8IWO4/OBRIO_Front_End_Test?type=design&node-id=0-1&mode=design&t=EinDdmTXbBMySsjO-0).
* `survey_2.json` - file with the structure of the questionnaire, in which the user can provide custom data as an answer. Cases with a datepicker and a text input were implemented as an example.

---

### Project file structure 
````
├── public
│   └── data
│       ├── survey_1.json
│       └── survey_2.json
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── survey
│   │       └── [survey_id]
│   │           ├── results
│   │           │   └── page.tsx
│   │           └── step
│   │               └── [step_id]
│   │                   └── page.tsx
│   ├── components
│   │   └── client
│   │       ├── SurveyCustomAnswer
│   │       │   └── index.tsx
│   │       ├── SurveyList
│   │       │   └── index.tsx
│   │       └── SurveyStep
│   │           └── index.tsx
│   ├── helpers
│   │   ├── capitalizeString.ts
│   │   ├── client
│   │   │   └── generateValidationSchema
│   │   │       ├── handlers.ts
│   │   │       ├── index.ts
│   │   │       └── types.ts
│   │   ├── dateFormat.ts
│   │   └── server
│   │       ├── getDataFromJSON.ts
│   │       └── getFilesFromDirectory.ts
│   ├── hoc
│   │   └── server
│   │       └── DefaultLayout
│   │           └── index.tsx
│   ├── hooks
│   │   ├── useDynamicTitle.ts
│   │   └── useNextStepPath.ts
│   ├── stateManagement
│   │   ├── answers
│   │   │   ├── actions.ts
│   │   │   ├── reducer.ts
│   │   │   └── types.ts
│   │   └── store.ts
│   ├── types
│   │   └── surveyType.ts
│   └── ui
│       ├── BackButton
│       │   └── index.tsx
│       ├── Button
│       │   └── index.tsx
│       ├── Input
│       │   └── index.tsx
│       └── Table
│           └── index.tsx
├── eslint.config.js
├── global.d.ts
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── tsconfig.tsbuildinfo
````

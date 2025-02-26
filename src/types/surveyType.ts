interface Option {
  id: string;
  label: string;
}

export interface NextCondition {
  stepReference: string;
  condition: string;
  next: string;
}

export enum Position {
  Start,
  End,
}

export enum ScreenType {
  Info,
  MultipleChoice,
  TextField,
  DateTime,
}

export interface DynamicFieldCondition {
  answerId: string;
  value: string;
}

export interface DynamicField {
  variable: string;
  stepReference: string;
  conditions: DynamicFieldCondition[];
}

interface Rule {
  ruleName: string;
  value: string;
}

export enum FieldType {
  String = 'string',
  Date = 'date',
}

export interface Validation {
  fieldType: FieldType;
  rules: Rule[];
}

export interface BaseScreen {
  id: string;
  position?: number;
  screenType: ScreenType;
  title: string;
  dynamicFields?: DynamicField[];
  subtitle?: string;
}

interface ScreenWithOptions extends BaseScreen {
  screenType: ScreenType.MultipleChoice;
  options: Option[];
  validation?: never;
}

interface ScreenWithoutOptions extends BaseScreen {
  screenType: Exclude<ScreenType, ScreenType.MultipleChoice>;
  options?: never;
}

interface ScreenWithValidation extends ScreenWithoutOptions {
  screenType: ScreenType.TextField | ScreenType.DateTime;
  validation: Validation[];
}

interface ScreenWithoutValidation extends ScreenWithoutOptions {
  screenType: ScreenType.Info;
  validation?: never;
}

interface ScreenWithNext {
  next: string;
  nextConditions?: never;
}

interface ScreenWithNextConditions {
  next?: never;
  nextConditions: NextCondition[];
}

export type Screen =
  | (ScreenWithOptions & (ScreenWithNext | ScreenWithNextConditions))
  | (ScreenWithValidation & (ScreenWithNext | ScreenWithNextConditions))
  | (ScreenWithoutValidation & (ScreenWithNext | ScreenWithNextConditions));

export interface SurveyInterface {
  id: string;
  title: string;
  screens: Screen[];
}

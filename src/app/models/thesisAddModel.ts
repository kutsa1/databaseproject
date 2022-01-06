import {Author} from "./author";
import {Institute} from "./institute";
import {Language} from "./language";
import {Supervisor} from "./supervisor";
import {University} from "./university";
import {Topic} from "./topic";
import {Keyword} from "./keyword";

export interface ThesisAddModel {
  author: Author;
  institute: Institute;
  language: Language;
  counselors: Supervisor[];
  university: University;
  subjectTopics: Topic[]
  keywords: Keyword[]
  thesisNo: number;
  title: string;
  summary: string;
  year: Date;
  type: string;
  numberOfPages: number;
  SubmissionDate: Date;

}

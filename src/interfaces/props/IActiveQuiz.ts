import { IAnswerItem } from './IAnswerItem';
import { IAnswerState } from '../states';

export interface IActiveQuiz extends IAnswerState {
    answers: IAnswerItem[];
    question: string;
    quizLength: number;
    answerNumber: number;

    onAnswerClick(answerId: number): void;
}
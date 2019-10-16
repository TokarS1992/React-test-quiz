import { IAnswersList } from '../props';

export type TAnswerState = 'success' | 'error';

export interface IQuizItem extends IAnswersList {
    question: string;
    rightAnswerId: number;
    id: number;
}

export interface IAnswerState {
    answerState: {
        [key: number]: TAnswerState
    } | null;
}

export interface IQuiz extends IAnswerState {
    activeQuestionNumber: number;
    isFinished: boolean;
    quiz: IQuizItem[];
    results: {
        [key: number]: TAnswerState;
    };
}
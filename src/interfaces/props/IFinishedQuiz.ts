import { IQuizItem, TAnswerState } from '../states';

export interface IFinishedQuiz {
    results: {
        [key: number]: TAnswerState;
    };
    quiz: IQuizItem[];
}
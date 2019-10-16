import { IAnswerItem } from './IAnswerItem';
import { IAnswerClick } from '../handlers';

export interface IAnswersList extends IAnswerClick {
    answers: IAnswerItem[];
}
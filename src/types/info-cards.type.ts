import {ArgsType} from "./args.type";

export type InfoCardsProps = {
    header: string;
    info: ArgsType[];
    mode: 'process' | 'questionsAndAnswers'
}


export type InfoCardProps = {
    info: ArgsType;
    mode: 'process' | 'questionsAndAnswers',
    index?: number;
}


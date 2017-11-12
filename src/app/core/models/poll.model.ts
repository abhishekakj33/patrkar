
export class Poll {
    id?: any;
    days?: string
    author: string
    authorUID: any
    authorImageUrl:any
    city: object
    date: Date
    question: PollQuestion
    totalVotesCount?: number = 0;
}

export class PollQuestion {
    question: string
    options: PollOption[];
}

export class PollOption {
    option: string = '';
    votesCount?: number = 0;
    votePercent?:any = '0%'
}

export class Polls extends Poll {
    polledByUser: boolean = false;
}

export const initPoll = {
    poll: {
        id: '',
        days: '',
        author: '',
        authorUID: '',
        city: '',
        date: new Date(),
        question: {}
    }
}
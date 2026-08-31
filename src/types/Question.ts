export interface Question {
    id?: string;
    clue1: string;
    clue2: string;
    clue3: string;
    clue4: string;
    answer: string;
    setter?: string;
    date: Date;
    notes?: string;
    dateUsed?: Date;
    author?: string;
}

import { GroupPost } from './post';

export interface Group {
    id: number;
    name: string;
    posts: GroupPost[];
}

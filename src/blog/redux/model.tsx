import { action, ActionType } from "typesafe-actions"
import { dummyArticles as initialArticles }from "../../DummyArticles";

export interface Article {
    title: string;
    body: string;
    author: string;
    date: Date;
}

const initialState = initialArticles;

export const actions = {
    addArticle: (p: Article) => action("ADD_ARTICLE", p),
}

export type ArticleActionType = ActionType<typeof actions>;

export const reducer = (
    state = initialState,
    action: ArticleActionType,
): Article[] => {
    switch (action.type) {
        case "ADD_ARTICLE":
            return [...state, action.payload];
        default:
           return state;
    }
}
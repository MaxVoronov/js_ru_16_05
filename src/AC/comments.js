import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_ALL_COMMENTS } from '../constants'
import AppDispatcher from '../dispatcher'
import { loadCommentsCall, loadAllCommentsCall } from './apiCalls'
import { asyncAC } from './utils'

export function addComment(articleId, comment) {
    const id = Math.random() * 100
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        payload: {
            articleId,
            comment: {...comment, id}
        }
    })
}

export const loadComments = asyncAC(LOAD_COMMENTS_FOR_ARTICLE, loadCommentsCall)
export const loadAllComments = asyncAC(LOAD_ALL_COMMENTS, loadAllCommentsCall)
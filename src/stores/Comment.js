import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_ALL_COMMENTS, START, SUCCESS, FAIL } from '../constants'

export default class Comment extends BasicStore {
    constructor(...args) {
        super(...args)
        this.total = 0

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, payload, response } = action

            switch (type) {
                case ADD_COMMENT:
                    this._add(payload.comment)
                    break

                case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
                    response.forEach(this._add)
                    break

                case LOAD_ALL_COMMENTS + START:
                    this.loading = true
                    break

                case LOAD_ALL_COMMENTS + SUCCESS:
                    this._truncate()
                    response.records.forEach(this._add)
                    this.total = parseInt(response.total)
                    this.loading = false
                    break

                case LOAD_ALL_COMMENTS + FAIL:
                    break

                default:
                    return
            }
            this.emitChange()
        })
    }
}
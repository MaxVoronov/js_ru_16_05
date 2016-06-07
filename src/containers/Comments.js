import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import connectToStore from '../decorators/connectToStore'
import { loadAllComments } from '../AC/comments'
import Comment from '../components/Comment'

const COMMENT_LIMIT = 10;

class Comments extends Component {
    render() {
        const { comments, loading, total, page } = this.props
        if (loading) return <h1>Loading...</h1>
        const commentList = comments.map((comment) => <li><Comment key={comment.id} comment={comment} /></li>)
        return <ul>
            {commentList}
            {this.getLoadMoreBtn(total, page)}
        </ul>
    }

    getLoadMoreBtn(total, currentPage) {
        const totalPages = Math.round(total / COMMENT_LIMIT)
        if(totalPages <= 1) return
        let pagination = []
        currentPage = parseInt(currentPage) || 1
        if(currentPage > 1) pagination.push(<Link to={`/comments/${currentPage - 1}`}>Prev page</Link>)
        if(currentPage < totalPages) pagination.push(<Link to={`/comments/${currentPage + 1}`}>Next page</Link>)
        pagination.push(<i>({currentPage}/{totalPages})</i>)
        //здесь React должен ругаться на отсутствие key, по идее?
        return pagination.map((button) => { return(<span> {button} </span>) })
    }
}

function getState(stores, props) {
    let { page } = props
    const { comments } = stores
    page = parseInt(page) || 1
    if (comments.page != page && !comments.loading) {
        comments.page = page
        loadAllComments({ limit: COMMENT_LIMIT, offset: (page - 1) * COMMENT_LIMIT })
    }
    return {
        loading: comments.loading,
        comments: comments.getAll(),
        total: comments.total
    }
}

export default connectToStore(['comments'], getState)(Comments)

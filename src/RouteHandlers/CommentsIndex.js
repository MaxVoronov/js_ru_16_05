import React, { Component, PropTypes } from 'react'
import Comments from '../containers/Comments'

function CommentsIndex(props) {
    const { params: { page } } = props
    return (
        <div>
            <h1>News app: Comments</h1>
            <Comments page = {page} />
        </div>
    )
}

CommentsIndex.propTypes = {}

export default CommentsIndex
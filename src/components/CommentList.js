import React, { PropTypes, Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    state = {
        isOpen: false
    }

    render() {
        const { comments } = this.props
        const commentItems = (comments && this.state.isOpen)
            ? comments.map((comment) => <Comment key={comment.id} comment={comment}/>)
            : null

        return (
            <div>
                <a href="#" onClick={this.handleClick}>Comments ({(comments) ? comments.length : 0})</a>
                {commentItems}
            </div>
        )
    }

    handleClick = (e) => {
        e.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

CommentList.propTypes = {
    comments: PropTypes.array
}

export default CommentList
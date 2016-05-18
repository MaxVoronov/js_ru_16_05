import React, { PropTypes, Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {
    state = {
        isOpen: true,
        some: 'other'
    }

    render() {
        const { article } = this.props
        if (!article) return <h3>No article</h3>

        const { id, title, text, comments } = article
        const { isOpen } = this.state
        const textItem = isOpen ? <section>{text}</section> : null
        return (
            <div>
                <h3 onClick = {this.handleClick}>{title}</h3>
                {textItem}
                <CommentList comments = {comments} />
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen : !this.state.isOpen
        })
    }
}


Article.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        comments: PropTypes.array
    })
}

export default Article
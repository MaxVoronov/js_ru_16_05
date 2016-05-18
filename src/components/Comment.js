import React, { PropTypes } from 'react'

function Comment(props) {
    const { comment } = props
    return (
        <div key={comment.id}>
            <h5>{comment.name}</h5>
            {comment.text}
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Comment
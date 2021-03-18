import React, { useState } from "react"
import CommentsBlock from 'simple-react-comments';

const CommentClient = (props) => {
  return (
    <div className="mt-4 shadow-container">
    	<div>
	        <CommentsBlock
	          comments={this.state.comments}
	          signinUrl={'/signin'}
	          isLoggedIn
	          reactRouter // set to true if you are using react-router
	          onSubmit={text => {
	            if (text.length > 0) {
	              this.setState({
	                comments: [
	                  ...this.state.comments,
	                  {
	                    authorUrl: '#',
	                    avatarUrl: '#avatarUrl',
	                    createdAt: new Date(),
	                    fullName: 'Name',
	                    text,
	                  },
	                ],
	              });
	              console.log('submit:', text);
	            }
	          }}
	        />
	    </div>
    </div>
  )
}


export default CommentClient;
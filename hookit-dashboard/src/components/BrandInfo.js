import React from 'react'

const BrandInfo = ({ post }) => {
    return (
        <React.Fragment>
            <td>{post.BrandName}</td>       
            <td>{post.Displayname}</td>
            <td>{post.Likes}</td>
            <td>{post.Comments}</td>
            <td>{post.Views}</td>
            <td>{post.TagValue.toFixed(2)}</td>
            <td>{post.MentionValue.toFixed(2)}</td>
            <td>{post.SocialPost_ID}</td>
        </React.Fragment>
    )
}

export default BrandInfo;
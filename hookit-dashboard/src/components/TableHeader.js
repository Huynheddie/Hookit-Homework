import React from 'react'

const TableHeader = ({ setSortField }) => {
    return (
        <tr>
            <th onClick={() => setSortField('BrandName')}>Brand Name</th>
            <th onClick={() => setSortField('Displayname')}>Display Name</th>
            <th onClick={() => setSortField('Likes')}>Likes</th>
            <th onClick={() => setSortField('Comments')}>Comments</th>
            <th onClick={() => setSortField('Views')}>Views</th>
            <th onClick={() => setSortField('TagValue')}>Tag Value</th>
            <th onClick={() => setSortField('MentionValue')}>Mention Value</th>
            <th onClick={() => setSortField('SocialPost_ID')}>ID (?)</th>
        </tr>
    )
}

export default TableHeader;
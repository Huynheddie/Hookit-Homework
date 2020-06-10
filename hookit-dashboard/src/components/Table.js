import React from 'react'
import TableHeader from './TableHeader'
import BrandInfo from './BrandInfo'

const Table = ({ posts, setSortField }) => {
    return (
        <table>
            <tbody>
                <TableHeader setSortField={setSortField} />
                {
                    posts.map((post, i) => (
                        <tr key={i}>
                            <BrandInfo post={post}/>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    )
}

export default Table;
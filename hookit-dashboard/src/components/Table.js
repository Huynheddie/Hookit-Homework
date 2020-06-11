import React from 'react'
import TableHeader from './TableHeader'
import BrandInfo from './BrandInfo'

const Table = ({ onDisplayPosts }) => {
    return (
        <table>
            <tbody>
                <TableHeader />
                { /* Table Body */
                    onDisplayPosts.map((post, i) => (
                        <tr key={i}>
                            <BrandInfo post={post}/>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    );
}

export default Table;
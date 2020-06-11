import React from 'react'
import tableValues from '../utils/config'

const TableHeader = (props) => {
    return (
        <tr>
            {
                tableValues.map((element, index) => (
                            <th key={index}>
                                {element.displayName}
                            </th>
                        ))  
            }
        </tr>
    )
}

export default TableHeader;
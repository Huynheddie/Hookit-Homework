import React from 'react'
import tableValues from '../utils/config'

const BrandInfo = ({ post }) => {
    return (
        <React.Fragment>
            {
                tableValues.map((element, index) => (
                    <td key={index}>
                        {
                            post[element.identifier]
                        }
                    </td>
                ))
            }
        </React.Fragment>
    )
}

export default BrandInfo;
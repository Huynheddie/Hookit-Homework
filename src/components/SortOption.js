import React from 'react'
import tableValues from '../utils/config'

const SortOption = ({ sortField, handleSortField, sortOrder, handleSortOrder }) => {
    return (
        <div style={{marginBottom: "5px"}}>
            <label htmlFor="sortField">Sort by: </label>
            <select name="sortField" value={sortField} onChange={handleSortField}>
                <option disabled defaultValue></option>
                {
                    tableValues.map((element, index) => (
                        <option key={index} value={element.identifier}>
                            {element.displayName}
                        </option>
                    ))
                }
            </select>

            <label style={{marginLeft: "5px"}} htmlFor="sortOrder">Order: </label>
            <select name="sortOrder" value={sortOrder} onChange={handleSortOrder}>
                <option value={"asc"}>ASC</option>
                <option value={"desc"}>DESC</option>
            </select>
        </div>
    )
}

export default SortOption;
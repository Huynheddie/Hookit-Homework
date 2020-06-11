import React from 'react'

const SortOption = ({ sortField, handleSortField, sortOrder, handleSortOrder }) => {
    return (
        <div style={{marginBottom: "5px"}}>
            <label htmlFor="sortField">Sort by: </label>
            <select name="sortField" value={sortField} onChange={handleSortField}>
                <option disabled defaultValue></option>
                <option value={"Displayname"}>Display name</option>
                <option value={"Likes"}>Likes</option>
                <option value={"Comments"}>Comments</option>
                <option value={"Views"}>Views</option>
                <option value={"Interactions"}>Interactions</option>
            </select>

            <label style={{marginLeft: "5px"}} htmlFor="sortOrder">Direction: </label>
            <select name="sortOrder" value={sortOrder} onChange={handleSortOrder}>
                <option value={"asc"}>ASC</option>
                <option value={"desc"}>DESC</option>
            </select>
        </div>
    )
}

export default SortOption;
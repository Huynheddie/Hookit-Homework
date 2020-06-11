import React, { useEffect, useState } from 'react'
import Table from './Table'
import SortOption from './SortOption'

const TableInterface = ({ postMemo, onDisplayPosts, setOnDisplayPosts }) => {
    const [searchFilter, setSearchFilter] = useState('');
    const [sortField, setSortField] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        const sortedPosts = [...onDisplayPosts].sort((a, b) => {
            // If sorting by display name, convert all names to lower case for sorting purposes
            if (sortField === 'Displayname') {
                if (a[sortField].toLowerCase() < b[sortField].toLowerCase()) {
                    return sortOrder === 'asc' ? -1 : 1;
                } else if (a[sortField].toLowerCase() > b[sortField].toLowerCase()) {
                    return sortOrder === 'asc' ? 1 : -1;
                } else {
                    return 0;
                }
            } else {
                if (a[sortField] < b[sortField]) {
                    return sortOrder === 'asc' ? -1 : 1;
                } else if (a[sortField] > b[sortField]) {
                    return sortOrder === 'asc' ? 1 : -1;
                } else {
                    return 0;
                }
            }
        })
        setOnDisplayPosts(sortedPosts)
    // eslint-disable-next-line
    }, [sortField, sortOrder])

    // Update search term filter and filter posts 
    const handleSearchFilterChange = (event) => {
        let searchTerm = event.target.value.toLowerCase();
        setSearchFilter(searchTerm);
        setOnDisplayPosts(postMemo
        .filter((post) => post.Displayname.toLowerCase().includes(searchTerm))
        )
    }

    const handleSortField = (event) => {
        let field = event.target.value;
        setSortField(field);
    } 

    const handleSortOrder = (event) => {
        let order = event.target.value;
        setSortOrder(order);
    }
      
    return (
        <div style={{marginBottom: "20px"}}>
            <h1 style={{textAlign: "center"}}>Hookit User Dashboard</h1>
            <div style={{marginLeft: "15%"}}>
                <h2 style={{marginBottom: "10px"}}>Posts</h2>
                <input className={"search-filter"} placeholder="Filter by name" value={searchFilter} onChange={handleSearchFilterChange}></input>
                <SortOption sortField={sortField} handleSortField={handleSortField}
                            sortOrder={sortOrder} handleSortOrder={handleSortOrder} />
            </div>
            <Table onDisplayPosts={onDisplayPosts} />
        </div>
    );
}

export default TableInterface;
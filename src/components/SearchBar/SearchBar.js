import React, { useState } from "react";
import styles from './SearchBar.module.css';
import placeSearch from "../../utils/fourSquare";



const orders = {
    'Best Match': "best_match",
    'Highest Rated': "highest_rated",
    'Most Reviewed': "most_reviewed",
}


const SearchBar = ({ setArr }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortOrder, setSortOrder] = useState('best_match');

    const handleSortOrder = (option) => {
        setSortOrder(option);
    }

    const handleActive = (val) => {
        if (sortOrder === val) {
            return styles.active;
        }

        return "";
    }


    const handleOnSubmit = (e) => {
        e.preventDefault();

        const searcInfo = {
            searchTerm,
            location,
            sortOrder
        }

        placeSearch(searchTerm, location, sortOrder, setArr);

    }


    return (
        <div className={styles['search-bar']}>
            <form onSubmit={handleOnSubmit}>
                <div className={styles['sort-btns']}>
                    <ul>
                        {
                            Object.keys(orders).map(order => {
                                return (
                                    <li
                                        className={handleActive(orders[order])}
                                        key={orders[order]}
                                        onClick={() => handleSortOrder(orders[order])}
                                    >
                                        {order}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>

                <div className={styles['search-inputs']}>
                    <input
                        className={styles['search-term']}
                        type="text"
                        placeholder="Search Business"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <input
                        className={styles['search-location']}
                        type="text"
                        placeholder="Where?"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <input
                    className={styles['submit']}
                    type="submit"
                    value="Let's Go"
                />
            </form>
        </div>
    )
}


export { SearchBar };
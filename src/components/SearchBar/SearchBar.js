import React from "react";
import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={styles['search-bar']}>
            <form>
                <div className={styles['sort-btns']}>
                    <button className={styles['sort-btn']} value="best-match">Best Match</button>
                    <button className={styles['sort-btn']} value="highest-rated">Highest Rated</button>
                    <button className={styles['sort-btn']} value="most-reviewed">Most Reviewed</button>
                </div>
                <div className={styles['search-inputs']}>
                    <input className={styles['search-term']} type="text" placeholder="Search Business" />
                    <input className={styles['search-location']} type="text" placeholder="Where?" />
                </div>
                <input className={styles['submit']} type="submit" value="Let's Go" />
            </form>
        </div>
    )
}

export default SearchBar;
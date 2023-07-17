import React from "react";
import Business from "../Business/Business";
import styles from './BusinessList.module.css';


const BusinessList = ({ businesses }) => {

    if (!businesses) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className={styles['business-list']}>
            {businesses.map((business) => (
                <Business key={business} business={business} />
            ))}
        </div>

    );
}

export default BusinessList;
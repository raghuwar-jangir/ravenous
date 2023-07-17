import React from 'react';
import styles from './Business.module.css';
const Business = ({ business }) => {
    // Sample business data (you can replace this with your actual data)

    return (
        <div className={styles.Business}>
            <div className={styles.imageContainer}>
                <img src={business.imgUrl} alt="" />
            </div>
            <h2>{business.name}</h2>
            <div className={styles.BusinessInformation}>
                <div className={styles.BusinessAddress}>
                    <p>{business.address}</p>
                    <p>zyx</p>
                    <p>xyz</p>
                </div>
                <div className={styles.BusinessReviews}>
                    <h3>category</h3>
                    <h3 className={styles.rating}>{`4.5 stars`}</h3>
                    <p>{`120 reviews`}</p>
                </div>
            </div>
        </div>
    );


};

export default Business;

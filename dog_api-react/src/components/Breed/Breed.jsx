import React from 'react'
import Galery from './Galery'
import styles from './Breed.module.css'

function Breed({ selectedBreed }) {
    return (
        <>
            <div className={styles.div}>
                <h2>{selectedBreed}</h2>
                <div className="galery" id="galery">
                    <Galery breed={selectedBreed} />
                </div>
            </div>
        </>
    )
}
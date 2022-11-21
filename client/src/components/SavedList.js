import React, { useState, useEffect } from 'react';
import axios from "axios";
import styles from "../styles/components/SavedCard.module.css";
import SavedCard from "./SavedCard";

function SavedList () {
    const [savedList, setSavedList] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {

        try {

            setLoad(true);
            axios.get('http://localhost:5000/savedList').then((response) => {
                console.log(response.data);
                setSavedList(response.data);
            })
            setLoad(false);
            
        } catch (e) {
            console.log(e);
        };
    }, []);

    return(
        <div className={styles.savedContainer}>
            {load ? (
                <h1 className={styles.loading}>Loading...</h1>
            ) : (

                <>
                {savedList.map((val) => (
                    <SavedCard
                        id={val._id}
                        name={val.universityName}
                        web_page={val.web_page}
                        domain={val.domain}
                        country={val.country}
                    />
                ))}
                </>
            )}
        </div>
    );

}


export default SavedList
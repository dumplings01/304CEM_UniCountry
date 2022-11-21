import React from "react";
import styles from "../styles/components/SavedCard.module.css";
import axios from "axios";

function SavedCard({id, name, web_page, domain, country}) {

    const deleteSaved = (saved) => {
        axios.delete(`http://localhost:5000/delete_saved/${saved}`);
        alert("Saved university deleted successfully!");
        window.location.reload();
    }

        
    return(
        <>
            <div className={styles.savedCard}>
                <div className={styles.details}>
                    <h3>{name}</h3>
                    <a href={web_page}>{domain}</a>
                    <h4>{country}</h4>
                </div>

                <button className={styles.delete_button}
                onClick={() => {deleteSaved(id)}}>Delete</button>
            </div>
        </>
    );
}

export default SavedCard

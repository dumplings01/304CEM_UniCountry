import React from "react";
import styles from "../styles/components/UniCard.module.css";
import axios from "axios";


function UniCard({name, web_page, domain, country}) {

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("/saveUni", {
      name: name,
      web_page: web_page,
      domain: domain,
      country: country
    })
    .then((res) => {
      console.log(res);
    });
    alert("Saved successfully!");
  }

  return (

      <div className={styles.container}>
        <h3>{name}</h3>
        <a href={web_page}>{domain}</a>
          <button
          className={styles.save_button}
          onClick={handleSubmit}
          >Save</button>
      </div>

  );
}

export default UniCard;
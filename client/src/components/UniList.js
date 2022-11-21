import React from 'react';
import styles from "../styles/components/UniList.module.css";
import CountryInfo from "./CountryInfo";
import UniCard from "./UniCard";
import { useState, useEffect } from "react";

import axios from 'axios';

function UniList({ countryName }) {
    const [universities, setUniversities] = useState([]);
    const [country, setCountry] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        const getUniversities = async () => {

          try {

            setLoad(true);
            let apiUrl = `http://universities.hipolabs.com/search?country=${countryName}`;
            const response = await axios.get(apiUrl);

            setUniversities(response.data);

            setLoad(false);

          } catch (e) {

            console.log(e);

          }
        };
        getUniversities();
      }, [countryName]);

    useEffect(() => {
        const getCountry = async () => {
          
          try {
            let apiUrl2 = `https://restcountries.com/v2/name/${countryName}`;
            const response2 = await axios.get(apiUrl2);
            setCountry(response2.data);
          } catch (e) {
            console.log(e);
          };
        };
        getCountry();
    }, [countryName]);

    return (
        <div className={styles.wrapper}>
            {load ? (
                <h1 className={styles.loading}>Loading...</h1>
            ) : (
                <>

                <div className={styles.countryContainer}>
                  {country.map((countryDetail) => (
                    <CountryInfo
                      country={countryDetail.name}
                      capital={countryDetail.capital}
                      timezone={countryDetail.timezones[0]}
                      currency={countryDetail.currencies[0].name}
                      currencySymbol={countryDetail.currencies[0].symbol}
                      />
                    ))}
                    
                </div>

                <h1 className={styles.wrapper}>Universities in {countryName}</h1>

                <div className={styles.container}>
                    {universities.map((university) => (
                      <UniCard
                          key={Math.random()}
                          name={university.name}
                          web_page={university.web_pages[0]}
                          domain={university.domains[0]}
                          country={university.country}
                      />
                    ))}
                </div>
                </>
            )}
        </div>
      );
}


export default UniList;
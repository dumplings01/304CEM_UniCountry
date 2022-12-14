import React from "react";
import styles from "../styles/components/CountryInfo.module.css";

function CountryInfo({country, capital, timezone, currency, currencySymbol}) {

    return (
        <div className={styles.countryInfo}>
            <h2>{country}'s Details</h2>
            <br></br>
            <h4>Country Capital: {capital}</h4>
            <h4>Country Timezone: {timezone}</h4>
            <h4>Country Currency: {currency}</h4>
            <h4>Country Currency Symbol: {currencySymbol}</h4>
        </div>
    )
}

export default CountryInfo;
import React from "react";
import Card from "../CountryCard/CountryCard";
import './CardsHome.css'

const CardsHome = ({allCountries}) => {
  return(
    <div>
      {allCountries?.map(c => {
        return(
          <Card  key={c.id}
                 id={c.id}
                 name={c.name}
                 flag_image={c.flag_image}
                 continent={c.continent}
                 population={c.population}
                 activities={c.activities}
                 />
        )
      })}
    </div>
  )
}

export default CardsHome
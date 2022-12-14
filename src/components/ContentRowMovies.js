import React from "react";
import Card from "./Card";

function ContentRowMovies() {


    let moviesInDB = {
        // titulo: 'Movies in Data Base',
        // color: 'primary', 
        // cifra: 21,
        // icono: 'clipboard-list'
    }

    let totalAwards = {
        titulo:'Total awards', 
        color:'success', 
        cifra: '79',
        icono:'award'
    }
    
    let actorsQuantity = {
        titulo:'Actors quantity' ,
        color:'warning',
        cifra:'49',
        icono:'user-check'
    }
    
    let cardProps = [moviesInDB, totalAwards, actorsQuantity];

    
  return (
    <div className="row">
        {cardProps.map((data, index) => {
            return <Card
            {...data} key={index}
            />
        })}
    </div>
  );
}

export default ContentRowMovies;

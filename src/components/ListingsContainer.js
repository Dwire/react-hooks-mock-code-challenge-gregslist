import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({goodsList, handleDelete}) {
  // goodsList = [{}, {}, {}]
  
  const cardList = goodsList.map(good => <ListingCard key={good.id} goodId={good.id} image={good.image} location={good.location} description={good.description} handleDelete={handleDelete}/> )
  // const cardList = goodsList.map(good => <ListingCard key={good.id} {...good} /> )
  // const cardList = goodsList.map(good => <ListingCard key={good.id} good={good} /> )
  // cardList = [<ListingCard /> , <ListingCard /> , <ListingCard /> ]



  return (
    <main>
      <ul className="cards">
        {cardList}
      </ul>
    </main>
  );
}

export default ListingsContainer;

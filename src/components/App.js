import React, { useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
// set state with data from database useState
  const [goodsList, setGoodsList] = useState([])
  const [searchTerm, setSearchTerm] = useState("")


// useEffect to make a fetch to date to set state
useEffect(() => {
  fetch("http://localhost:6001/listings")
  .then(res => res.json())
  .then(goods => {
    console.log(goods)
    setGoodsList(goods)
  })
}, [])

const handleSearchTerm = (term) => {
  setSearchTerm(term)
}


const handleDelete = (goodId) => {
  //  make a new array the excludes the good with a matching id
  const filteredArray = goodsList.filter(good => good.id !== goodId )

  //  Set goodsList with new array
  setGoodsList(filteredArray)
}

const filteredGoods = () => {
  if (searchTerm.length > 0) {
    return goodsList.filter(good => good.description.includes(searchTerm))
  }else {
    return goodsList
  }
} 

// console.log(goodsList);

  return (
    <div className="app">
      <Header handleSearchTerm={handleSearchTerm} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ListingsContainer goodsList={filteredGoods()} handleDelete={handleDelete} />
    </div>
  );
}

export default App;

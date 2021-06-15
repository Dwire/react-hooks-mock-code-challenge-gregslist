import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  // const [ogListings, setOgListings] = useState([])
  const [listings, setListings] = useState([])
  const [term, setTerm] = useState("")
  const [sort, setSort] = useState(false)

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => {
      setListings(data)
    })
  }, [])
  
  const handleSort = () => {
    setSort(sort => !sort)
  }

  const deleteListing = (listingId) => {
    let filteredArray = listings.filter(listing => listing.id !== listingId)

    setListings(filteredArray)
  }

  let filteredListings = listings.filter(listing => listing.description.toLowerCase().includes(term.toLowerCase()))

  const sortedList = () => {
    if (sort){
      return filteredListings.sort((a, b) => a.location.localeCompare(b.location))
    }else{
      return filteredListings
    }
  }

    // let sortedList = filteredListings.sort((list1, list2) => list1.location.localeCompare(list2.location))
  return (
    <div className="app">
      <Header term={term} setTerm={setTerm} handleSort={handleSort}/>
      <ListingsContainer listings={sortedList()} deleteListing={deleteListing} />
    </div>
  );
}

export default App;

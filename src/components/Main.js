import React from 'react'

import Home from './Home'
import data from '../data'



function App() {
  const [shoesData,setShoesData] = React.useState(data)

  const shoeEle = shoesData.map(function(item){
    
    return(<Home 
      name = {item.title}
      founded = {item.startDate}
      details = {item.description}
      img = {item.imageUrl}  
      />)
  })
  return (
    <div>

      {shoeEle}
   </div>
  );
}

export default App;

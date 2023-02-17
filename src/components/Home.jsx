import React from 'react'
import './styles/home.css'


const Home = (props) => {

    const [cart,setCart] = React.useState([])

    function addItem(){
        setCart(function(item){
            return([
                ...item,
                ` ${cart.length + 1} Item added to cart `
            ])
        })
    }

    console.log(cart)


  return (
      <div className='div-main' data-aos="fade-up"> 
          <div className='div-img'>
              <img src={props.img} alt='shoe'/>
          </div>


          <div className='div-secondary'>
                  <h1>{props.name}</h1>
                  <h4>{props.founded}</h4>
                  <p>{props.details}</p>
                <button onClick={addItem}>Add to Cart</button>
          </div>

      </div>
  )
}

export default Home
import React from 'react'
import './styles/contact.css'

const Contact = () => {


  const[data,setData] = React.useState({
    userName: "",
    email: "",
    phone : "",
    msg: ""
  })

  function handleChange(event){
    const {name,value} = event.target
    setData(function(item){
      return({
        ...item,
        [name]: value
      })
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(data)
  }


  return (
    <form onSubmit={handleSubmit}>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div class="app-contact">CONTACT INFO : shwetankas@gmail.com</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME" type='text' name='userName' value={data.userName} onChange={handleChange} />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL" type='text' name='email' value={data.email}  onChange={handleChange}/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="CONTACT NO" type='text' name='phone' value={data.phone}  onChange={handleChange}/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE" type='text' name='msg' value={data.msg}  onChange={handleChange}/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </form>

  )
}

export default Contact
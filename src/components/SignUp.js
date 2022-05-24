import React, {useState} from 'react'

export default function SignUp(props) {
  const [text, textUpdate] = useState("Enter text here");
  
const  handleClick=()=>{
    console.log("clicked")
    textUpdate('You have clicked on register')
  }
  const handleOnChange=(event)=>{
    console.log("s clicked")
    textUpdate(event.target.value)
  }
  return (
    <section className="vh-100 bg-image"
    >
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">{props.heading}</h2>
  
                <form>
  
                  <div className="form-outline mb-4">
                    <input type="text" value={text} onChange={handleOnChange} id="form3Example1cg" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form3Example4cg">Password</label>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                  </div>
  
                 
  
                  <div className="d-flex justify-content-center">
                    <button type="button"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={handleClick}>Register</button>
                  </div>
  
  
                </form>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}



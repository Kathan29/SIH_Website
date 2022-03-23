import React from 'react'
//import {Form,Button} from 'react-bootstrap'
//import image from './src/cool-background.png';
import {Link} from 'react-router-dom'

export default function Login() {
  return (
      <>
      {/* <div className='body'>
       <form>
    <div className="loginbody">
        <div className='container'>
            <h1 id="heading1">Login</h1>
        <label htmlhtmlFor="email" id="label"><b>Email</b></label>
            <input type="email" placeholder="Enter email-id" name="email" required/>

        <label htmlhtmlFor="psd" id="label"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psd" required/>
                    
        <button type="submit">Login</button>
        </div>

        <div className="container"  style={{backgroundColor:'#f1f1f1'}}>
        <button type="button" className="cancelbtn">Cancel</button>
        <span className="psd">Forgot <a href="/">password?</a></span>
        <label><a href="/SignUp">Sign Up</a></label>
        </div>
     </div>
     </form>
     </div>

     //  Reactbootstrap

   <h1 id='heading1'>Login</h1> 
<div className="bodyl">
    
    <div className="container">
    <div className="row abc">
        <div className="formwala col-lg-6 col-md-6  col-12">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            <Link to="/signup">Sign Up</Link>
        </Form.Group> 
        <Button variant="primary" type="submit" className='button'>
            Submit
        </Button>
        </Form>
        </div>
        </div>
</div>
</div>    



  */}

<section>
    <div className='bodyl'>
    <div className="container">
      <div className="row abc">
        <div className="formwala col-lg-6 col-md-6 col-12">
<form action="login.php" method="post">
    <h1 id='heading1'>Log In</h1>
    <div className="form-group">
    <label htmlFor="email" className="font-weight-bold">Enter email</label>
    <input type="email" name="email" className="form-control" placeholder="Enter email" id="email" />
  </div>
  <div className="form-group">
    <label htmlFor="password" className="font-weight-bold">Password</label>
    <input type="password" name="password" className="form-control" placeholder="Enter your password" id="password" />
  </div>
  <div className='form-group'>
  <button type="submit" name="btn_login" className="btn btn-warning font-weight-bold mx-3">Log in</button>
 <span id="abcd"> Not Registered yet ?<Link to="/signup"><span className='mx-3'>Sign Up</span></Link></span>
 <Link to="/dashboard"><span className='mx-3'>Dashboard</span></Link>
 </div>
</form>
        </div>

     
      
      </div>
    </div>
    </div>
  </section>



 
  </>
  )
}


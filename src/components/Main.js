import React from 'react';
//import {Modal, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Head from './Head';

export default function Main() {
  //   const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
      <>
      <div>
    <Head/>
        <main className="mt-5 pt-3">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card abcde text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem",borderRadius:"20px"}}>
  <div className="card-header fw-bold text-center">Oxygen-level</div>
  <div className="card-body">
    <h5 className="card-title text-center">95</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
  </div>
  <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card abcde text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem",borderRadius:"20px"}}>
  <div className="card-header fw-bold text-center">Ceiling motion sensor</div>
  <div className="card-body">
    <h5 className="card-title">Secondary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
  </div>
  <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card abcde text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem",borderRadius:"20px"}}>
  <div className="card-header fw-bold text-center">Motion Sensor</div>
  <div className="card-body">
    <h5 className="card-title">Secondary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
  </div>
</div>
<br/>
<div className="row">
      <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card abcde text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem",borderRadius:"20px"}}>
  <div className="card-header fw-bold text-center">Body temperature</div>
  <div className="card-body">
    <h5 className="card-title">Secondary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
  </div>
  <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card abcde text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem",borderRadius:"20px"}}>
  <div className="card-header fw-bold text-center">Motion sensor</div>
  <div className="card-body">
    <h5 className="card-title">Secondary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
  </div>
  <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card abcde text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem",borderRadius:"20px"}}>
  <div className="card-header fw-bold text-center">Body-Temperature</div>
  <div className="card-body">
    <h5 className="card-title">Secondary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
  </div>
</div>
<br/>
<div className="row">
      <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card abcde text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem",borderRadius:"20px"}}>
  <div className="card-header fw-bold text-center">Header</div>
  <div className="card-body">
    <h5 className="card-title">Secondary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
  </div>
  <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card abcde text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem",borderRadius:"20px"}}>
  <div className="card-header fw-bold text-center ">Header</div>
  <div className="card-body">
    <h5 className="card-title">Secondary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
  </div>
  <div className="col-md-4 col-lg-4 col-12 qw">
      <div className="card abcde text-white bg-dark mb-3my-3 mx-3" style={{maxWidth: "18rem",borderRadius:"20px"}}>
  <div className="card-header fw-bold text-center">Header</div>
  <div className="card-body">
    <h5 className="card-title">Secondary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
  </div>
</div>


 <Link className="btn btn-primary" to="/history" role="button" id='history'>History</Link>
  </div>
</main>

    </div>
    </>
  )
}

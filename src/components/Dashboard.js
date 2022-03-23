import React from 'react'
import Head from './Head'
import  './dashboardcss.css'

export default function Dashboard() {
  return (
    <div>
      <Head />
      <div className="container1">
<main className="mt-5 pt-3">
<div className="row">
  <div className="col-lg-6 col-md-6 col-12">
    <div className="card xyz">
      <div className="card-body bg-primary">
        <h2 className="card-title fw-bold text-center text-uppercase text-white">No of workers registered</h2>
        <p className="card-text text-center now"></p>
      </div>
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-12">
    <div className="card wl xyz">
      <div className="card-body">
        <h2 className="card-title fw-bold text-center text-uppercase text-white">warning levels</h2>
        <div className="wlt">
        <p className="fw-bold  text-uppercase text-white">Oxygen level must be:<i>90</i></p>
        <p className="fw-bold  text-uppercase text-white">Motion movement must be there within: <i>1hour</i></p>
        <p className="fw-bold  text-uppercase text-white">Heart-Beat must be between <i>60-100</i> beats per minute</p>
        <p className="fw-bold  text-uppercase text-white"></p>
        </div>
      </div>
    </div>
  </div>
</div>
</main>
</div>
    </div>
  )
}

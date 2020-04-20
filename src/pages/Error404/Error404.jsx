import React from 'react'
import { Link } from 'react-router-dom'
import Error404Img from 'components/Error404Img/Error404Img'

const Error404 = () => (
  <div className="container-fluid Error404">
    <div className="row align-items-center justify-content-center Error404__image">
      <Error404Img />
    </div>
    <div className="row align-items-center justify-content-center">
      <div className="col-12 text-center">
        <h2 className="Error404__header">Oops! That page isn&apos;t there.</h2>
        <div className="Error404__content">
          We&apos;re not sure how you got here, but let&apos;s get you back on
          track.
        </div>
        <Link to="/manage-my-data">
          <button className="Error404__cta" type="button">
            Manage My Data
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default Error404

import React from 'react'
import queryString from 'query-string'
import { getCurrentURL } from 'utilities/domain-detection/domain-detection'
import ManageMyDataForm from 'components/ManageMyDataForm/ManageMyDataForm'

const ManageMyData = ({ location }) => {
  const query = location.search ? queryString.parse(location.search) : ''
  const domain = getCurrentURL()

  return (
    <div>
      <div className="container-fluid ManageMyData">
        <div className="row">
          <div className="col-12">
            <h1>Manage My Data</h1>
            <p>
              Your privacy is important to us. Under our{' '}
              <a href={`https://${domain}/privacy`}>
                Privacy Policy &amp; Terms of Use
              </a>
              , you have the right to access, know about, and delete all of your
              personal information we collect within the past 12 months up to 2
              times within 12-month period. We will respond to your request
              promptly within a reasonable timeframe.
            </p>
            <p>
              We will need the following information provided below to verify
              your identity to make the request and confirm the personal
              information related to you.
            </p>
            <p>
              <strong>
                Please select your request and provide the following:{' '}
              </strong>
            </p>
          </div>
        </div>
      </div>
      <ManageMyDataForm query={query} />
    </div>
  )
}

export default ManageMyData

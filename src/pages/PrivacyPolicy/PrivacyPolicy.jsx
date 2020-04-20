import React from 'react'
import * as privacyData from 'static/content/privacyContent.json'
import * as privacyLinks from 'static/content/privacyLinks.json'
import Nav from 'components/Nav/Nav'
import Content from 'components/Content/Content'

const content = privacyData.default
const links = privacyLinks.default

const PrivacyPolicy = () => (
  <div className="container-fluid PrivacyPolicy">
    <div className="row">
      <div className="col-12 col-lg-3 p-lg-0">
        <Nav data={links} />
      </div>
      <div className="col-12 col-lg-9">
        <Content data={content} />
      </div>
    </div>
  </div>
)

export default PrivacyPolicy

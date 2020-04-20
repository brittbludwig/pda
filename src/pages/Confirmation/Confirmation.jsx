import React from 'react'
import {
  getCurrentWWW,
  getCurrentDomain
} from 'utilities/domain-detection/domain-detection'
import ThankYouImg from 'components/ThankYouImg/ThankYouImg'

const Confirmation = () => {
  const url = getCurrentWWW()
  const domain = getCurrentDomain()
  return (
    <div className="container-fluid Confirmation">
      <div className="row align-items-center justify-content-center Confirmation__image">
        <ThankYouImg />
      </div>
      <div className="row align-items-center justify-content-center">
        <div className="col-12 text-center">
          <h2 className="Confirmation__header">
            WE’LL GET THINGS STARTED FOR YOU
          </h2>
          <div className="Confirmation__content">
            We have received your request, we will get things started on our
            end. We will do our best to get your request within forty-five (45)
            days of its receipt. If we require more time (up to 90 days), we
            will inform you of the reason and extension period in writing. If
            you have any questions or concerns, feel free to reach out{' '}
            <a href={`mailto:privacy@${domain}.com`}>privacy@{domain}.com</a> or
            check out our <a href={`http://${url}/faq`}>FAQ</a>.
          </div>
          <a href="https://www.gobankingrates.com/category/credit/credit-score/">
            <button className="Confirmation__cta" type="button">
              Credit Score Resources
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Confirmation

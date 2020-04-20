import React from 'react'
import {
  getCurrentURL,
  getDomainPrefix,
  getFormattedDomainName
} from 'utilities/domain-detection/domain-detection'
import { footerLinks } from 'utilities/labels/labels'
import FooterLink from 'components/FooterLink/FooterLink'
import FooterDisclaimer from 'components/FooterDisclaimer/FooterDisclaimer'

const Footer = () => {
  const url = getCurrentURL()
  const www = getDomainPrefix()
  const domainName = getFormattedDomainName()

  return (
    <footer className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3 mt-3 mt-md-0">
            <FooterLink header label={domainName} key={domainName} />
            <FooterLink
              label={footerLinks.about}
              url={`https://${www}/about`}
            />
            <FooterLink label={footerLinks.faq} url={`https://${www}/faq`} />
            <FooterLink
              label={footerLinks.login}
              url={`https://${www}/memberlogin`}
            />
            <FooterLink
              label={footerLinks.contact}
              url={`https://${www}/contact`}
            />
          </div>
          <div className="col-6 col-md-3 mt-3 mt-md-0">
            <FooterLink header label={footerLinks.support} />
            <FooterLink
              label={footerLinks.unsubscribe}
              url={`https://${www}/unsubscribe`}
            />
            <FooterLink
              label={footerLinks.cancellation}
              url={`https://${www}/membercancel`}
            />
            <FooterLink
              label={footerLinks.manageMyData}
              url={`https://${url}/manage-my-data`}
            />
            <FooterLink
              label={footerLinks.doNotSell}
              url={`https://${url}/do-not-sell`}
            />
          </div>
          <div className="col-6 col-md-3 mt-3 mt-md-0">
            <FooterLink header label={footerLinks.legal} />
            <FooterLink
              label={footerLinks.privacy}
              url={`https://${url}/privacy`}
            />
            <FooterLink
              label={footerLinks.advertiserDisclosure}
              url={`https://${www}/advertiser-disclosure`}
            />
            <FooterLink
              label={footerLinks.security}
              url={`https://${www}/security`}
            />
          </div>
          <div className="col-6 col-md-3 mt-3 mt-md-0">
            <FooterLink header label={footerLinks.resources} />
            <FooterLink
              label={footerLinks.externalLink1}
              external
              url="https://www.externallink.com"
            />
            <FooterLink
              label={footerLinks.externalLink2}
              external
              url="https://www.externallink.com"
            />
            <FooterLink
              label={footerLinks.externalLink3}
              external
              url="https://www.externallink.com"
            />
          </div>
        </div>
        <div className="row">
          <FooterDisclaimer />
        </div>
      </div>
    </footer>
  )
}

export default Footer

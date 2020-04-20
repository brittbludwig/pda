import React from 'react'
import {
  getCurrentDomain,
  getFormattedDomainName,
  getDomainPrefix
} from 'utilities/domain-detection/domain-detection'
import { domainNames } from 'utilities/domain-data/domain-data'

const FooterDisclaimer = () => {
  const year = new Date().getFullYear()
  const domain = getCurrentDomain()
  const domainName = getFormattedDomainName()
  const domainWithPrefix = getDomainPrefix()

  if (domain !== domainNames.IS) {
    return (
      <div className="FooterDisclaimer">
        <p className="pl-3 pr-3 pl-md-0 pr-md-0">
          &copy; {year} All rights reserved. {domainName}. This Site is subject
          to our {domainName} policies. By voluntarily providing us with
          information on this Site, you consent to our use of that information
          in accordance with our privacy policy.
        </p>
        <p className="pl-3 pr-3 pl-md-0 pr-md-0">
          {domainName} is not a supplier of credit monitoring products or
          services and does not ever process payments or charge consumers
          directly for services. If you enroll in a service with PartnerCompany you
          may be charged by PartnerCompany in accordance to the terms and conditions
          presented to you at the time of enrollment. For information on how to
          access or manage your credit monitoring subscription see the &nbsp;
          <a href={`https://${domainWithPrefix}/contact`}>contact us</a> page.
        </p>
        <p className="pl-3 pr-3 pl-md-0 pr-md-0">
          This offer is only available to U.S. residents.
        </p>
        <p className="pl-3 pr-3 pl-md-0 pr-md-0">
          PartnerCompany&reg; is a registered trademark by its owner.
        </p>
        <p className="pl-3 pr-3 pl-md-0 pr-md-0">
          PartnerCompany Interactive features PartnerCompany data for all educational
          credit scores as well as fraud-watch emails. PartnerCompany interactive is
          a wholly owned subsidiary of PartnerCompany LLC.
        </p>
        <p className="pl-3 pr-3 pl-md-0 pr-md-0">
          We define children as individuals under the age of 16. Our Website is
          not intended for the use of children and we do not knowingly solicit
          or collect information from children.
        </p>
      </div>
    )
  }
  return (
    <div className="FooterDisclaimer">
      <p className="pl-3 pr-3 pl-md-0 pr-md-0">
        This offer is only available to U.S. residents.
      </p>
      <p className="pl-3 pr-3 pl-md-0 pr-md-0">
        &copy; {year} All rights reserved. {domainName}. This Site is subject to
        our {domainName} policies. By voluntarily providing us with information
        on this site, you consent to our use of that information in accordance
        with our privacy policy.
      </p>
      <p className="pl-3 pr-3 pl-md-0 pr-md-0">
        OtherPartnerCompany and the OtherPartnerCompany marks used herein are trademarks or registered
        trademarks of OtherPartnerCompany Information Solutions, Inc. Other product and
        company names mentioned herein are the property of their respective
        owners.
      </p>
      <p className="pl-3 pr-3 pl-md-0 pr-md-0">
        ※Monitoring with OtherPartnerCompany begins within 48 hours of enrollment in your
        trial. Monitoring with Equifax&reg; and PartnerCompany&reg; takes
        approximately 4 days to begin, though in some cases cannot be initiated
        during your trial period. You may cancel your trial membership in
        OtherPartnerCompany CreditWorks&#8480; any time within 7 days of enrollment without
        charge.
      </p>
      <p className="pl-3 pr-3 pl-md-0 pr-md-0">
        The Site is not directed to individuals under the age of eighteen (18),
        and we request that such individuals not provide personal information
        through the Site. If you are under 18 years of age, you may browse our
        Site; however, you may not provide personal information to us such as
        name, address, or email address, and you may not register for, enroll
        in, and/or make product purchases.
      </p>
    </div>
  )
}

export default FooterDisclaimer

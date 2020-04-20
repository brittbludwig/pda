import React from 'react'
import CCTLogo from 'components/CCTLogo/CCTLogo'
import GFCLogo from 'components/GFCLogo/GFCLogo'
import GoIPLogo from 'components/GoIPLogo/GoIPLogo'
import ISLogo from 'components/ISLogo/ISLogo'
import YSOLogo from 'components/YSOLogo/YSOLogo'
import {
  getCurrentDomain,
  getCurrentWWW
} from 'utilities/domain-detection/domain-detection'
import { domainNames } from 'utilities/domain-data/domain-data'

const Logo = () => {
  const domain = getCurrentDomain()
  switch (domain) {
    case domainNames.YSO:
      return <YSOLogo />
    case domainNames.CCT:
      return <CCTLogo />
    case domainNames.GOIP:
      return <GoIPLogo />
    case domainNames.IS:
      return <ISLogo />
    default:
      return <GFCLogo />
  }
}

const Header = () => {
  const url = getCurrentWWW()
  return (
    <header className="Header">
      <div className="container-fluid Header__wrap">
        <a
          className="Header__link"
          href={`https://${url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo />
        </a>
      </div>
    </header>
  )
}
export default Header

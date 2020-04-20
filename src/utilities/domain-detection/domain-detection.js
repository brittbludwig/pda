import queryString from 'query-string'
import { domainNames } from 'utilities/domain-data/domain-data'

export const getCurrentDomain = () => {
  // switch template/theme based on query string for testing
  const page = window.location.search
    ? queryString.parse(window.location.search)
    : ''
  const domain = window.location.hostname.split('.')

  if (domain[0] === 'localhost' && domainNames[page.view]) {
    domain[0] = domainNames[page.view]
  }
  if (domain[0] === 'localhost' && !domainNames[page.view]) {
    domain[0] = domainNames.GFC
  }
  if (domain[0] === 'stage-member' && domainNames[page.view]) {
    domain[1] = domainNames[page.view]
  }

  return domain.length >= 3 ? domain[1] : domain[0]
}

export const getCurrentSubDomain = () => {
  const domain = window.location.hostname.split('.')
  if (domain[0] === 'localhost') {
    domain[0] = 'stage-member'
  }
  return domain[0]
}

export const getCurrentURL = () => {
  return `${getCurrentSubDomain()}.${getCurrentDomain()}.com`
}

export const getCurrentWWW = () => {
  return `www.${getCurrentDomain()}.com`
}

export const getDomainPrefix = () => {
  const domain = window.location.hostname.split('.')

  if (domain[0] === 'localhost' || domain[0] === 'stage-member') {
    domain[0] = 'stage-'
  } else {
    domain[0] = ''
  }
  return `${domain[0]}www.${getCurrentDomain()}.com`
}

export const getFormattedDomainName = () => {
  let domain = getCurrentDomain()
  switch (domain) {
    case domainNames.YSO:
      domain = 'YSO'
      break
    case domainNames.CCT:
      domain = 'CCT'
      break
    case domainNames.GOIP:
      domain = 'GOIP'
      break
    case domainNames.IS:
      domain = 'IS'
      break
    default:
      domain = 'GFC'
      break
  }
  return `${domain}.com`
}

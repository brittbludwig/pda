import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import TagManager from 'react-gtm-module'
import { metaData } from 'utilities/domain-data/domain-data'
import { getCurrentDomain } from 'utilities/domain-detection/domain-detection'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Error404 from 'pages/Error404/Error404'
import ManageMyData from 'pages/ManageMyData/ManageMyData'
import PrivacyPolicy from 'pages/PrivacyPolicy/PrivacyPolicy'
import Confirmation from 'pages/Confirmation/Confirmation'

const App = props => {
  const {
    location: { pathname }
  } = props

  useEffect(() => {
    const domain = getCurrentDomain()
    const tagManagerArgs = {
      gtmId: metaData[domain].gtmId
    }
    const getPageTitle = () => {
      switch (pathname) {
        case '/':
        case '/privacy':
        case '/privacy/':
          return metaData[domain].titles.privacy
        case '/manage-my-data':
        case '/manage-my-data/':
          return metaData[domain].titles.manageMyData
        case '/thank-you':
        case '/thank-you/':
          return metaData[domain].titles.thankYou
        default:
          return metaData[domain].titles.error
      }
    }

    document.title = getPageTitle()
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', metaData[domain].description)
    document
      .querySelector("link[rel*='icon']")
      .setAttribute('href', `/favicon/${metaData[domain].favicon}`)
    TagManager.initialize(tagManagerArgs)
  }, [pathname])
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={PrivacyPolicy} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/manage-my-data" component={ManageMyData} />
        <Route path="/thank-you" component={Confirmation} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App

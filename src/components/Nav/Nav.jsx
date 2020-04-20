import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Collapse, Navbar, NavbarToggler } from 'reactstrap'
import NavLink from 'components/NavLink/NavLink'
import { getCurrentWWW } from 'utilities/domain-detection/domain-detection'

let key = 1

const renderThirdLevelLinks = (data, toggleNav) => {
  key += 1
  const thirdLevelLinks = []
  data.forEach(sublink => {
    thirdLevelLinks.push(
      <NavLink
        type="third"
        name={sublink.name}
        anchor={sublink.anchor}
        key={sublink.key}
        clicked={toggleNav}
      />
    )
  })

  return (
    <ul className="Nav__third-level" key={`third-links-${key}`}>
      {thirdLevelLinks}
    </ul>
  )
}

const renderSubNavLinks = (data, isLinksOpen, toggleNav) => {
  const secondaryLinks = []
  key += 1
  data.forEach(sublink => {
    if (!sublink.anchor) {
      secondaryLinks.push(
        <li className="NavLink NavLink_secondary" key={sublink.key}>
          <span>{sublink.name}</span>
        </li>
      )
    } else {
      secondaryLinks.push(
        <NavLink
          type="secondary"
          name={sublink.name}
          anchor={sublink.anchor}
          key={sublink.key}
          clicked={toggleNav}
        />
      )
    }
    if (sublink.sublinks && sublink.subnav === true) {
      secondaryLinks.push(renderThirdLevelLinks(sublink.sublinks, toggleNav))
    }
  })

  return (
    <Collapse isOpen={isLinksOpen} key={`secondary-links-${key}`}>
      <ul>{secondaryLinks}</ul>
    </Collapse>
  )
}

const Nav = ({ data }) => {
  const [isLinksOpen, setIsLinksOpen] = useState(false)
  const toggleLinks = () => setIsLinksOpen(!isLinksOpen)

  const [isNavOpen, setIsNavOpen] = useState(false)
  const toggleNav = () => {
    if (window.innerWidth < 992) {
      if (isLinksOpen && isNavOpen) {
        toggleLinks()
        setTimeout(() => {
          setIsNavOpen(!isNavOpen)
        }, 500)
      } else {
        setIsNavOpen(!isNavOpen)
      }
    }
  }

  useEffect(() => {
    const header = document.getElementById('navbar')
    const sticky = header.offsetTop
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        header.classList.add('Nav--fixed')
      } else {
        header.classList.remove('Nav--fixed')
      }
    })
    return () => {
      window.removeEventListener('scroll', scrollCallBack)
    }
  }, [])

  const template = []
  const domain = getCurrentWWW()

  data.forEach(link => {
    if (link.sublinks && link.subnav === true) {
      template.push(
        <li
          className="Nav__section NavLink NavLink__primary"
          onClick={toggleLinks}
          key={link.key}
        >
          <span className="Nav__section-title">{link.name}</span>
          <i
            className={`fa ${
              isLinksOpen ? 'fa-angle-up' : 'fa-angle-down'
            } Nav__icon`}
            aria-hidden="true"
          />
        </li>
      )
      template.push(renderSubNavLinks(link.sublinks, isLinksOpen, toggleNav))
    } else if (link.url) {
      template.push(
        <li className="NavLink NavLink__primary" key={link.key}>
          <a href={`https://${domain}${link.url}`}>{link.name}</a>
        </li>
      )
    } else {
      template.push(
        <NavLink
          type="primary"
          key={link.key}
          name={link.name}
          anchor={link.anchor}
          clicked={toggleNav}
        />
      )
    }
  })

  return (
    <Navbar className="Nav" light expand="lg" id="navbar">
      <div className="Nav__menu">
        <h2 className="Nav__header">Legal Center</h2>
        <NavbarToggler onClick={toggleNav}>
          <div
            className={
              isNavOpen
                ? 'Nav__close-icon Nav__close-icon--open'
                : 'Nav__close-icon'
            }
          >
            <span />
            <span />
            <span />
          </div>
        </NavbarToggler>
      </div>
      <Collapse isOpen={isNavOpen} navbar>
        <div className="Nav__link-wrap">
          <div
            className={
              isNavOpen ? 'Nav__links  Nav__links--open' : 'Nav__links'
            }
          >
            <ul>{template}</ul>
          </div>
        </div>
      </Collapse>
    </Navbar>
  )
}

Nav.defaultProps = {
  data: []
}

Nav.propTypes = {
  data: PropTypes.array
}

export default Nav

import React from 'react'
import PropTypes from 'prop-types'
import { HashLink as Link } from 'react-router-hash-link'

const getOffset = () => (window.innerWidth < 992 ? 70 : -80)

const scrollWithOffset = el => {
  const offset = getOffset()
  const elementPosition = el.offsetTop - offset

  window.scroll({
    top: elementPosition,
    left: 0,
    behavior: 'smooth'
  })
}

const NavLink = ({ name, anchor, type, clicked }) => {
  return (
    <li className={`NavLink NavLink__${type}`} key={anchor}>
      <Link
        smooth
        to={`#${anchor}`}
        data-section={`${anchor}`}
        scroll={el => scrollWithOffset(el)}
        onClick={clicked}
      >
        {name}
      </Link>
    </li>
  )
}

NavLink.defaultProps = {
  name: '',
  type: '',
  anchor: '',
  clicked: () => {}
}

NavLink.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  anchor: PropTypes.string,
  clicked: PropTypes.func
}

export default NavLink

import React from 'react'
import PropTypes from 'prop-types'

const FooterLink = ({ header, label, url, external }) => {
  const linkTemplate = []

  if (header) {
    linkTemplate.push(
      <span className="FooterLink__link-header" key={label}>
        {label}
      </span>
    )
  }
  if (external) {
    linkTemplate.push(
      <span className="FooterLink__link" key={label}>
        <a
          href={url}
          className="FooterLink__link-text"
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      </span>
    )
  }
  if (url && !external) {
    linkTemplate.push(
      <span className="FooterLink__link" key={label}>
        <a href={url} className="FooterLink__link-text">
          {label}
        </a>
      </span>
    )
  }

  return linkTemplate
}

FooterLink.defaultProps = {
  header: false,
  label: '',
  url: ''
}

FooterLink.propTypes = {
  header: PropTypes.bool,
  label: PropTypes.string,
  url: PropTypes.string
}

export default FooterLink

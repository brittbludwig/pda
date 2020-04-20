import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Interweave from 'interweave'
import {
  getCurrentDomain,
  getCurrentURL,
  getFormattedDomainName,
  getDomainPrefix
} from 'utilities/domain-detection/domain-detection'

const ContentBlock = ({ name, type, anchor, content }) => {
  const [formattedContent, UpdateContent] = useState('')

  useEffect(() => {
    const domain = getCurrentDomain()
    const subdomain = getCurrentURL()
    const domainNameStyled = getFormattedDomainName()
    const domainWithPrefix = getDomainPrefix()

    let contentToStr = JSON.stringify(content)
    contentToStr = contentToStr.replace(/DOMAIN_NAME_STYLED/g, domainNameStyled)
    contentToStr = contentToStr.replace(/SUBDOMAIN_URL/g, subdomain)
    contentToStr = contentToStr.replace(/DOMAIN_PREFIX_URL/g, domainWithPrefix)
    contentToStr = contentToStr.replace(/DOMAIN_URL/g, `${domain}.com`)
    contentToStr = JSON.parse(contentToStr)

    UpdateContent(contentToStr)
  }, [content])

  return (
    <div className="ContentBlock" id={anchor}>
      <h2 className={`ContentBlock__${type}`}>{name}</h2>
      <Interweave content={formattedContent} />
    </div>
  )
}

ContentBlock.defaultProps = {
  name: '',
  type: '',
  anchor: '',
  content: ''
}

ContentBlock.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  anchor: PropTypes.string,
  content: PropTypes.string
}

export default ContentBlock

import React from 'react'
import PropTypes from 'prop-types'
import ContentBlock from 'components/ContentBlock/ContentBlock'

const Content = ({ data }) => {
  const template = []
  data.forEach(block => {
    if (block.anchor) {
      template.push(
        <ContentBlock
          type="primary"
          key={`content-primary-${block.anchor}`}
          name={block.name}
          anchor={block.anchor}
          content={block.content}
        />
      )
      if (block.sublinks) {
        block.sublinks.forEach(subBlock => {
          if (subBlock.anchor) {
            template.push(
              <ContentBlock
                type="secondary"
                key={`content-secondary-${subBlock.anchor}`}
                name={subBlock.name}
                anchor={subBlock.anchor}
                content={subBlock.content}
              />
            )
          }
          if (subBlock.sublinks) {
            subBlock.sublinks.forEach(thirdBlock => {
              template.push(
                <ContentBlock
                  type="third-level"
                  key={`content-third-${thirdBlock.anchor}`}
                  name={thirdBlock.name}
                  anchor={thirdBlock.anchor}
                  content={thirdBlock.content}
                />
              )
            })
          }
        })
      }
    }
  })
  return <div className="Content">{template}</div>
}

Content.defaultProps = {
  data: []
}

Content.propTypes = {
  data: PropTypes.array
}

export default Content

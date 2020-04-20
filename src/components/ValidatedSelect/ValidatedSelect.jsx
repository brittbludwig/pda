import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const ValidatedSelect = ({ value, onChange, options }) => {
  const handleChange = selectedValue => onChange('action', selectedValue)

  return (
    <Select
      onChange={handleChange}
      value={value}
      options={options}
      isSearchable={false}
      classNamePrefix="ValidatedSelect"
    />
  )
}

ValidatedSelect.defaultProps = {
  value: {},
  onChange: () => {},
  options: []
}

ValidatedSelect.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  options: PropTypes.array
}

export default ValidatedSelect

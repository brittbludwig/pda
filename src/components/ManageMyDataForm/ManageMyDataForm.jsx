import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import MaskedInput from 'react-text-mask'
import Recaptcha from 'react-recaptcha'
import { getCurrentSubDomain } from 'utilities/domain-detection/domain-detection'
import { formLabels } from 'utilities/labels/labels'
import formikEnhancer from 'components/ManageMyDataForm/ManageMyDataFormValidation'
import ValidatedSelect from 'components/ValidatedSelect/ValidatedSelect'

const dropdownItems = [
  {
    value: 'seeMyData',
    label: 'See my personal data'
  },
  {
    value: 'doNotSell',
    label: 'Not sell my personal information'
  },
  {
    value: 'deleteMyData',
    label: 'Delete my personal data'
  }
]
const ManageMyDataForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
    query
  } = props

  useEffect(() => {
    const updateDropdown = () =>
      query.action === 'do_not_sell'
        ? setFieldValue('action', dropdownItems[1])
        : null

    updateDropdown()
  }, [query, setFieldValue])

  const areFieldsRequired = values.action.value !== 'doNotSell'
  const isProduction = getCurrentSubDomain() === 'member'
  const hideRecaptcha = query.automation === 'yes' && !isProduction

  return (
    <div className="container-fluid ManageMyDataForm">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <div className="row">
            <div className="col-12 col-md-6">
              <div
                className={`ManageMyDataForm__dropdown ${
                  errors.action && touched.action
                    ? 'ManageMyDataForm__error'
                    : ''
                }`}
              >
                <Label for="dropdown">{formLabels.action}</Label>
                <ValidatedSelect
                  value={values.action}
                  onChange={setFieldValue}
                  error={errors.action}
                  touched={touched.action}
                  options={dropdownItems}
                />
                {errors.action && touched.action && (
                  <div className="ManageMyDataForm__error-text">
                    {errors.action.label}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className={`col-12 col-md-6 ManageMyDataForm__field-wrap ${
                errors.fname && touched.fname ? 'ManageMyDataForm__error' : ''
              }`}
            >
              <Label for="fname">{formLabels.fname}</Label>
              <Input
                type="text"
                name="fname"
                id="fname"
                placeholder={areFieldsRequired ? 'Required' : ''}
                className="ManageMyDataForm__field"
                onChange={handleChange}
                value={values.fname}
              />
              <i className="fa fa-times ManageMyDataForm__icon" />
              {errors.fname && touched.fname && (
                <div className="ManageMyDataForm__error-text">
                  {errors.fname}
                </div>
              )}
            </div>
            <div
              className={`col-12 col-md-6 ManageMyDataForm__field-wrap ${
                errors.lname && touched.lname ? 'ManageMyDataForm__error' : ''
              }`}
            >
              <Label for="lname">{formLabels.lname}</Label>
              <Input
                type="text"
                name="lname"
                id="lname"
                placeholder={areFieldsRequired ? 'Required' : ''}
                className="ManageMyDataForm__field"
                onChange={handleChange}
                value={values.lname}
              />
              <i className="fa fa-times ManageMyDataForm__icon" />
              {errors.lname && touched.lname && (
                <div className="ManageMyDataForm__error-text">
                  {errors.lname}
                </div>
              )}
            </div>
            <div
              className={`col-12 col-md-6 ManageMyDataForm__field-wrap ${
                errors.email && touched.email ? 'ManageMyDataForm__error' : ''
              }`}
            >
              <Label for="email">{formLabels.email}</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Required"
                className="ManageMyDataForm__field"
                onChange={handleChange}
                value={values.email}
              />
              <i className="fa fa-times ManageMyDataForm__icon" />
              {errors.email && touched.email && (
                <div className="ManageMyDataForm__error-text">
                  {errors.email}
                </div>
              )}
            </div>
            <div
              className={`col-12 col-md-6 ManageMyDataForm__field-wrap ${
                errors.phone && touched.phone ? 'ManageMyDataForm__error' : ''
              }`}
            >
              <Label for="phone">{formLabels.phone}</Label>
              <MaskedInput
                type="tel"
                name="phone"
                id="phone"
                placeholder={areFieldsRequired ? 'Required' : ''}
                mask={[
                  '(',
                  /[1-9]/,
                  /\d/,
                  /\d/,
                  ')',
                  ' ',
                  /\d/,
                  /\d/,
                  /\d/,
                  '-',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/
                ]}
                className="form-control ManageMyDataForm__field"
                onChange={handleChange}
                value={values.phone}
              />
              <i className="fa fa-times ManageMyDataForm__icon" />
              {errors.phone && touched.phone && (
                <div className="ManageMyDataForm__error-text">
                  {errors.phone}
                </div>
              )}
            </div>
            <div className="col-12 ManageMyDataForm__recaptcha">
              {!hideRecaptcha ? (
                <Recaptcha
                  sitekey="6Lex4coUAAAAAKqzSIMSCHhbKOKPpzmJ4MXFs8WU"
                  render="explicit"
                  verifyCallback={response => {
                    setFieldValue('recaptcha', response)
                  }}
                  onloadCallback={() => {}}
                />
              ) : null}

              {errors.recaptcha && touched.recaptcha && (
                <div className="ManageMyDataForm__error-text">
                  {errors.recaptcha}
                </div>
              )}
            </div>
            <div className="col-12">
              <button className="ManageMyDataForm__cta" type="submit">
                Submit
              </button>
            </div>
          </div>
        </FormGroup>
      </Form>
    </div>
  )
}

ManageMyDataForm.defaultProps = {
  values: {},
  touched: {},
  errors: {},
  handleChange: () => {},
  handleSubmit: () => {},
  setFieldValue: () => {}
}

ManageMyDataForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  setFieldValue: PropTypes.func
}

export default withRouter(formikEnhancer(ManageMyDataForm))

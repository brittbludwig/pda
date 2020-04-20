import { withFormik } from 'formik'
import * as Yup from 'yup'
import queryString from 'query-string'
import { getCurrentSubDomain } from 'utilities/domain-detection/domain-detection'
import { phoneRegExp } from 'utilities/form-validation/form-validation'
import { sendFormData } from 'utilities/services/services'

const query = window.location.search
  ? queryString.parse(window.location.search)
  : ''

const isProduction = getCurrentSubDomain() === 'member'

const withRecaptcha = {
  fname: Yup.string().when('action', (action, schema) => {
    if (action.value !== 'doNotSell') {
      return schema.required('Please enter your first name')
    }
    return schema.notRequired()
  }),
  lname: Yup.string().when('action', (action, schema) => {
    if (action.value !== 'doNotSell') {
      return schema.required('Please enter your last name')
    }
    return schema.notRequired()
  }),
  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter your email address'),
  phone: Yup.string().when('action', (action, schema) => {
    if (action.value !== 'doNotSell') {
      return schema
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Please enter your phone number')
    }
    return schema.notRequired()
  }),
  action: Yup.object().shape({
    label: Yup.string().required(
      'Oops…looks like you forgot to make a selection'
    ),
    value: Yup.string().required()
  }),
  recaptcha: Yup.string().required('Please verify you are human')
}

const withoutRecaptcha = {
  fname: Yup.string().when('action', (action, schema) => {
    if (action.value !== 'doNotSell') {
      return schema.required('Please enter your first name')
    }
    return schema.notRequired()
  }),
  lname: Yup.string().when('action', (action, schema) => {
    if (action.value !== 'doNotSell') {
      return schema.required('Please enter your last name')
    }
    return schema.notRequired()
  }),
  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter your email address'),
  phone: Yup.string().when('action', (action, schema) => {
    if (action.value !== 'doNotSell') {
      return schema
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Please enter your phone number')
    }
    return schema.notRequired()
  }),
  action: Yup.object().shape({
    label: Yup.string().required(
      'Oops…looks like you forgot to make a selection'
    ),
    value: Yup.string().required()
  })
}

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape(
    query.automation === 'yes' && !isProduction
      ? withoutRecaptcha
      : withRecaptcha
  ),
  // eslint-disable-next-line no-unused-vars
  mapPropsToValues: props => ({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    action: {
      value: '',
      label: ''
    },
    recaptcha: ''
  }),
  handleSubmit: (values, { resetForm, props }) => {
    const payload = {
      ...values,
      action: values.action
    }
    sendFormData(payload)
      .then(response => {
        resetForm()
        if (response.status === 200) {
          props.history.push('/thank-you')
        }
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log('error', error)
      })
  }
})

export default formikEnhancer

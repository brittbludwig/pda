import axios from 'axios'
import { getCurrentURL } from 'utilities/domain-detection/domain-detection'

export const sendFormData = values => {
  const url = getCurrentURL()
  const body = {
    action: values.action.value,
    email: values.email,
    fname: values.fname,
    lname: values.lname,
    phone: values.phone
  }

  return axios.post(`https://${url}/request`, body)
}

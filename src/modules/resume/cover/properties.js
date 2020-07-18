import propertyTypes from '@global-config/propertyTypes'

const theme = {
  key: 'skyBlue',
  name: "Sky blue",
  color: 'rgb(60.1%, 80.5%, 100%)',
  contrast: 'black'
}

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: theme,
    required: true
  },
  name: {
    name: 'Name',
    type: propertyTypes.STRING,
    value: 'John Doe',
    required: true
  },
  designation: {
    name: 'Designation',
    type: propertyTypes.STRING,
    value: 'Software engineer',
    required: false
  },
  company: {
    name: 'Company',
    type: propertyTypes.STRING,
    value: 'Microsoft',
    required: false
  },
  emailId: {
    name: 'Email ID',
    type: propertyTypes.EMAIL,
    value: 'John.Doe@xyz.com',
    required: true
  },
  phoneNo: {
    name: 'Phone No',
    type: propertyTypes.NUMBER,
    value: '9999999999',
    required: true
  },
};

export default properties;
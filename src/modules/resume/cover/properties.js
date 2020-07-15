import propertyTypes from '@global-config/propertyTypes'

const theme = {
  name: "Sky blue",
  color: 'rgb(70.9%, 83.1%, 87.8%)',
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
    value: 'Manoj Satishkumar',
    required: true
  },
  designation: {
    name: 'Designation',
    type: propertyTypes.STRING,
    value: 'Senior software engineer',
    required: false
  },
  company: {
    name: 'Company',
    type: propertyTypes.STRING,
    value: 'Walmart',
    required: false
  },
  emailId: {
    name: 'Email ID',
    type: propertyTypes.EMAIL,
    value: 'manoj.satishkumar@xyz.com',
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
import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.dark.iceWhite,
    required: true
  },
  address: {
    name: 'Address',
    type: propertyTypes.STRING,
    value: 'New Delhi, India',
    required: false
  },
  phone: {
    name: 'Phone',
    type: propertyTypes.STRING,
    value: '+91 1234567890',
    required: true
  },
  email: {
    name: 'Email',
    type: propertyTypes.EMAIL,
    value: 'john@doe.com',
    required: true
  },
  linkedin: {
    name: 'Linkedin',
    type: propertyTypes.URL,
    value: 'https://www.linkedin.com/company/msk-documents/',
    required: false
  },
  github: {
    name: 'Github',
    type: propertyTypes.URL,
    value: 'https://github.com/ManojSatishkumar/msk-components',
    required: false
  }
};

export default properties;

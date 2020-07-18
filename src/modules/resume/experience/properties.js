import propertyTypes from '@global-config/propertyTypes'

const properties = {
  headlineText: {
    name: 'Headline text',
    type: propertyTypes.STRING_MULTI_LINE,
    value: 'Experience',
    required: true
  },
  experience: {
    name: 'Experience',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'Company Name',
        type: propertyTypes.STRING,
        value: 'Microsoft',
        required: true
      }
    ]
  }
};

export default properties;
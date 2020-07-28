import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.light.iceWhite,
    required: true
  },
  headlineText: {
    name: 'Headline text',
    type: propertyTypes.STRING,
    value: 'Certifications',
    required: true
  },
  certifications: {
    name: 'Certifications',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'Certificate',
        type: propertyTypes.OBJECT,
        required: true,
        value: {
          type: propertyTypes.OBJECT,
          name: {
            name: 'Name',
            type: propertyTypes.STRING,
            value: 'Certificate 1',
            required: true
          },
          organization: {
            name: 'Issuing Organization',
            type: propertyTypes.STRING,
            value: 'Organization 1',
            required: true
          },
          issuedDate: {
            name: 'Issued Date',
            type: propertyTypes.DATE,
            value: 'Issued Date',
            required: true
          },
          expirationDate: {
            name: 'Expiration Date',
            type: propertyTypes.DATE,
            value: 'Expiration Date',
            required: false
          },
          url: {
            name: 'Certificate URL',
            type: propertyTypes.URL,
            value: 'https://test-certificate.com',
            required: true
          }
        }
      }
    ],
    required: true
  }
};

export default properties;
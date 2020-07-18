import propertyTypes from '@global-config/propertyTypes'

const properties = {
  headlineText: {
    name: 'Headline text',
    type: propertyTypes.STRING,
    value: 'Introduction',
    required: true
  },
  paragraphs: {
    name: 'Paragraph',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'Paragraph text',
        type: propertyTypes.RICH_TEXT,
        value: 'I am currently working as a Software engineer @Microsoft. I take care of Office 365 web applications and lead the O365 team',
        required: true
      },
      {
        name: 'Paragraph text',
        type: propertyTypes.RICH_TEXT,
        value: 'I am focused in React.js and have chosen Javascript as my career path',
        required: true
      }
    ],
    required: true
  }
};

export default properties;
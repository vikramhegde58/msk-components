import propertyTypes from '@global-config/propertyTypes'

const properties = {
  headlineText: {
    name: 'Headline text',
    type: propertyTypes.STRING_MULTI_LINE,
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
        value: 'Ever since childhood, I always loved computers and how software defines the experiences one can have with it.',
        required: true
      },
      {
        name: 'Paragraph text',
        type: propertyTypes.RICH_TEXT,
        value: 'I will continue to work in CS',
        required: true
      }
    ],
    required: true
  }
};

export default properties;
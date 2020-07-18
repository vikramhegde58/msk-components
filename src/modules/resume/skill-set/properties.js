import propertyTypes from '@global-config/propertyTypes'
import themes from '@msk-themes'

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.light.skyBlue,
    required: true
  },
  headlineText: {
    name: 'Headline text',
    type: propertyTypes.STRING_MULTI_LINE,
    value: 'Skill set',
    required: true
  },
};

export default properties;
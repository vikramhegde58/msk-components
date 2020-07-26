import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';
import mskPropertyTypes from 'msk-property-types';

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.dark.midnightBlue,
    required: true
  },
  headlineText: {
    name: 'Headline text',
    type: propertyTypes.STRING,
    value: 'Links',
    required: true
  },
  links: {
      name: 'Links',
      type: mskPropertyTypes.ARRAY,
      value: [
          {
              name: 'link',
              type: propertyTypes.STRING,
              value: 'https://github.com/username',
              required: true
          },
          {
            name: 'link',
            type: propertyTypes.STRING,
            value: 'https://linkedIn.com/username',
            required: true
        },
        {
            name: 'link',
            type: propertyTypes.STRING,
            value: 'https://codechef.com/username',
            required: true
        }
      ]
  }
};

export default properties;
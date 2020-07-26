// Export the component in this file to display in the preview

import metadata from './metadata'

import Cover from './cover'
import Introduction from './introduction'
import Experience from './experience'
import Projects from './projects'
import Skillset from './skill-set'
import Links from './links';

const components = {
  Cover,
  Introduction,
  Experience,
  Projects,
  Skillset,
  Links
}

const Resume = {
  metadata,
  components
}

export default Resume;
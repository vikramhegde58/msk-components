// Export the component in this file to display in the preview

import metadata from './metadata'

import Cover from './cover'
import Introduction from './introduction'
import Experience from './experience'
import Education from './education'
import Projects from './projects'
import Skillset from './skill-set'
import Certifications from './certifications'
import SocialLinks from './social-links';

const components = {
  Cover,
  Introduction,
  Experience,
  Education,
  Projects,
  Skillset,
  Certifications,
  SocialLinks
}

const Resume = {
  metadata,
  components
}

export default Resume;


# Remove components from frontend
cd /Users/m0s05eg/github/personal/msk-documents-frontend/src/modules/resume/components/secondary;
rm -rf *;

# Build all components

# Resume

# Introduction
cd /Users/m0s05eg/github/personal/msk-components/src/modules/resume/introduction;
npm link 'msk-themes';
npm run build;
cp /Users/m0s05eg/github/personal/msk-components/src/modules/resume/introduction/dist/introduction.js /Users/m0s05eg/github/personal/msk-documents-frontend/src/modules/resume/components/secondary;

# Cover
cd /Users/m0s05eg/github/personal/msk-components/src/modules/resume/cover;
npm link 'msk-themes';
npm run build;
cp /Users/m0s05eg/github/personal/msk-components/src/modules/resume/cover/dist/cover.js /Users/m0s05eg/github/personal/msk-documents-frontend/src/modules/resume/components/secondary;

# Experience
cd /Users/m0s05eg/github/personal/msk-components/src/modules/resume/experience;
npm link 'msk-themes';
npm run build;
cp /Users/m0s05eg/github/personal/msk-components/src/modules/resume/experience/dist/experience.js /Users/m0s05eg/github/personal/msk-documents-frontend/src/modules/resume/components/secondary;

# Projects
cd /Users/m0s05eg/github/personal/msk-components/src/modules/resume/projects;
npm link 'msk-themes';
npm run build;
cp /Users/m0s05eg/github/personal/msk-components/src/modules/resume/projects/dist/projects.js /Users/m0s05eg/github/personal/msk-documents-frontend/src/modules/resume/components/secondary;

# Skill set
cd /Users/m0s05eg/github/personal/msk-components/src/modules/resume/skill-set;
npm link 'msk-themes';
npm run build;
cp /Users/m0s05eg/github/personal/msk-components/src/modules/resume/skill-set/dist/skill-set.js /Users/m0s05eg/github/personal/msk-documents-frontend/src/modules/resume/components/secondary;




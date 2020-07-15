

# Remove components from frontend
cd /Users/m0s05eg/github/personal/msk-documents-frontend/src/modules/resume/components/secondary;
rm -rf *;

# Build all components

# Resume

# Introduction
cd /Users/m0s05eg/github/personal/msk-components/src/modules/resume/introduction;
npm run build;
cp /Users/m0s05eg/github/personal/msk-components/src/modules/resume/introduction/dist/introduction.js /Users/m0s05eg/github/personal/msk-documents-frontend/src/modules/resume/components/secondary;

# Cover
cd /Users/m0s05eg/github/personal/msk-components/src/modules/resume/cover;
npm run build;
cp /Users/m0s05eg/github/personal/msk-components/src/modules/resume/cover/dist/cover.js /Users/m0s05eg/github/personal/msk-documents-frontend/src/modules/resume/components/secondary;




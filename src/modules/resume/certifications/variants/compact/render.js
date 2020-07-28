import React from 'react';

const useStyles = () => ({
  root: {
    backgroundColor: 'white',
    padding: 20
  },
  headlineText: {
    margin: 0
  },
  certificateItem: {
    margin: 0
  }
});

const Basic = (
  {
    theme,
    headlineText,
    certifications
  }
) => {
  const styles = useStyles();

  function renderProject(certificate, id) {
    return <li key={id} style={styles.certificateItem}>
      <strong>{certificate.name.value}</strong> | {certificate.organization.value} | {certificate.issuedDate.value} - {certificate.expirationDate.value} | {certificate.url.value && (
        <a target="_blank" rel="noreferrer" style={{ color: theme.value.contrast }} href={certificate.url.value}>
          <i>View</i>
        </a>
      )}
    </li>
  }

  return (
    <div style={{
      ...styles.root,
      backgroundColor: theme.value.color,
      color: theme.value.contrast
    }}>
      <h1 style={styles.headlineText} >{headlineText.value}</h1>
      <hr />
      <br />
      <ul>
        {certifications.value.map((certificateDetails, id) => {
          return renderProject(certificateDetails.value, id)
        })}
      </ul>
    </div>
  );
};

export default Basic;
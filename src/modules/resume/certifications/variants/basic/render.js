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

  function renderProject(certificate) {
    return <div >
      <h2 style={styles.certificateItem}>{certificate.name.value}
      </h2>
      <h3 style={styles.certificateItem}>{certificate.organization.value}</h3>
      <h4 style={styles.certificateItem}>
        {certificate.issuedDate.value} | {certificate.expirationDate.value}
      </h4>
      {certificate.url.value && (
        <span>
          <br />
          <a target="_blank" rel="noreferrer" style={{ color: theme.value.contrast }} href={certificate.url.value}>
            <div style={styles.certificateItem}>
              See Certificate
             </div>
          </a>
          <br />
        </span>
      )}
    </div>
  }

  return (
    <div style={{
      ...styles.root,
      backgroundColor: theme.value.color,
      color: theme.value.contrast
    }}>
      <h1 style={styles.headlineText} >{headlineText.value}</h1>
      <hr />
      {certifications.value.map((certificateDetails, id) => {
        return <div key={id}>
          <br />
          {renderProject(certificateDetails.value)}
        </div>
      })}
    </div>
  );
};

export default Basic;
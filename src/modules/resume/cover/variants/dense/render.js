import React from 'react';

const useStyles = () => ({
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'start'
  },
  detailsWrapper: {
    textAlign: 'left'
  },
  name: {
    margin: 0,
    fontSize: 40,
    fontWeight: 'bold'
  },
  noMargin: {
    margin: 0
  },
  divider: {
    fontSize: 20,
    padding: '0px 4px'
  },
  contactDetails: {
    marginTop: 10
  },
  contactDetailsItemLabel: {
    fontWeight: 'bold'
  }
});

const Dense = ({ theme, name, designation, company, emailId, phoneNo }) => {
  const styles = useStyles();

  return (
    <div
      style={{
        padding: 20,
        ...styles.flex,
        backgroundColor: theme.value.color,
        color: theme.value.contrast
      }}
    >
      <div style={styles.detailsWrapper}>
        <div style={styles.name}>{name.value}</div>
        <div style={{ ...styles.flex, alignItems: 'baseline' }}>
          <h3 style={styles.noMargin}>{designation.value}</h3>
          <div style={styles.divider}>|</div>
          <h4 style={styles.noMargin}>{company.value}</h4>
        </div>
      </div>

      <div style={{ flex: 1 }} />

      <div style={styles.detailsWrapper}>
        <div style={styles.contactDetails}>
          {phoneNo.value && (
            <div>
              <span style={styles.contactDetailsItemLabel}>Ph: </span>
              <span style={styles.phoneNo}>{phoneNo.value}</span>
            </div>
          )}
          {emailId.value && (
            <div>
              <span style={styles.contactDetailsItemLabel}>Email: </span>
              <span style={styles.emailId}>{emailId.value}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dense;

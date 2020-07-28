import React from 'react';

const useStyles = () => ({
  root: {
    display: 'flex'
  },
  coverDiv: {
    paddingTop: 40,
    width: '100%'
  },
  detailsWrapper: {
    padding: 20,
    textAlign: 'left'
  },
  heading: {
    margin: 0,
    fontSize: 40,
    fontWeight: 'bold'
  },
  address: {
    margin: 0
  },
  phone: {
    margin: 0
  },
  email: {
    margin: 0
  },
  linkedin: {
    margin: 0
  },
  github: {
    margin: 0
  }
});

const Basic = ({ theme, address, phone, email, linkedin, github }) => {
  const styles = useStyles();
  return (
    <div style={styles.root}>
      <div
        style={{
          ...styles.coverDiv,
          backgroundColor: theme.value.color,
          color: theme.value.contrast
        }}
      >
        <div style={styles.detailsWrapper}>
          <p style={styles.heading}>Address</p>
          <p style={styles.address}>{address.value}</p>
          <p style={styles.heading}>Phone</p>
          <p style={styles.phone}>{phone.value}</p>
          <p style={styles.heading}>E-mail</p>
          <p style={styles.email}>{email.value}</p>
          <p style={styles.heading}>LinkedIn</p>
          <p style={styles.linkedin}>{linkedin.value}</p>
          <p style={styles.heading}>GitHub</p>
          <p style={styles.github}>{github.value}</p>
        </div>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
};

export default Basic;

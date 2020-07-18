import React from 'react'

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white',
    padding: 20
  }
})

const Basic = (
  {
    headlineText
  }
) => {
  const styles = useStyles()
  return (
    <div style={styles.root}>
      <h2>{headlineText.value}</h2>

    </div>
  );
};

export default Basic;
import React from 'react'

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white',
    padding: 20
  },
  headlineText: {
    margin: 0
  },
})

const Basic = (
  {
    headlineText
  }
) => {
  const styles = useStyles()
  return (
    <div style={styles.root}>
      <h1 style={styles.headlineText} >{headlineText.value}</h1>
    </div>
  );
};

export default Basic;
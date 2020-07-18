import React from 'react'

const useStyles = (theme) => ({
  root: {
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
    <div style={{
      ...styles.root,
      backgroundColor: theme.value.color,
      color: theme.value.contrast
    }}>
      <h2>{headlineText.value}</h2>

    </div>
  );
};

export default Basic;
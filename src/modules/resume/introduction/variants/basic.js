import React from 'react'

const useStyles = (theme) => ({
  root: {
    padding: 20
  }
})

const Basic = (
  {
    theme,
    headlineText,
    paragraphs
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
      {
        paragraphs.value.map((paragraph) => {
          return <div >
            <p>{paragraph.value}</p>
          </div>
        })
      }
    </div >
  );
};

export default Basic;
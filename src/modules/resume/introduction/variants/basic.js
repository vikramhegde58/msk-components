import React from 'react'

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white',
    padding: 20
  }
})

const Basic = (
  {
    headlineText,
    paragraphs
  }
) => {
  const styles = useStyles()
  return (
    <div style={styles.root}>
      <h2 > {headlineText.value}</h2>
      {
        paragraphs.value.map((paragraph) => {
          return <div >
            <p >{paragraph.value}</p>
          </div>
        })
      }
    </div>
  );
};

export default Basic;
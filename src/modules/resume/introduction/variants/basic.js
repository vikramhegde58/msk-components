import React from 'react'

const Basic = ({ paragraphs }) => {
  return (
    <div>
      {
        paragraphs.map((paragraph) => {
          return <div >
            <h1>Single column basic</h1>
            <p>{paragraph.value}</p>

          </div>
        })
      }
    </div>
  );
};

export default Basic;
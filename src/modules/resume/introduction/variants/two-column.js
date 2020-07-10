import React from 'react'

const TwoColumn = ({ paragraphs }) => {
  return (
    <div>
      {
        paragraphs.map((paragraph) => {
          return <div >
            <h1>Two columns</h1>
            <p style={{ color: "blue" }}> {paragraph.value}</p>
          </div>
        })
      }
    </div>
  );
};

export default TwoColumn;
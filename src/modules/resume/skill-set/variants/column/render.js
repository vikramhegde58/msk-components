import React from 'react';

const useStyles = (theme) => ({
  root: {
    padding: 20
  },
  headlineText: {
    margin: 0
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  skillContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  skill: {
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 20,
    fontSize: 15,
    display: 'inline-block',
    fontWeight: 800
  },
  percentContainer: {
    width: 150,
    height: 12,
    border: '1px solid #000'
  },
  percent: {
    height: '100%'
  },
  ratingIcon: {
    height: 13
  },
  ratingContainer: {
    paddingLeft: 5
  }
});

const Column = ({ theme, headlineText, skills }) => {
  const styles = useStyles();
  return (
    <div style={styles.root}>
      <h1 style={styles.headlineText}>{headlineText.value}</h1>
      <hr />
      <br />
      <div style={styles.skillsContainer}>
        {skills.value.map((skill) => {
          return (
            <div style={styles.skillContainer}>
              <div
                style={{
                  ...styles.skill
                }}
              >
                {skill.name.value}
              </div>
              <div
                style={{
                  ...styles.percentContainer
                }}
              >
                <div
                  style={{
                    ...styles.percent,
                    backgroundColor: theme.value.color,
                    width: `${skill.rating.value}%`
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Column;

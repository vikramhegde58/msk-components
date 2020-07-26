import React from 'react'
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Flex from '@common-components/flex'
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginTop: 80
  },
  layoutPaper: {
    userSelect: 'none',
    width: 700,
    marginLeft: 300,
    marginBottom: 100,
    transition: 'all .2s linear',
  },
});

function LayoutArea({
  Variant,
  properties
}) {

  const classes = useStyles();

  const {
    formFactor,
  } = useSelector((state) => {
    return {
      formFactor: state.formFactor,
    };
  });



  return <div className={classes.root}>
    <CssBaseline />
    <Flex />
    <Paper
      style={{
        width: formFactor === 'desktop' ? 700 : 320,
        border: `2px solid gray`,
      }}
      className={classes.layoutPaper}
      elevation={0} >

      <Variant {...properties} />

    </Paper>
    <Flex />
  </div >
}

export default LayoutArea;
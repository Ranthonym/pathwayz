import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Testimonial() {
  const classes = useStyles();
  return (
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Testimonial
        </Typography>
        <Typography variant="h5" component="h2">
        "PathWayz provided me with convenient online service, which helped me understand myself better. I am now confident in my decision to attend college."
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         -Sarah Wiseman
        </Typography>
        </CardContent>
  );
}
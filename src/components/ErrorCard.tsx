import React from 'react'
import { Typography, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

interface ErrorPropTypes {
  message: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: red[100],
  },
}))

function ErrorCard({ message }: ErrorPropTypes): JSX.Element {
  const classes = useStyles()
  return (
    <Card color="error" className={classes.root}>
      <Typography align="center">{message}</Typography>
    </Card>
  )
}

export default ErrorCard

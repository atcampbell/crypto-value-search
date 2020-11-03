import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemText, ListSubheader, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}))

interface PreviousSearchesProps {
  previousSearches: string[]
}

function PreviousSearches({ previousSearches }: PreviousSearchesProps): JSX.Element {
  const classes = useStyles()

  return !previousSearches.length ? (
    <></>
  ) : (
    <Paper>
      <List className={classes.root} subheader={<li />}>
        <li className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{`Previous Searches`}</ListSubheader>
            {previousSearches.map((item, i) => (
              <ListItem key={`${item}-${i}`}>
                <ListItemText primary={`${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      </List>
    </Paper>
  )
}

export default PreviousSearches

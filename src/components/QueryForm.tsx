import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}))

interface QueryForm {
  onSubmit: (searchTerm: string) => void
}

function QueryForm({ onSubmit }: QueryForm): JSX.Element {
  const [currencyName, setCurrencyName] = useState<string>('')

  const classes = useStyles()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setCurrencyName(e.currentTarget.value)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    onSubmit(currencyName)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Cryptocurrency name" onChange={handleChange} value={currencyName} />
      <Button
        variant="contained"
        color="primary"
        disabled={!currencyName}
        type="submit"
        className={classes.button}
      >
        Search
      </Button>
    </form>
  )
}

export default QueryForm

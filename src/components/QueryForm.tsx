import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface QueryForm {
  onSubmit: (searchTerm: string) => void
}

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}))

function QueryForm({ onSubmit }: QueryForm): JSX.Element {
  const [currency, setCurrency] = useState<string>('')

  const classes = useStyles()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setCurrency(e.currentTarget.value)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    onSubmit(currency)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Cryptocurrency name" onChange={handleChange} value={currency} />
      <Button
        variant="contained"
        color="primary"
        disabled={!currency}
        type="submit"
        className={classes.button}
      >
        Search
      </Button>
    </form>
  )
}

export default QueryForm

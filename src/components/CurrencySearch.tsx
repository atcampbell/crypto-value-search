import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface FormTestProps {
  onSubmit: (searchTerm: string) => void
}

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}))

export default function CurrencySearch({ onSubmit }: FormTestProps): JSX.Element {
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
      <TextField label="Cryptcurrency name" onChange={handleChange} value={currency} />
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

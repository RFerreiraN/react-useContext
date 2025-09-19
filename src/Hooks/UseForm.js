import { useState } from 'react'

export const UseForm = (initialForm) => {

  const [formState, setFormState] = useState(initialForm);
  const handleInput = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value.trim()
    })

  }
  return {
    ...formState,
    formState,
    handleInput
  }
}

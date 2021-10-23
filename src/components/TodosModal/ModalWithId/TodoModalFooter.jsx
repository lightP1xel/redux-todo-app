import { React } from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router'

export const TodoModalFooter = () => {
  const history = useHistory()

  const handleCancel = () => {
    history.goBack()
  }

  return (
    <>
      <Button onClick={handleCancel}>Close</Button>
    </>
  )
}
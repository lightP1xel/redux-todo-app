import {React, useState} from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router'

export const TodoModalFooter = () => {
  const history = useHistory()
  const [isModalVisible, setIsModalVisible] = useState(true)
  

  const handleCancel = () => {
    setIsModalVisible(false)
    history.goBack()
  }

  return (
    <>
      <Button onClick={handleCancel}>Close</Button>
    </>
  )
}

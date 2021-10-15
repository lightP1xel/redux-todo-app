import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addtodo } from '../../store/reducers/todosReducer'
import { Button, Input, Form, notification, Modal } from 'antd'

const { useForm } = Form

const AddTodo = () => {
  const [form] = useForm()
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editInput, setEditInput] = useState(true)

  const onFinish = (e) => {
    console.log(e)
    dispatch(addtodo(
      {
        title: e.title,
        description: e.description,
      }
    ))
    setIsModalVisible(false)
    form.resetFields()
    const args = {
      message: 'Your todo',
      description: 'You add todo.',
      duration: 5,
    }
    notification.open(args)
    setEditInput(true)
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleEdit = () => {
    setEditInput(false)
  }

  return (
    <>
    <Button onClick={showModal}>Add Todo</Button>
    <Modal title="Basic Modal" visible={isModalVisible} footer={null}>
      <Button onClick={handleEdit}>Edit</Button>
      <Form onFinish={onFinish} form={form}>
          <Form.Item name='title' rules={[{
            required: true,
            message: 'Please input your task!',
          }]}>
            <Input disabled={editInput} addonBefore='Title: ' />
          </Form.Item>
          <Form.Item name='description' rules={[{
            required: true,
            message: 'Please input description!',
          }]}>
            <Input disabled={editInput} addonBefore='Description: ' />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>Add TODO</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default AddTodo

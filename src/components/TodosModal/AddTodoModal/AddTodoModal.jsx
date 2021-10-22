import React from 'react'
import { useDispatch } from 'react-redux'
import { useContext } from 'react'
import { addtodo } from '../../../store/export'
import { Button, Input, Form, Modal } from 'antd'
import { NotificationProvider } from '../..'
import { useHistory } from 'react-router'
import { TodoModalFooter } from '../ModalWithId/TodoModalFooter'

const { useForm } = Form

export const AddTodoModal = () => {

  const [form] = useForm()
  const dispatch = useDispatch()
  const { notify } = useContext(NotificationProvider)
  const history = useHistory()

  const onFinish = ({ title, description }) => {
    const successAdd = dispatch(addtodo(
      {
        title: title,
        description: description,
      }
    ))
    if (successAdd) {
      form.resetFields()
      history.goBack()
      notify(
        {
          message: 'Your todo',
          description: 'You add todo.',
          duration: 5,
        }
      )
    }
  }

const createField = (name, label) => {
  return (
    <Form.Item 
      name={name} 
      label={label}
      rules={
      [{
        required: true,
        message: 'Please input your task!',
      }]}
    >
      <Input />
    </Form.Item>
  )
}

  return (
    <Modal title="Add todo" visible footer={<TodoModalFooter />}>
              <Form onFinish={onFinish} form={form}>
                  {createField('title', 'Title')}
                  {createField('description', 'Description')}
                <Form.Item>
                  <Button type='primary' htmlType='submit'>Add TODO</Button>
                </Form.Item>
              </Form>
        </Modal>
  )
}

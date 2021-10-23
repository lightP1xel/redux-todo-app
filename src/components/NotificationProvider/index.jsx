import React, { useCallback } from 'react'
import { notification } from 'antd'

export const NotificationProvider = React.createContext()

export const Notification = ({ children }) => {
  const notify = useCallback(({ message, description, duration = 5 }) => {
    notification.open(
      {
        message,
        description,
        duration,
      }
    )
  }, []
  )

  return (
    <NotificationProvider.Provider value={{ notify }}>
      {children}
    </NotificationProvider.Provider>
  )
}
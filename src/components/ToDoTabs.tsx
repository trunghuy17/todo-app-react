import { Tabs } from 'antd'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

function ToDoTabs() {
  return (
    <Tabs defaultActiveKey='all' items ={[
      {
        key: 'all',
        label: 'All',
        children: (
          <>
          <ToDoForm/>
          <ToDoList/>
          </>
        )
      },
      {
        key:'completed',
        label: 'Completed',
        children:<ToDoList showCompleted/>
      }
    ]}/>
  )
}

export default ToDoTabs
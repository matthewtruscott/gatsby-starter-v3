import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetTodos } from "../../../redux/features/services"

const TodosContainer = () => {
  const dispatch = useDispatch()

  const { todos } = useSelector(state => state.todos)

  useEffect(() => {
    dispatch(GetTodos())
  }, [])

  return (
    <div>
      {todos
        .filter((todo, index) => index < 10)
        .map(todo => (
          <div key={todo.id}>{todo.title}</div>
        ))}
    </div>
  )
}

export default TodosContainer

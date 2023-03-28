import styled from "styled-components"

const TodoContainer = styled.li`
  list-style: none;
  background-color: #ccc;
`

export const TodoItem = ({ id, text, isDone, onToggleTodo }) => {
  const handleToggleTodo = () => {
    onToggleTodo?.(id)
  }

  return (
    <TodoContainer>
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleToggleTodo}
      />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{text}</span>
    </TodoContainer>
  )
}

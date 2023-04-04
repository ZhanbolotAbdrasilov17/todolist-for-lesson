import styled from "styled-components"

const Form = styled.form`
  border: 1px solid black;
  padding: 30px;
  border-radius: 20px;
  background-color: #eee;
  
  display: flex;
  flex-direction: column;

  & input {
    margin: 20px 0;
  }
  * {
    font-size: 20px;
  }
`

export const FormPage = () => {
  return (
    <Form>
      <textarea></textarea>
      <input type="date" />
      <button>Save todo</button>
    </Form>
  )
}
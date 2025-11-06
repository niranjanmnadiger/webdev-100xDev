import { RecoilRoot, useRecoilValueLoadable } from "recoil"
import { todoAtomFamily } from "./Store/atoms/counter"


function App() {

  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
    </RecoilRoot>
  )


}

function Todo({ id }) {
  const todo = useRecoilValueLoadable(todoAtomFamily(id));

  /* useRecoilValueLoadable this gives out 2 things 
    state and content 

    todo.state - this checks the present state of your request - if its still loading then loading - if it has value then returns the actual value you need to display

    but when you try to put out spefific thingy out of json - which is form backend 
    todo.title won't work if you use "useRecoilValueLoadable" instead you have to use
     "todo.contents.title"
  */

  if (todo.state == "loading") {

    return (
      <div>
        loading
      </div>
    )
  } else if (todo.state == "hasValue") {
    return (
      <>
        {todo.contents.title}
        <br />
        {todo.contents.id}
        <br />

      </>
    )

  }

}

export default App
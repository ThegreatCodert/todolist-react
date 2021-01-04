import "./App.css";
import React, { useState, useEffect  , onSnapshot} from "react";
import { Button, Input, FormControl, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from 'firebase'
function App() {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState("");
  // function clickme() {
  //   setTodo(input);
  // }
    useEffect(()=>{
      db.collection('todo').onSnapshot(
        snapshot =>{
          console.log(snapshot.docs.map(doc => doc.data().todo))
          setTodo(snapshot.docs.map(doc => ({id:doc.id , todo:doc.data().todo})));
        }
      )
    } ,[]);



  const addtodo = (event) => {
    event.preventDefault();
    setInput('')
    db.collection('todo').add({
      todo:input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
  };
  return (
    <div className="App">
      <centre>
        <form>
          <h1>TodoList👌</h1>

          <FormControl>
            <Input
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </FormControl>
          <br></br>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={addtodo}
            disabled={!input}
          >
            Add to list
          </Button>
          <centre>
            <div style={{ textAlign: "centre" }}>
              <ul>
                {todos.map((todo) => (
                  <Todo todo={todo} />
                ))}
                {/* <li></li> */}
              </ul>
            </div>
          </centre>
        </form>
      </centre>
    </div>
  );
}

export default App;

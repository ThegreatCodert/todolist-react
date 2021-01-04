import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
} from "@material-ui/core";
import React from "react";
import db from "./firebase";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
function Todo(props) {
  return (
    <centre>
      <List>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="Dummy Text 😱😱" />
        </ListItem>
        {/* <p>{props.todo}</p> */}
        <Button onClick = {event => db.collection('todo').doc(props.todo.id).delete()}>❌Delete me </Button>
      </List>
    </centre>
  );
}

export default Todo;

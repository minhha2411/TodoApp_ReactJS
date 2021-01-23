import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  todo: {
      width: '90%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-beetween',
      alignItems: 'center',
      color: '#fff',
      padding: '16px',
      borderRadius: '5px',
      marginBottom: '10px',
      background: 'linear-gradient(90deg, rgba(255, 118, 20, 1) 0%, rgba(255, 84, 17, 1) 100%)',
      '&:nth-child(4n + 1)': {
        background: 'linear-gradient(90deg, rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%)'
      },
      '&:nth-child(4n + 2)': {
        background: 'linear-gradient(90deg, rgba(255, 12, 241, 1) 0%,rgba(250, 0, 135, 1) 100%)'
      },
      
      '&:nth-child(4n + 3)':  {
        background: 'linear-gradient(90deg, rgba(20, 159, 255, 1) 0%, rgba(17, 122, 255, 1) 100%)'
      }
  },
  icons: {
    width: '100%',
    display: 'flex',
    justifyContent:'flex-end',
    alignItems:'center'
  }
}));


function Todos(props) {
    const classes = useStyles();
    
    return (
      <>
        {props.todosArray.map(todo =>  
            <div className={classes.todo} key={todo.id}>
                <div className={classes.inputContainer}>
                <Input value={todo.text} 
                disableUnderline={true} className={classes.inputTodo}
                inputProps={{style: {textTransform: 'capitalize' , color: 'white', width: '300px'} }}></Input>
                </div>
                <div className={classes.icons}>
                <DeleteIcon onClick={() => props.handleDelete(todo.id)}
                ></DeleteIcon>  
                <EditIcon onClick={() => props.handleEdit(todo.id)}></EditIcon>
                </div>
            </div>
                )}
            
        </>
      
    )
}

export default Todos

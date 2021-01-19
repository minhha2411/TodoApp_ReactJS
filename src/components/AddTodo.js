import React , {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    todoForm: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        height: '80px',
        marginBottom: '40px'
    },
    inputForm: {
        width: '300px',
        paddingRight: '1rem',
        outline: 'none'
    },
    multilineColor:{
        color:'white'
    },
    inpubBtn: {
        backgroundColor: ' #5d0cff',
        padding: '0px',
        height: '40px',
        width: '60px',
        color: 'white'
    }
});

function AddTodo(props) {

    const [input, SetInput] = useState('');
    const handleChange = (event) => {
        SetInput(event.target.value);
  
    }
    const classes = useStyles();
    return (
        <div className={classes.todoForm}>  
            <TextField placeholder="Enter Task" variant='outlined'  
            onChange={handleChange} value={input}  className={classes.inputForm}
            size='small'  
            InputProps={{
              className: classes.multilineColor
            }} />
            <Button 
            onClick = {(event) => props.handleSubmit(event,input)} 
             type='submit' className={classes.inpubBtn}> ADD </Button>
        </div>
    )
}

export default AddTodo

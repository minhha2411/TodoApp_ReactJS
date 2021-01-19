import React , {useState} from 'react'
import AddTodo from './AddTodo';
import Todos from './Todos';
import Edit from './Edit';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    todoApp: {
        width: '500px',
        minHeight: '600px',
        backgroundColor: '#161a2b',
        marginTop: '80px',
        paddingBottom: '40px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '4px',
        justifyContent: 'flexStart'
    },
    title: {
        margin: '30px 50px',
        textAlign: 'center',
        fontSize: '24px',
        color: 'white'
    }

})


function Form() {
    const [todosArray , SetTodos ] = useState([]);
    const [edit , SetEdit] = useState({
        isEdit: false,
        editedId: ''
    });

    const handleSubmit = (e,value) => {
    console.log(value);
    let ID = 0;
        if(todosArray.length === 0){
            ID = 0;
        }
        else{
            ID = todosArray[todosArray.length - 1 ].id + 1;
        }
        SetTodos(
            [...todosArray , {id: ID , text: value}]
        )
        e.preventDefault();
        
    }
    const handleDelete = (id) => {
        let newArr =   todosArray.filter(el => el.id !== id );
        SetTodos([
          ...newArr
        ]);
    }
    const handleEdit = (id) => {
        SetEdit({isEdit: true , editedId: id});
    }
    const onEditChange =(id,value) =>{
        SetEdit({isEdit: false , editedId: id});
        let i = todosArray.findIndex(l => {return l.id === id});
        todosArray[i].text = value;
        
        SetTodos([
            ...todosArray
        ])  
    }
    const classes = useStyles();
  
    return (
        !edit.isEdit ? 

        
        <div className={classes.todoApp}>
            <form onSubmit={handleSubmit}>
            <h1 className={classes.title}>What's the plan today ?</h1>
            <AddTodo todosArray = {todosArray} handleSubmit = {handleSubmit}></AddTodo>
            <Todos todosArray = {todosArray} handleDelete = {handleDelete} handleEdit= {handleEdit}></Todos>
            </form>
        </div>
     
            : 
        <div className={classes.todoApp}>
            <h1 className={classes.title}>What's the plan today ?</h1>
            <Edit edit= {edit} todosArray = {todosArray} onEditChange = {onEditChange}></Edit>
        </div>
    )
}

export default Form

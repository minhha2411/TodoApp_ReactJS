import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function Edit(props) {
    const [edit , SetEdit] = useState('');
    const handleOnChange = (event) => {
        SetEdit(event.target.value);
    }
    const editID = props.edit.editedId;
    const useStyles = makeStyles((theme) => ({
        editForm: {
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
        inputBtn: {
            background: 'linear-gradient(90deg, rgba(255, 118, 20, 1) 0%, rgba(255, 84, 17, 1) 100%)',
            padding: '0',
            height: '40px',
            width: '100px',
            color: 'white'
        }

    }));
    const classes = useStyles();
    return (
        <div className={classes.editForm}>
            <TextField type='text' onChange={handleOnChange}
            placeholder="Update value" variant='outlined' 
            InputProps={{
                className: classes.multilineColor
              }} className={classes.inputForm}></TextField>
            <Button onClick={() => props.onEditChange(editID,edit)}
            className={classes.inputBtn}>Update</Button>
        </div>
    )
}

export default Edit

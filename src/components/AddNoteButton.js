import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import {useStyles}  from '../styles/AddNoteButtonStyle'
import { useDispatch } from 'react-redux'
import { toggleNotesForm } from '../redux/notesReducer'

export default function AddNoteButton() {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        startIcon={<AddIcon />}
        onClick={() => dispatch(toggleNotesForm())}
      >
        Add note
      </Button>
    </>
  )
}
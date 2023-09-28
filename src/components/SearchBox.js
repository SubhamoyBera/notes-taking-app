import FormControl from '@mui/material/FormControl'
import searchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import { useStyles } from '../styles/SearchInputStyle'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../redux/notesReducer'

export default function SearchBox() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const onChange = (value) => {
    dispatch(setSearchValue(value))
  }

  return (
    <FormControl className={classes.formControl}>
      <searchIcon className={classes.searchIcon} />
      <InputBase
        placeholder="Search notes…"
        className={classes.searchInput}
        onChange={(e) => onChange(e.target.value)}
      />
    </FormControl>
  )
}
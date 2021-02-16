import SearchRounded from '@material-ui/icons/SearchRounded'
import styles from './SearchInput.module.css'
 const SearchInput = ({...rest}) =>{
	return (
		<div className={styles.wrapper}>
		
		<SearchRounded color="inherit"/>
		<input {...rest} className={styles.input}/>
		</div>
		)
}

export default SearchInput
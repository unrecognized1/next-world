import styles from './CountriesTable.module.css'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpRounded from '@material-ui/icons/KeyboardArrowUpRounded'
import {useState} from 'react'
import Link from 'next/link'
const orderBy = (countries,value,direction) =>{
	if (direction === 'asc'){
		return [...countries].sort((a,b)=>(a[value]>b[value] ? 1 : -1))
	}

	if (direction === 'desc') {
		return [...countries].sort((a,b)=>(a[value]>b[value] ? -1 : 1))
	}

	return countries
	
}


const SortArrow = ({direction}) =>{
	if (!direction) {
		return <></>
	}
//
	if (direction === 'desc') {
      return (			<div className={styles.heading_arrow}>
			<KeyboardArrowDown color="inherit"/>
			</div>)
	}else {

		//

		return (
			<div className={styles.heading_arrow}>
			<KeyboardArrowUpRounded color="inherit"/>
			</div>
		)
	}
}

//


 const CountriesTable = ({countries}) =>{

 	const [direction, setDirection] = useState()
 	const [value, setValue] = useState()



 	const orderedCountries = orderBy(countries,value,direction)

 	const switchDirection = e =>{
 		 if (!direction) {
	 		setDirection('desc')
	 	}else if (direction === 'desc') {

	 		setDirection('asc')
	 		
	 	}else{
	 		setDirection(null)
	 	}
 	}


const setValueAndDirection = (e)=>{
	switchDirection()
	setValue(e)
}


	return (
<div>

	<div className={styles.heading}>
	<div className={styles.heading_flag}></div>
		<button className={styles.heading_name} onClick={e=>setValueAndDirection('name')}>
			<div>Name</div>
			
			{value=='name' && <SortArrow direction={direction}/>}

		</button>



		<button className={styles.heading_population} onClick={e=>setValueAndDirection('population')}>
			<div>Population</div>
			{value=='population' && <SortArrow direction={direction}/>}
		</button>

		<button className={styles.heading_area} onClick={e=>setValueAndDirection('area')}>
			<div>Area (km<sup styles={{fontSize:"0.5rem"}}>2</sup>)</div>
			{value=='area' && <SortArrow direction={direction}/>}
		</button>

		<button className={styles.heading_area} onClick={e=>setValueAndDirection('gini')}>
			<div>Gini </div>
			{value=='gini' && <SortArrow direction={direction}/>}
		</button>


	</div>


	{orderedCountries.map((country,i)=>(

		<Link key={i} href={`/country/${country.alpha3Code}`}>
			<div  className={styles.row}>
				<div className={styles.flag}>
				<img src={country.flag} alt={country.name}/>
				</div>
				<div className={styles.name}>{country.name}</div>
				<div className={styles.population}>{country.population}</div>
				<div className={styles.area}>{country.area || 0}</div>
				<div className={styles.gini}>{country.gini || 0 }%</div>
			 </div>
		</Link>
		
		))}

</div>
		)
}

export default CountriesTable

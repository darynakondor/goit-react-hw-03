import style from "./SearchBox.module.css"

const SearchBox = ({filterContacts, searchContact}) => {
  return (
    <div className={style.searchArea}>
        <p className={style.text}>Find contacts by name</p>
        <input type="text" className={style.inp} value={filterContacts} onChange={searchContact} />
    </div>
  )
}

export default SearchBox
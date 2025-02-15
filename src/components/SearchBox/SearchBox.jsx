import s from "./SearchBox.module.css"

const SearchBox = ( {newValue, setNewValue}) =>{
    return (
        <>
        <p className={s.title}>Find contacts by name</p>
        <input className={s.input} value={newValue} onChange={e => setNewValue(e.target.value)} type="text" />
        </>
    )
};

export default SearchBox;
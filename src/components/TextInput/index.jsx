import "./styles.css";
export const TextInput = ({searchValue, handleChange}) => {

  return (
    <div className="textInput">
      <label htmlFor="textInput" className="">Pesquisar</label>
      <input
        id="textInput" 
        type="search" 
        onChange={handleChange}
        value={searchValue}
      />
    </div>
  )
}


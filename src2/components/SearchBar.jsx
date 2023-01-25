import { FaSearch } from "react-icons/fa";


export default function SearchBar({handleSearch}){
    return(
        <div className="search-bar-container d-flex">
            <input type="search" placeholder='Search...' onChange={e => handleSearch(e.target.value)} />
            <button><FaSearch /></button>
        </div>
    )
}
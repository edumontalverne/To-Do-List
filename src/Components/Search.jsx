export default function Search({ search, setSearch }) {
    return (
        <div className="search">
            <h3>Search for a task:</h3>
            <input 
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type to search" 
            />
        </div>
    )
}
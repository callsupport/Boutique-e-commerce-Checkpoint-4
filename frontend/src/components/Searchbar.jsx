import PropTypes from "prop-types";

function SearchBar({ search, setSearch }) {
  SearchBar.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
  };
  console.info(search);
  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher"
        className="w-full h-10 border border-gray-400 px-2 rounded-md"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

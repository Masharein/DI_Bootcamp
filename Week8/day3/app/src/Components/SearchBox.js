const SearchBox = (props) => (
    <div>
      <input
        type='text'
        onChange={(e) => props.handleFilterChange(e)}
        value={props.filterValue}
        placeholder='Search'
      />
    </div>
  );
  
  export default SearchBox;

const SearchFilter = ({ search, setSearch, filter, setFilter }) => {
  return (
    <div className="flex gap-4 mt-4 items-center">
      <input
        type="text"
        placeholder="Search by destination..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded flex-1"
      />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Status</option>
        <option value="PLANNED">PLANNED</option>
        <option value="ONGOING">ONGOING</option>
        <option value="COMPLETED">COMPLETED</option>
      </select>
    </div>
  );
};

export default SearchFilter;

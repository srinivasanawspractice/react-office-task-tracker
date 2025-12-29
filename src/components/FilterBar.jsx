import "./FilterBar.css";
const FilterBar = ({ filter, onFilterChange }) => {
  return (
    <div className="filter-bar">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>

      <button
        className={filter === "open" ? "active" : ""}
        onClick={() => onFilterChange("open")}
      >
        Open
      </button>

      <button
        className={filter === "pending" ? "active" : ""}
        onClick={() => onFilterChange("pending")}
      >
        Pending
      </button>

      <button
        className={filter === "fulfilled" ? "active" : ""}
        onClick={() => onFilterChange("fulfilled")}
      >
        Fullfilled
      </button>
    </div>
  );
};

export default FilterBar;

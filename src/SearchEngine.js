import React from "react";

import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <div className="search-engine">
        <form>
          <div className="row">
            <div className="col-9 input-city">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city..."
              />
            </div>
            <div className="col-3">
              <button
                className="btn btn-primary mb-3"
                type="submit"
                value="Search"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// Filter bar component for filtering tasks
import React from 'react';
import { YEARS, SKILLS } from '../data/filters';

const FilterBar = ({ filters, onFiltersChange }) => {
  // Handle filter changes and emit to parent
  const handleYearChange = (event) => {
    const year = event.target.value === 'all' ? null : event.target.value;
    onFiltersChange({ ...filters, year });
  };

  const handleSkillChange = (event) => {
    const skill = event.target.value === 'all' ? null : event.target.value;
    onFiltersChange({ ...filters, skill });
  };

  const handleQueryChange = (event) => {
    onFiltersChange({ ...filters, query: event.target.value });
  };

  return (
    <div className="filter-bar mb-4">
      <div className="row g-3">
        {/* Year Filter */}
        <div className="col-md-3">
          <label htmlFor="year-filter" className="form-label">Year</label>
          <select 
            id="year-filter"
            className="form-select" 
            value={filters.year || 'all'}
            onChange={handleYearChange}
            aria-label="Filter by year"
          >
            <option value="all">All Years</option>
            {YEARS.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* Skill Filter */}
        <div className="col-md-3">
          <label htmlFor="skill-filter" className="form-label">Skill</label>
          <select 
            id="skill-filter"
            className="form-select" 
            value={filters.skill || 'all'}
            onChange={handleSkillChange}
            aria-label="Filter by skill"
          >
            <option value="all">All Skills</option>
            {SKILLS.map(skill => (
              <option key={skill} value={skill}>{skill}</option>
            ))}
          </select>
        </div>

        {/* Search Input */}
        <div className="col-md-6">
          <label htmlFor="search-input" className="form-label">Search</label>
          <input
            id="search-input"
            type="text"
            className="form-control"
            placeholder="Search by title, exam code, or skills..."
            value={filters.query}
            onChange={handleQueryChange}
            aria-label="Search tasks"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

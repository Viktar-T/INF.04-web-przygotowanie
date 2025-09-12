// Filter bar component for filtering tasks
import React from 'react';
import { YEARS, SKILLS, COMPLEXITY_LEVELS, WEEK_NUMBERS } from '../data/filters';

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

  const handleComplexityChange = (event) => {
    const complexityLevel = event.target.value === 'all' ? null : event.target.value;
    onFiltersChange({ ...filters, complexityLevel });
  };

  const handleWeekChange = (event) => {
    const weekNumber = event.target.value === 'all' ? null : parseInt(event.target.value);
    onFiltersChange({ ...filters, weekNumber });
  };

  return (
    <div className="filter-bar">
      <div className="row g-3">
        {/* Year Filter */}
        <div className="col-md-2">
          <label htmlFor="year-filter" className="form-label fw-semibold">
            <i className="bi bi-calendar3 me-1"></i>Year
          </label>
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
        <div className="col-md-2">
          <label htmlFor="skill-filter" className="form-label fw-semibold">
            <i className="bi bi-tags me-1"></i>Skill
          </label>
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

        {/* Complexity Level Filter */}
        <div className="col-md-2">
          <label htmlFor="complexity-filter" className="form-label fw-semibold">
            <i className="bi bi-bar-chart me-1"></i>Complexity
          </label>
          <select 
            id="complexity-filter"
            className="form-select" 
            value={filters.complexityLevel || 'all'}
            onChange={handleComplexityChange}
            aria-label="Filter by complexity level"
          >
            <option value="all">All Levels</option>
            {COMPLEXITY_LEVELS.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        {/* Week Number Filter */}
        <div className="col-md-2">
          <label htmlFor="week-filter" className="form-label fw-semibold">
            <i className="bi bi-calendar-week me-1"></i>Week
          </label>
          <select 
            id="week-filter"
            className="form-select" 
            value={filters.weekNumber || 'all'}
            onChange={handleWeekChange}
            aria-label="Filter by week number"
          >
            <option value="all">All Weeks</option>
            {WEEK_NUMBERS.map(week => (
              <option key={week} value={week}>Week {week}</option>
            ))}
          </select>
        </div>

        {/* Search Input */}
        <div className="col-md-4">
          <label htmlFor="search-input" className="form-label fw-semibold">
            <i className="bi bi-search me-1"></i>Search
          </label>
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

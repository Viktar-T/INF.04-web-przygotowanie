// Home page component
import React, { useState, useMemo } from 'react';
import FilterBar from '../components/FilterBar';
import TaskCard from '../components/TaskCard';
import { tasks } from '../data/tasks.index';

const HomePage = () => {
  // State management for filters and solution selections
  const [filters, setFilters] = useState({ 
    year: null, 
    skill: null, 
    query: '',
    complexityLevel: null,
    weekNumbers: null
  });
  
  // Track selected solutions per task (persists across filter changes)
  const [selectedSolutions, setSelectedSolutions] = useState({});

  // Handle filter changes from FilterBar
  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Handle solution selection changes from TaskCard
  const handleSolutionChange = (taskId, solutionType) => {
    setSelectedSolutions(prev => ({
      ...prev,
      [taskId]: solutionType
    }));
  };

  // Filter and sort tasks based on current filters
  const filteredTasks = useMemo(() => {
    let filtered = [...tasks];

    // Apply year filter
    if (filters.year) {
      filtered = filtered.filter(task => task.year === parseInt(filters.year));
    }

    // Apply skill filter
    if (filters.skill) {
      filtered = filtered.filter(task => 
        task.skillTags.includes(filters.skill)
      );
    }

    // Apply complexity level filter
    if (filters.complexityLevel) {
      filtered = filtered.filter(task => task.complexityLevel === filters.complexityLevel);
    }

    // Apply week numbers filter
    if (filters.weekNumbers !== null) {
      if (filters.weekNumbers.length === 0) {
        // If empty array, show no tasks
        filtered = [];
      } else {
        // If has items, filter by selected weeks
        filtered = filtered.filter(task => filters.weekNumbers.includes(task.weekNumber));
      }
    }

    // Apply search query filter
    if (filters.query.trim()) {
      const query = filters.query.toLowerCase();
      filtered = filtered.filter(task => 
        task.title.toLowerCase().includes(query) ||
        task.examCode.toLowerCase().includes(query) ||
        task.skillTags.some(skill => skill.toLowerCase().includes(query))
      );
    }

    // Sort by week number first (ascending: W1 → W2 → W3 → ...), then by year desc, then by exam code asc
    filtered.sort((a, b) => {
      // Primary sort: by week number (ascending)
      if (a.weekNumber !== b.weekNumber) {
        return a.weekNumber - b.weekNumber; // Ascending by week number
      }
      
      // Secondary sort: by year (descending)
      if (a.year !== b.year) {
        return b.year - a.year; // Descending by year
      }
      
      // Tertiary sort: by exam code (ascending)
      return a.examCode.localeCompare(b.examCode); // Ascending by exam code
    });

    return filtered;
  }, [filters]);

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary mb-3">Exam Tasks Application</h1>
            <p className="lead text-muted">Browse and explore exam tasks with different solution approaches</p>
          </div>
          
          {/* Filter Bar */}
          <FilterBar 
            filters={filters} 
            onFiltersChange={handleFiltersChange} 
          />

          {/* Task List */}
          {filteredTasks.length > 0 ? (
            <>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="h3 mb-0">Available Tasks</h2>
                <span className="badge bg-primary fs-6">
                  {filteredTasks.length} task{filteredTasks.length !== 1 ? 's' : ''} found
                </span>
              </div>
              
              <div className="row g-4">
                {filteredTasks.map(task => (
                  <div key={task.taskId} className="col-lg-6 col-xl-4">
                    <div className="task-card">
                      <TaskCard
                        task={task}
                        selectedSolution={selectedSolutions[task.taskId]}
                        onSolutionChange={handleSolutionChange}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-5">
              <div className="card border-0 shadow-sm">
                <div className="card-body py-5">
                  <div className="mb-4">
                    <i className="bi bi-search text-muted" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h3 className="card-title text-muted mb-3">No tasks found</h3>
                  <p className="card-text text-muted mb-4">
                    Try adjusting your filters or search query to find tasks.
                  </p>
                  <button 
                    className="btn btn-outline-primary"
                    onClick={() => setFilters({ year: null, skill: null, query: '', complexityLevel: null, weekNumbers: null })}
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

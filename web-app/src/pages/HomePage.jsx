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
    query: '' 
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

    // Apply search query filter
    if (filters.query.trim()) {
      const query = filters.query.toLowerCase();
      filtered = filtered.filter(task => 
        task.title.toLowerCase().includes(query) ||
        task.examCode.toLowerCase().includes(query) ||
        task.skillTags.some(skill => skill.toLowerCase().includes(query))
      );
    }

    // Sort by year desc, then by exam code asc
    filtered.sort((a, b) => {
      if (a.year !== b.year) {
        return b.year - a.year; // Descending by year
      }
      return a.examCode.localeCompare(b.examCode); // Ascending by exam code
    });

    return filtered;
  }, [filters]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="mb-4">Exam Tasks Application</h1>
          <p className="lead mb-4">Browse and explore exam tasks with different solution approaches.</p>
          
          {/* Filter Bar */}
          <FilterBar 
            filters={filters} 
            onFiltersChange={handleFiltersChange} 
          />

          {/* Task List */}
          <div className="row">
            <div className="col-12">
              {filteredTasks.length > 0 ? (
                <>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2>Available Tasks</h2>
                    <span className="badge bg-secondary">
                      {filteredTasks.length} task{filteredTasks.length !== 1 ? 's' : ''} found
                    </span>
                  </div>
                  
                  <div className="row">
                    {filteredTasks.map(task => (
                      <div key={task.taskId} className="col-lg-6 col-xl-4 mb-4">
                        <TaskCard
                          task={task}
                          selectedSolution={selectedSolutions[task.taskId]}
                          onSolutionChange={handleSolutionChange}
                        />
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-5">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title text-muted">No tasks found</h3>
                      <p className="card-text text-muted">
                        Try adjusting your filters or search query to find tasks.
                      </p>
                      <button 
                        className="btn btn-outline-primary"
                        onClick={() => setFilters({ year: null, skill: null, query: '' })}
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
      </div>
    </div>
  );
};

export default HomePage;

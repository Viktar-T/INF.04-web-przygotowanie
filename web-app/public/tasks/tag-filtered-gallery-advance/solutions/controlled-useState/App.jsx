import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react'

function App() {
  // Static data with images and their categories
  const [images] = useState([
    {
      id: 1,
      src: 'https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Natura+1',
      title: 'Las sosnowy',
      categories: ['Natura', 'Zieleń']
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/300x200/2196F3/FFFFFF?text=Architektura+1',
      title: 'Nowoczesny budynek',
      categories: ['Architektura', 'Nowoczesność']
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/300x200/FF9800/FFFFFF?text=Miasto+1',
      title: 'Ulica miejska',
      categories: ['Miasto', 'Architektura']
    },
    {
      id: 4,
      src: 'https://via.placeholder.com/300x200/9C27B0/FFFFFF?text=Natura+2',
      title: 'Górski krajobraz',
      categories: ['Natura', 'Góry']
    },
    {
      id: 5,
      src: 'https://via.placeholder.com/300x200/E91E63/FFFFFF?text=Architektura+2',
      title: 'Zabytkowy kościół',
      categories: ['Architektura', 'Zabytki']
    },
    {
      id: 6,
      src: 'https://via.placeholder.com/300x200/607D8B/FFFFFF?text=Miasto+2',
      title: 'Plac miejski',
      categories: ['Miasto', 'Architektura']
    },
    {
      id: 7,
      src: 'https://via.placeholder.com/300x200/795548/FFFFFF?text=Natura+3',
      title: 'Jezioro',
      categories: ['Natura', 'Woda']
    },
    {
      id: 8,
      src: 'https://via.placeholder.com/300x200/3F51B5/FFFFFF?text=Architektura+3',
      title: 'Wieżowiec',
      categories: ['Architektura', 'Nowoczesność']
    }
  ])

  // State for active categories (chips)
  const [activeCategories, setActiveCategories] = useState([])
  
  // State for download counts per image
  const [downloadCounts, setDownloadCounts] = useState({})

  // Load download counts from localStorage on mount
  useEffect(() => {
    const savedCounts = localStorage.getItem('imageDownloadCounts')
    if (savedCounts) {
      try {
        const counts = JSON.parse(savedCounts)
        setDownloadCounts(counts)
      } catch (error) {
        console.error('Error loading download counts from localStorage:', error)
      }
    }
  }, [])

  // Save download counts to localStorage whenever counts change
  useEffect(() => {
    localStorage.setItem('imageDownloadCounts', JSON.stringify(downloadCounts))
  }, [downloadCounts])

  // Get all unique categories from images
  const getAllCategories = () => {
    const categories = new Set()
    images.forEach(image => {
      image.categories.forEach(category => {
        categories.add(category)
      })
    })
    return Array.from(categories)
  }

  // Filter images based on active categories
  const getFilteredImages = () => {
    if (activeCategories.length === 0) {
      return images
    }
    return images.filter(image => 
      image.categories.some(category => activeCategories.includes(category))
    )
  }

  // Toggle category chip
  const toggleCategory = (category) => {
    setActiveCategories(prev => {
      const newCategories = prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
      
      // Log visible image IDs after each toggle
      const filteredImages = images.filter(image => 
        image.categories.some(cat => newCategories.includes(cat))
      )
      const visibleIds = newCategories.length === 0 
        ? images.map(img => img.id)
        : filteredImages.map(img => img.id)
      
      console.log(visibleIds)
      return newCategories
    })
  }

  // Handle download button click
  const handleDownload = (imageId) => {
    setDownloadCounts(prev => ({
      ...prev,
      [imageId]: (prev[imageId] || 0) + 1
    }))
    console.log(`Pobrano obraz ID: ${imageId}`)
  }

  // Log all images on initial load
  useEffect(() => {
    console.log(images.map(img => img.id))
  }, [])

  const allCategories = getAllCategories()
  const filteredImages = getFilteredImages()

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Galeria obrazów z filtrowaniem</h2>
      
      {/* Category chips */}
      <div className="mb-4">
        <h5 className="mb-3">Filtry kategorii:</h5>
        <div className="d-flex flex-wrap gap-2">
          {allCategories.map(category => (
            <span
              key={category}
              className={`badge ${activeCategories.includes(category) 
                ? 'badge-primary' 
                : 'badge-outline-primary'
              }`}
              style={{
                cursor: 'pointer',
                fontSize: '14px',
                padding: '8px 12px'
              }}
              onClick={() => toggleCategory(category)}
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Images gallery */}
      <div className="row">
        {filteredImages.map(image => (
          <div key={image.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img 
                src={image.src} 
                className="card-img-top" 
                alt={image.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{image.title}</h6>
                <div className="mt-auto">
                  <small className="text-muted">
                    Kategorie: {image.categories.join(', ')}
                  </small>
                  <div className="mt-2 d-flex justify-content-between align-items-center">
                    <span className="badge badge-info">
                      Pobrania: {downloadCounts[image.id] || 0}
                    </span>
                    <button 
                      className="btn btn-sm btn-success"
                      onClick={() => handleDownload(image.id)}
                    >
                      Pobierz
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show message when no images match filters */}
      {filteredImages.length === 0 && activeCategories.length > 0 && (
        <div className="alert alert-info text-center">
          <h5>Brak obrazów</h5>
          <p>Żaden obraz nie pasuje do wybranych kategorii.</p>
        </div>
      )}
    </div>
  )
}

export default App

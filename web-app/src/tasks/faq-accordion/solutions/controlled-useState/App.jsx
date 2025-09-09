import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

function App() {
  // FAQ data
  const [faqData] = useState([
    {
      id: 'q1',
      title: 'Jak rozpocząć pracę z aplikacją?',
      content: 'Aby rozpocząć pracę z aplikacją, wystarczy kliknąć na przycisk "Start" w głównym menu. Następnie możesz przejść przez krótki przewodnik, który pokaże Ci wszystkie dostępne funkcje. Aplikacja jest intuicyjna i łatwa w obsłudze.'
    },
    {
      id: 'q2',
      title: 'Czy moje dane są bezpieczne?',
      content: 'Tak, bezpieczeństwo Twoich danych jest dla nas priorytetem. Wszystkie informacje są szyfrowane i przechowywane zgodnie z najwyższymi standardami bezpieczeństwa. Nie udostępniamy danych osobowych osobom trzecim bez Twojej wyraźnej zgody.'
    },
    {
      id: 'q3',
      title: 'Jak mogę skontaktować się z pomocą techniczną?',
      content: 'Możesz skontaktować się z naszym zespołem pomocy technicznej na kilka sposobów: przez formularz kontaktowy na stronie, wysyłając email na adres pomoc@aplikacja.pl lub dzwoniąc pod numer +48 123 456 789. Nasz zespół odpowiada w ciągu 24 godzin.'
    }
  ])

  // State for active accordion item
  const [activeItem, setActiveItem] = useState(null)

  // Handle accordion item click
  const handleAccordionClick = (itemId) => {
    if (activeItem === itemId) {
      // If clicking the same item, close it
      setActiveItem(null)
      console.log(`Zamknij: ${itemId}`)
    } else {
      // Open the clicked item and close others
      setActiveItem(itemId)
      console.log(`Otwórz: ${itemId}`)
    }
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Najczęściej zadawane pytania</h2>
      
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* FAQ Accordion */}
          <div className="accordion" id="faqAccordion">
            {faqData.map((item, index) => (
              <div key={item.id} className="card">
                <div className="card-header" id={`heading${index}`}>
                  <h5 className="mb-0">
                    <button
                      className={`btn btn-link btn-block text-left ${activeItem === item.id ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => handleAccordionClick(item.id)}
                      aria-expanded={activeItem === item.id ? 'true' : 'false'}
                      aria-controls={`collapse${index}`}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <span>{item.title}</span>
                        <span className={`fas fa-chevron-${activeItem === item.id ? 'up' : 'down'}`}></span>
                      </div>
                    </button>
                  </h5>
                </div>
                <div
                  id={`collapse${index}`}
                  className={`collapse ${activeItem === item.id ? 'show' : ''}`}
                  aria-labelledby={`heading${index}`}
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="card mt-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Instrukcje</h6>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mb-0">
                <li>• Kliknij na pytanie aby otworzyć odpowiedź</li>
                <li>• Tylko jedno pytanie może być otwarte jednocześnie</li>
                <li>• Kliknięcie ponownie na otwarte pytanie je zamyka</li>
                <li>• Otwieranie nowego pytania automatycznie zamyka poprzednie</li>
                <li>• Sprawdź konsolę przeglądarki aby zobaczyć logi otwierania/zamykania</li>
                <li>• Akordeon używa Bootstrap collapse dla płynnych animacji</li>
              </ul>
            </div>
          </div>

          {/* FAQ Summary */}
          <div className="card mt-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Podsumowanie</h6>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-md-4">
                  <h5 className="text-primary">{faqData.length}</h5>
                  <small className="text-muted">Pytania</small>
                </div>
                <div className="col-md-4">
                  <h5 className="text-info">{activeItem ? '1' : '0'}</h5>
                  <small className="text-muted">Otwarte</small>
                </div>
                <div className="col-md-4">
                  <h5 className="text-success">{faqData.length - (activeItem ? 1 : 0)}</h5>
                  <small className="text-muted">Zamknięte</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

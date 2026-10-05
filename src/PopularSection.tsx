import { useState } from 'react';
import './PopularSection.css';

interface PopularSectionProps {
  onBack: () => void;
}

const modelsData = [
  {
    id: 1,
    name: 'NIKE AIR MAX 720',
    colorName: 'GREEN CARBON',
    price: '250$',
    image: '/Nike Air Max 720.webp',
    desc1: 'Powered by Nike’s tallest 38mm full-length Air unit, it delivers unmatched cushioning and a plush, comfortable ride.',
    desc2: 'The "Green Carbon" edition pairs a breathable mesh and synthetic upper with a semi-translucent mint-green sole and bold black accents.',
    desc3: 'This sleek silhouette and striking color contrast create an energetic, alien-inspired, high-tech aesthetic.'
  },
  {
    id: 2,
    name: 'ADIDAS FUTURECRAFT 4D',
    colorName: 'DANIEL ARSHAM COLLAB',
    price: '300$',
    image: '',
    desc1: 'Futurecraft 4D description goes here.',
    desc2: '',
    desc3: ''
  },
  {
    id: 3,
    name: 'Y-3 KAIWA',
    colorName: 'OFF WHITE BLACK',
    price: '350$',
    image: '',
    desc1: 'Y-3 Kaiwa description goes here.',
    desc2: '',
    desc3: ''
  },
  { id: 4, name: 'ACRONYM X NIKE AIR PRESTO', colorName: '', price: '', image: '', desc1: 'Acronym x Presto description goes here.', desc2: '', desc3: '' },
  { id: 5, name: 'PUMA FUTURE RIDER GALACTIC', colorName: '', price: '', image: '', desc1: 'Puma Future Rider description goes here.', desc2: '', desc3: '' },
  { id: 6, name: 'BALENCIAGA TRACK 3.0', colorName: '', price: '', image: '', desc1: 'Balenciaga Track 3.0 description goes here.', desc2: '', desc3: '' },
  { id: 7, name: 'NIKE ISPA OVERREACT', colorName: '', price: '', image: '', desc1: 'Nike ISPA Overreact description goes here.', desc2: '', desc3: '' },
  { id: 8, name: 'RICK OWENS × ADIDAS RUNNER', colorName: '', price: '', image: '', desc1: 'Rick Owens x Adidas description goes here.', desc2: '', desc3: '' }
];

export default function PopularSection({ onBack }: PopularSectionProps) {
  const [selectedModel, setSelectedModel] = useState<typeof modelsData[0] | null>(null);

  return (
    <section className="popular-section">
      <h1 className="sr-only">POPULAR MODELS</h1>
      
      <div className="models-list">
        {modelsData.map((model) => (
          <button
            key={model.id}
            className={`model-btn btn-outline ${selectedModel?.id === model.id ? 'active' : ''}`}
            onClick={() => setSelectedModel(model)}
          >
            {model.name}
          </button>
        ))}

        <button className="back-btn btn-back" onClick={onBack}>
          BACK TO MAIN
        </button>
      </div>

      <div className="model-details">
        {selectedModel ? (
          <div className="details-wrapper">
            <div className="details-header">
              <h2>{selectedModel.name}</h2>
              <p className="color-name">{selectedModel.colorName}</p>
            </div>

            <div className="details-image">
              {selectedModel.image && (
                <img src={selectedModel.image} alt={selectedModel.name} />
              )}
            </div>

            <div className="details-bottom">
              <div className="details-description">
                <p>{selectedModel.desc1}</p>
                <p>{selectedModel.desc2}</p>
                <p>{selectedModel.desc3}</p>
              </div>

              <div className="details-action">
                <div className="details-price">
                  <p>{selectedModel.price}</p>
                </div>
                <button className="btn-buy">BUY</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <p>SELECT A MODEL TO VIEW DETAILS</p>
          </div>
        )}
      </div>
    </section>
  );
}
import React, { useState } from 'react'; // Asegúrate de importar useState
import './BrandMenu.css';
import AlfaRomeo from './assets/alfa-romeo-logo-BC9622CF7F-seeklogo.com.png';
import audi from './assets/Audi-logo-ED84DFE2E3-seeklogo.com.png';
import bmw from './assets/bmw-logo-248C3D90E6-seeklogo.com.png';
import chevrolet from './assets/Chevrolet-logo-E01CD324DF-seeklogo.com.png';
import citroen from './assets/citroen-2009-logo-456E9DFB33-seeklogo.com.png';
import ds from './assets/ds-automobiles-logo-4416DEADBF-seeklogo.com.png';
import fiat from './assets/fiat-logo-41F5AE48DB-seeklogo.com.png';
import ford from './assets/ford-logo-CA98E97A2B-seeklogo.com.png';
import honda from './assets/honda-silver-logo-E810C6A8A4-seeklogo.com.png';
import hyundai from './assets/hyundai-logo-50C0EC8456-seeklogo.com.png';
import isuzu from './assets/isuzu-logo-9E20A6EA39-seeklogo.com.png';
import jeep from './assets/Jeep-logo-95D59945A7-seeklogo.com.png';
import kia from './assets/kia-new-2021-logo-BBE1BFFF1A-seeklogo.com.png';
import mercedes from './assets/Mercedes-Benz-logo-18B23CBC98-seeklogo.com.png';
import mini from './assets/mini-cooper-logo-202D293624-seeklogo.com.png';
import nissan from './assets/nissan-2020-logo-200825E928-seeklogo.com.png';
import peugeot from './assets/peugeot-new-2021-logo-8E83714E02-seeklogo.com.png';
import renault from './assets/renault-new-2021-logo-C364511D2C-seeklogo.com.png';
import suzuki from './assets/suzuki-logo-5311518DD9-seeklogo.com.png';
import toyota from './assets/toyota-logo-BE11A14C6B-seeklogo.com.png';
import volkswagen from './assets/volkswagen-new-2019-logo-4BCCD0D7F9-seeklogo.com.png';

const brands = [
  { name: "Alfa Romeo", logo: AlfaRomeo, models: ["Giulia", "Stelvio", "Alfa 4C"] },
  { name: "Audi", logo: audi, models: ["A4", "Q5", "A6"] },
  { name: "BMW", logo: bmw, models: ["X3", "M3", "Z4"] },
  { name: "Chevrolet", logo: chevrolet, models: [] }, // Añadir modelos si los hay
  { name: "Citroën", logo: citroen, models: [] },
  { name: "Ds", logo: ds, models: [] },
  { name: "Fiat", logo: fiat, models: [] },
  { name: "Ford", logo: ford, models: [] },
  { name: "Honda", logo: honda, models: [] },
  { name: "Hyundai", logo: hyundai, models: [] },
  { name: "Isuzu", logo: isuzu, models: [] },
  { name: "Jeep", logo: jeep, models: [] },
  { name: "Kia", logo: kia, models: [] },
  { name: "Mercedes-Benz", logo: mercedes, models: [] },
  { name: "Mini", logo: mini, models: [] },
  { name: "Nissan", logo: nissan, models: [] },
  { name: "Peugeot", logo: peugeot, models: [] },
  { name: "Renault", logo: renault, models: [] },
  { name: "Suzuki", logo: suzuki, models: [] },
  { name: "Toyota", logo: toyota, models: [] },
  { name: "Volkswagen", logo: volkswagen, models: [] }
];

export default function BrandMenu() {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleClick = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <div className="brand-menu">
      <h1>Todas las marcas</h1>
      <input type="text" placeholder="Buscar por fabricante o modelo" />
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <button key={index} className="brand-item" onClick={() => handleClick(brand)}>
            <img src={brand.logo} alt={brand.name} />
            <p>{brand.name}</p>
          </button>
        ))}
      </div>
      {selectedBrand && (
        <div className="model-list">
          <h2>Modelos de {selectedBrand.name}</h2>
          {selectedBrand.models.length > 0 ? (
            <ul>
              {selectedBrand.models.map((model, index) => (
                <li key={index}>{model}</li>
              ))}
            </ul>
          ) : (
            <p>No hay modelos disponibles para esta marca.</p>
          )}
        </div>
      )}
    </div>
  );
}

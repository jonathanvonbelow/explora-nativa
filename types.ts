export interface Species {
  id: string;
  mapNumber: number; // Número en la señalética del mapa
  commonName: string;
  scientificName: string;
  family: string;
  shortDescription: string;
  description: string;
  morphology: string;
  culturalUse: string;
  woodUse: string;
  mapPosition: { x: number; y: number }; // Percentage 0-100
  photos: string[]; // Local paths under /images/especies/{id}/
  panoramaUrl: string; // Panoramic image path
  bibliography: string[]; // Fuentes bibliográficas de la ficha
}

export interface TriviaQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index
  explanation: string;
}

export interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
  isObservation?: boolean;
}

export interface EcosystemService {
  title: string;
  description: string;
  icon: 'water' | 'air' | 'soil' | 'bio';
}
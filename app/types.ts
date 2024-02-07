export interface Frame {
    description: string;
    image: string;
    audio: string | null;
  }
  
  export interface Scene {
    frames: Frame[];
    audio: string;
  }
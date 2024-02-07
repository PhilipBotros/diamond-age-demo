import { Frame, Scene } from './types';

import fs from 'fs';
import path from 'path';

const baseDirectory = '../output/computer-think-1';

export async function dataLoadingFunction() {
    const items = fs.readdirSync(baseDirectory, { withFileTypes: true });
  
    const directories = items
      .filter(item => item.isDirectory())
      .map(dir => dir.name)
      .sort((a, b) => parseInt(a) - parseInt(b));
  
    const frames = directories.map(directory => {
      const frameDirectoryPath = path.join(baseDirectory, directory);
      const descriptionFilePath = path.join(frameDirectoryPath, "description.txt");
      const audioFilePath = path.join(frameDirectoryPath, "narration.mp3");
      const imageFilePath = path.join(frameDirectoryPath, "image.png");
  
      const description = fs.existsSync(descriptionFilePath) ? fs.readFileSync(descriptionFilePath, "utf8") : "";
      const audio = fs.existsSync(audioFilePath) ? "data:audio/mp3;base64," + fs.readFileSync(audioFilePath, "base64") : null;
      const image = fs.existsSync(imageFilePath) ? "data:image/png;base64," + fs.readFileSync(imageFilePath, "base64") : "";
  
      return { description, image, audio };
    });
  
    return frames;
  }
  
 export const narrations = [
    {
      narration: [
        {
          speaker: "Maya",
          text: "Wait a minute, how does a computer even think?",
        },
        {
          speaker: "Wu",
          text: "Child of curiosity, think of computers not as thinkers, but as vast libraries filled with information. The processor, the core of the computer, is akin to a wise librarian. It knows where to find every piece of information in this vast library and fetches it when it's needed. Much like how a note played on your violin creates a beautiful sound, when you command, the computer acquires the right 'note' or information.",
        },
      ],
    },
    {
      narration: [
        {
          speaker: "Maya",
          text: "Then, how does the computer know which 'note' to play?",
        },
        {
          speaker: "Nia",
          text: "Imagine you're building a castle in Minecraft. You start with different blocks, don't you? In the computer's world, the 'blocks' are instructions in the form of binary codes. Like a cunning fox swiftly darting between the trees, the processor swiftly sifts through these different binary blocks to find the one it needs.",
        },
      ],
    },
    {
      narration: [
        {
          speaker: "Maya",
          text: "But why binary? Does the computer speak a different language?",
        },
        {
          speaker: "Elara",
          text: "Indeed, darling. Computers communicate with the language of nature, binary. It's as clear to them as leaves rustling in the wind is to us. It's a song of two notes: ones and zeros. Just as your ballet performance is a dance of motions and stillness, the flow of binary codes are a dance of ones and zeros.",
        },
      ],
    },
    {
      narration: [
        {
          speaker: "Maya",
          text: "So a computer doesn't think, it follows instructions in binary, like how I follow the notes when playing my violin. It interprets these instructions like how I interpret the steps in ballet. It's like a complex Minecraft build, where each block is significant. Maybe computers aren't that different from us after all; we also follow instructions, in our own way...",
        },
      ],
    },
  ];
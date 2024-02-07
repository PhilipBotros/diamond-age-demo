// @ts-nocheck
"use client";
import ColorThief from "colorthief";
import { useEffect, useRef, useState } from "react";
import { Frame, Scene } from "../app/types";
import { dataLoadingFunction, narrations } from "../app/dataLoading"

import "../app/globals.css";

export default function Home({ scenesFromProps }) {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement[]>([]);
  const [color, setColor] = useState<number[]>([0, 0, 0]);

  // Use scenes from props directly
  const scenes = scenesFromProps;

  useEffect(() => {
    // Set up audio references
    audioRef.current = scenes.map((_, i) => audioRef.current[i] || null);
  }, [scenes]);

  useEffect(() => {
    // Function to handle the end of the audio
    const handleAudioEnd = () => {
      if (currentSceneIndex < scenes.length - 1) {
        setCurrentSceneIndex(currentSceneIndex + 1);
      } else {
        // Optionally handle the case when all scenes have been played
      }
    };

    // Check if audioRef.current is a valid HTMLAudioElement
    if (audioRef.current instanceof HTMLAudioElement) {
      audioRef.current.play();

      // Add the event listener
      audioRef.current.addEventListener("ended", handleAudioEnd);
    }

    // Cleanup function
    return () => {
      if (audioRef.current instanceof HTMLAudioElement) {
        audioRef.current.removeEventListener("ended", handleAudioEnd);
      }
    };
  }, [currentSceneIndex, scenes]);

  if (!scenes.length) return <div>loading...</div>;

  const getColorFromImage = (imgElement: HTMLImageElement) => {
    if (imgElement.complete) {
      const colorThief = new ColorThief();
      try {
        setColor(colorThief.getColor(imgElement));
      } catch (e) {
        console.error("Error retrieving color from image", e);
      }
    } else {
      imgElement.addEventListener("load", function () {
        const colorThief = new ColorThief();
        setColor(colorThief.getColor(imgElement));
      });
    }
  };


  const currentScene = scenes[currentSceneIndex];

  return (
    <div className="px-0 mx-auto max-w-screen-2xl"> {/* Container for centering and padding */}
      <div className="flex justify-center">
        {scenes.map((scene: Scene, i: number) => (
          <div
            className={`scene ${i === currentSceneIndex ? "current" : "hidden"}`}
            key={`scene-${i}`}
          >
            <audio ref={audioRef} src={scene.audio} controls autoPlay />
            <div className="flex flex-row justify-center"> {/* Center the frames */}
              {scene.frames.map((frame, j) => (
                <div className="frame m-2" key={`frame-${i}-${j}`}> {/* Margin for spacing between frames */}
                  <img
                    src={frame.image}
                    alt="frame"
                    onLoad={(e) => getColorFromImage(e.target as HTMLImageElement)}
                  />
                  <div
                    className="frame-color"
                    style={{ backgroundColor: `rgb(${color.join(",")})` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 text-xl">
              {narrations[i].narration.map((narration, j) => (
                <div className="narration mt-5" key={`narration-${i}-${j}`}>
                  <div className="speaker font-bold">
                    {narration.speaker}:
                  </div>
                  <div className="text">
                    {narration.text}
                    {/* <Typist cursor={{ hideWhenDone: true }}>{narration.text}</Typist> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-5"> {/* Center the button */}
        <button
          className="button text-2xl border-2 border-white rounded-xl py-2 px-5"
          onClick={() => {
            setCurrentSceneIndex(currentSceneIndex < scenes.length - 1 ? currentSceneIndex + 1 : 0);
          }}
        >
          {currentSceneIndex < scenes.length - 1 ? "Next" : "Restart"}
        </button>
      </div>
    </div>
  );
      }


export async function getStaticProps() {
  const framesData = await dataLoadingFunction();

  // Process framesData to create scenes
  const scenes = [];
  for (let i = 0; i < framesData.length; i += 3) {
    const scene = {
      audio: framesData[i].audio,
      frames: framesData.slice(i, i + 3),
    } as Scene;
    scenes.push(scene);
  }

  return {
    props: {
      scenesFromProps: scenes,
    },
  };
}

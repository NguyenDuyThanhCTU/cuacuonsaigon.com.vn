"use client";

import { useEffect, useState } from "react";

export function useTypingEffect(texts: string[], delay: number) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDone, setDone] = useState(false);
  const [resultText, setResultText] = useState("");

  useEffect(() => {
    setResultText("");
    const timeoutIds: ReturnType<typeof setTimeout>[] = [];
    const currentText = texts[currentTextIndex];

    for (let index = 0; index < currentText.length; index++) {
      timeoutIds.push(
        setTimeout(() => {
          setResultText((previousText) => previousText + currentText[index]);
        }, index * delay)
      );
    }

    timeoutIds.push(
      setTimeout(() => {
        setDone(true);
      }, currentText.length * delay)
    );

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [currentTextIndex, delay, texts]);

  useEffect(() => {
    if (!isDone) {
      return;
    }

    const timeoutIds: ReturnType<typeof setTimeout>[] = [];
    const currentText = texts[currentTextIndex];

    timeoutIds.push(
      setTimeout(() => {
        for (let index = currentText.length - 1; index >= 0; index--) {
          timeoutIds.push(
            setTimeout(() => {
              setResultText((previousText) => previousText.slice(0, index));
            }, (currentText.length - index) * delay)
          );
        }

        timeoutIds.push(
          setTimeout(() => {
            setDone(false);
            setCurrentTextIndex(
              (previousIndex) => (previousIndex + 1) % texts.length
            );
          }, currentText.length * delay)
        );
      }, 2000)
    );

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [currentTextIndex, delay, isDone, texts]);

  return resultText;
}

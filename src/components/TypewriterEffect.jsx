import { useState, useEffect } from "react";

const TypewriterEffect = ({
  strings,
  typingSpeed = 300,
  deletingSpeed = 200,
  delayBetween = 1500,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentString = strings[loopNum % strings.length];

      if (isDeleting) {
        // Deleting text
        setCurrentText(currentString.substring(0, currentText.length - 1));
      } else {
        // Typing text
        setCurrentText(currentString.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === currentString) {
        // Finished typing, wait then start deleting
        setTimeout(() => setIsDeleting(true), delayBetween);
      } else if (isDeleting && currentText === "") {
        // Finished deleting, move to next string
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setCurrentIndex((currentIndex + 1) % strings.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    loopNum,
    strings,
    typingSpeed,
    deletingSpeed,
    delayBetween,
    currentIndex,
  ]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
};

export default TypewriterEffect;

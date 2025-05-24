import { useEffect, useState } from "react";

const words = [" desired ", " design ", " desired ", " design "];

const StarAnimation = ({
  onComplete, // callback to parent when animation is done
  slideUp,
}) => {
  const [visibleCircles, setVisibleCircles] = useState([]);
  const [hidingCircles, setHidingCircles] = useState([]);
  const [starAnimationComplete, setStarAnimationComplete] = useState(false);
  const [circleAnimationComplete, setCircleAnimationComplete] = useState(false);
  const [visibleImages, setVisibleImages] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCreativityTextComplete, setIsCreativityTextComplete] = useState(false);
  const [wordCycle, setWordCycle] = useState(0);

  // Typing animation
  useEffect(() => {
    let timeoutId;
    const speed = 200;
    const delay = 1000;

    const typeEffect = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
      } else {
        setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
      }

      let typingSpeed = isDeleting ? speed / 2 : speed;

      if (!isDeleting && currentText === currentWord) {
        typingSpeed = delay;
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => {
          const nextIndex = (prev + 1) % words.length;
          if (prev === words.length - 1) {
            setWordCycle((cycle) => cycle + 1);
          }
          return nextIndex;
        });
      }

      timeoutId = setTimeout(typeEffect, typingSpeed);
    };

    timeoutId = setTimeout(typeEffect, speed);

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, wordIndex]);

  // Star animation
  useEffect(() => {
    const starAnimationTimeout = setTimeout(() => {
      setStarAnimationComplete(true);
    }, 2000);
    return () => clearTimeout(starAnimationTimeout);
  }, []);

  // Circles animation
  useEffect(() => {
    if (starAnimationComplete) {
      const totalCircles = 6;
      let currentIndex = 0;

      const animateCircles = () => {
        setVisibleCircles([currentIndex]);
        setHidingCircles([]);
        currentIndex++;
        if (currentIndex < totalCircles) {
          setTimeout(animateCircles, 200);
        } else {
          setTimeout(() => {
            setVisibleCircles([]);
            setCircleAnimationComplete(true);
          }, 100);
        }
      };
      animateCircles();
    }
  }, [starAnimationComplete]);

  // Creativity images animation
  useEffect(() => {
    if (circleAnimationComplete) {
      const totalImages = 6;
      let currentIndex = 0;
      const interval = setInterval(() => {
        setVisibleImages((prev) => [...prev, currentIndex]);
        currentIndex++;
        if (currentIndex >= totalImages) {
          clearInterval(interval);
          setIsCreativityTextComplete(true);
        }
      }, 300);
    }
  }, [circleAnimationComplete]);

  // Notify parent when ready to slide up
  useEffect(() => {
    if (wordCycle >= 1 && isCreativityTextComplete) {
      onComplete && onComplete();
    }
  }, [wordCycle, isCreativityTextComplete, onComplete]);

  return (
    <div className={`star-animation${slideUp ? " slide-up" : ""}`}>
      <img src="./popup-pulse.svg" alt="" className="popup-pulse" />
      <div className="sa-star-comp">
        <div className={`sa-circle-container ${circleAnimationComplete ? "fade-out" : ""}`}>
          {[1, 2, 3, 4, 5, 6].map((num, index) => (
            <img
              key={index}
              className={`sa-circle${num} circles`}
              src={`./popup-circle${num}.svg`}
              alt={`circle${num}`}
              style={{
                opacity: visibleCircles.includes(index) ? 1 : 0,
                transition: "opacity 0.2s",
              }}
            />
          ))}
        </div>
        <div className="sa-star-sec">
          <img src="./popup-whitestar.svg" alt="" className="sa-back-star" />
          <img src="./popup-star.svg" alt="" className="sa-front-star" />
        </div>
        <div className="sa-star-line"></div>
      </div>
      <div className="sa-creativity-text">
        {[1, 2, 3, 4, 5, 6].map((num, index) => (
          <img
            key={index}
            className={`creativity${num}`}
            src={`./popup-creativity${num}.svg`}
            alt={`creativity${num}`}
            style={{ opacity: visibleImages.includes(index) ? 1 : 0 }}
          />
        ))}
      </div>
      <div className={`sa-animated-txt ${isCreativityTextComplete ? "fade-in" : ""}`}>
        <p>
          Our
          <img className="sa-magical" src="./popup-magical.svg" alt="magical-prompts" />
          solutions are tailormade to boost your productivity,
        </p>
        <p>
          & highly recommended to achieve your
          <span className="popup-text-animation">{currentText}</span>
          <img
            className={`sa-cursor ${isDeleting ? "blink" : ""}`}
            src="./popup-cursor.svg"
            alt="cursor"
          />
          results
        </p>
      </div>
    </div>
  );
};

export default StarAnimation;
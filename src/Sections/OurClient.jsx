import React from "react";
import styled, { keyframes, css } from "styled-components";
import { useDarkMode } from "../Components/DarkModeContext";

const OurClient = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const row1 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  ];

  return (
    <AppContainer
      className={`${
        darkMode ? "dark bg-gray-900 " : "light bg-white "
      }"bg-gray-100 " `}
    >
      <Wrapper>
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">
            Experience{" "}
            <span className="text-loulou-600 dark:text-white">
              the Zenith Difference
            </span>
          </h2>
          <p className="text-center dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            At Zenith Hospitality, we believe that comfort and functionality are
            key to a successful stay. Our thoughtfully designed rooms are
            perfect for both relaxation and productivity, offering a home-like
            atmosphere for our guests.
          </p>
        </div>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image
                  className="dark:bg-gray-800 dark:shadow-lg dark:hover:shadow-lg dark:hover:shadow-black"
                  src={el}
                  alt={`Client ${index + 1}`}
                />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image
                  className="dark:bg-gray-800 dark:shadow-lg dark:hover:shadow-lg dark:hover:shadow-black"
                  src={el}
                  alt={`Client ${index + 1}`}
                />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image
                  className="dark:bg-gray-800 dark:shadow-lg dark:hover:shadow-lg dark:hover:shadow-black"
                  src={el}
                  alt={`Client ${index + 1}`}
                />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image
                  className="dark:bg-gray-800 dark:shadow-lg dark:hover:shadow-lg dark:hover:shadow-black"
                  src={el}
                  alt={`Client ${index + 1}`}
                />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
};

export default OurClient;

const AppContainer = styled.div`
  width: 100%;

  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-top:10px
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

import { 
  EndResult, 
  Feature, 
  Hero, 
  ImageSlider, 
  ProvidedSolution, 
  Results, 
  TechStack, 
  TypographySection, 
  Vision 
} from "./_components";
import { pageData } from "./data";

export default function Home() {
  const data = pageData[0];

  const sections = [
    <Hero key="hero" data={data} />,
    <Vision key="vision" data={data} />,
    <ProvidedSolution key="provided-solution" data={data} />,
    <Feature key="feature" data={data} />,
    <ImageSlider key="image-slider" data={data} />,
    <TypographySection key="typography-section" data={data} />,
    <Results key="results" data={data} />,
    <TechStack key="tech-stack" data={data} />,
    <EndResult key="end-result" data={data} />
  ];

  return (
    <section>
      {sections}
    </section>
  );
}

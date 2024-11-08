import { EndResult, Feature, Hero, ImageSlider, ProvidedSolution, Results, TechStack, TypographySection, Vision } from "../_components";
import { pageData } from "../data";

export default async function Home({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id

    const filterData = pageData.filter((x) => x.id == Number(id))[0]

    let data = filterData
    if (filterData === undefined) {
        data = pageData[0]
    }

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

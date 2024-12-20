// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
    return (
        <Section classProp={about.section}>
            <Container spacing={["verticalXXXLrg"]}>
                <SectionTitle
                    title="About Me"
                    preTitle="Synopsis"
                    subTitle="I am a versatile UI/UX designer and Full Stack Developer with a passion for creating intuitive and visually appealing user experiences. With a strong foundation in both design and development, I specialize in bringing projects to life from concept to completion."
                />
                <section className={about.content}>
                    <div className={about.image} style={{ flex: 1, boxShadow: '0 4px 25px 8px rgba(255, 255, 255, 0.09)'}}>
                        <img src="/img/mypic.jpg" alt="Me" />
                    </div>
                    <div className={about.copy}>
                        <CopyBlock
                            title="Softskills that pay the bills"
                            containerClass={about.container}
                            iconClass={about.icon}
                            icon={["fas", "ear-listen"]}
                            copy="With a knack for clear communication and a keen eye for detail, I excel in fostering collaborative environments where creativity thrives. My adaptability allows me to navigate diverse challenges with ease, while my empathy ensures I understand and meet the needs of clients and colleagues alike. I prioritize integrity and reliability in all aspects of my work, aiming always for excellence in everything I undertake."
                        />
                    </div>
                </section>
            </Container>
        </Section>
    );
}

const methods = [
    { key: "planet-moon", name: "User Research", type: "fad" },
    { key: "qrcode", name: "Digital Strategy", type: "fad" },
    { key: "window", name: "Design Systems", type: "fad" },
    { key: "cubes", name: "Product Strategy", type: "far" },
    { key: "layer-plus", name: "Brand Strategy", type: "fad" },
    { key: "solar-system", name: "Operations", type: "fad" },
];

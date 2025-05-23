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
                    subTitle="I’m a UI/UX designer and full-stack developer who loves turning ideas into cool, easy-to-use apps. I’m comfortable jumping between designing smooth interfaces and writing solid code to bring projects to life. Besides building stuff, I’m into open source — it’s a great way to learn, share, and be part of something bigger. Always down to collaborate and create things that people actually enjoy using."
                />
                <section className={about.content}>
                    <div className={about.image} style={{ flex: 1, boxShadow: '0 4px 25px 8px rgba(255, 255, 255, 0.09)'}}>
                        <img src="/img/myimg.jpg" alt="Me" />
                    </div>
                    <div className={about.copy}>
                        <CopyBlock
                            title="Soft skills that make a difference"
                            containerClass={about.container}
                            iconClass={about.icon}
                            icon={["fas", "ear-listen"]}
                            copy="I’m good at clear communication and paying attention to the little things that matter. I work well with others and love being part of a creative team. I’m flexible and open to new ideas, handling challenges without stress. Most importantly, I listen closely to what clients and teammates need and always aim to deliver my best with honesty and consistency."
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

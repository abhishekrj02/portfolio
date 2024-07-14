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
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Technical />
 */
export default function Technical() {
    return (
        <Section classProp={`${about.section} borderBottom`}>
            <Container spacing={["verticalXXXLrg"]}>
                <SectionTitle
                    title="Technical"
                    preTitle="Hardskills"
                    subTitle="Leveraging a multifaceted skill set, I develop innovative solutions that seamlessly blend technology and creativity."
                />
                <section className={`${about.content} ${about.container}`}>
                    <div className={about.copy}>
                        <BadgesBlock
                            title="Software I love to work with"
                            copy="Passionate about digital creation, I thrive on using cutting-edge software to bring innovative ideas to life."
                            list={software}
                            block="software"
                            fullContainer="fullContainer"
                            icon="grid-2-plus"
                            containerClass={about.container}
                            headerIcon={about.icon}
                        />
                        <BadgesBlock
                            title="Technologies I love to build with"
                            copy="I thrive on crafting elegant solutions with code, embracing the full stack from front-end interfaces to back-end systems and everything in between."
                            list={tech}
                            block="tech"
                            fullContainer="fullContainer"
                            icon="laptop-code"
                            containerClass={about.container}
                            headerIcon={about.icon}
                        />
                    </div>
                    <div className={`${about.image} ${about.technicalSvg}`}>
                        <Image
                            src="/img/dataism-24.svg"
                            width={477}
                            height={1111}
                            alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
                        />
                    </div>
                </section>
            </Container>
            {/* <SectionGridBg gridSize={4}/> */}
        </Section>
    );
}

const software = [
    { key: "photoshop-plain", name: "Photoshop", type: "devicon" },
    { key: "illustrator-plain", name: "Illustrator", type: "devicon" },
    { key: "figma-plain", name: "Figma", type: "devicon" },
    { key: "vscode-plain", name: "VSCode", type: "devicon" },
    { key: "postman-plain", name: "Postman", type: "devicon" },
    { key: "aftereffects-plain", name: "After Effects", type: "devicon" },
    { key: "premierepro-plain", name: "Premiere Pro", type: "devicon" },
];

const tech = [
    { key: "html5-plain", name: "HTML5", type: "devicon" },
    { key: "css3-plain", name: "CSS3", type: "devicon" },
    { key: "javascript-plain", name: "JavaScript", type: "devicon" },
	{ key: "tailwindcss-plain", name: "tailwindcss", type: "devicon" },
    { key: "react-plain", name: "React", type: "devicon" },
    { key: "nextjs-plain", name: "NextJS", type: "devicon" },
    { key: "nodejs-plain", name: "NodeJS", type: "devicon" },
    { key: "express-original", name: "ExpressJS", type: "devicon" },
    { key: "mongoose-original", name: "MONGOOSE", type: "devicon" },
    { key: "jquery-plain", name: "jQuery", type: "devicon" },
    { key: "git-plain", name: "Git", type: "devicon" },
    { key: "mysql-plain", name: "MySQL", type: "devicon" },
    { key: "mongodb-plain", name: "MongoDB", type: "devicon" },
	{ key: "cplusplus-plain", name: "C++", type: "devicon" },
	{ key: "python-plain", name: "python", type: "devicon" },
];

import Section from "../../structure/section";
import Container from "../../structure/container";
import SectionTitle from "../../blocks/section.title.block";
import Icon from "../../utils/icon.util";
import settings from "../../../content/_settings.json";
import css from "../../../styles/sections/articles/recent.module.scss";

export default function Recent() {
    const categories = ["Figma", "Photoshop", "Illustrator"];

    return (
        <Section classProp="borderBottom">
            <Container spacing={"verticalXXXXLrg"}>
                <SectionTitle
                    title="UI/UX Case Studies"
                    preTitle="Informative"
                />
                <section className={css.projects}>
                    <>
                        <article className={css.project}>
                            <span className={css.featuredImage}>
                                <img
                                    src={settings.behance.thumbnail}
                                    alt="Article thumbnail"
                                />
                            </span>
                            <span className={css.header}>
                                <a
                                    href={settings.behance.link}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    {settings.behance.title}{" "}
                                    <Icon
                                        icon={[
                                            "fas",
                                            "up-right-from-square",
                                        ]}
                                    />
                                </a>
                            </span>
                            <span className={css.descriptionContainer}>
                                {settings.behance.description}
                            </span>
                            <span className={css.details}>
                                <p>By {settings.behance.author}</p>
                                <p className={css.pushedAt}>
                                    {settings.behance.date}
                                </p>
                            </span>
                            <span className={css.topicsContainer}>
                                {categories.map((e, index) => {
                                    return (
                                        <span
                                            key={index}
                                            className={css.topics}
                                        >
                                            {e}
                                        </span>
                                    );
                                })}
                            </span>
                        </article>
                    </>
                </section>
            </Container>
        </Section>
    );
}

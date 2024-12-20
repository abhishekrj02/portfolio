import Section from "../../structure/section";
import Container from "../../structure/container";
import SectionTitle from "../../blocks/section.title.block";
import Icon from "../../utils/icon.util";
import data from "../../../content/case-studies/data.json";
import css from "../../../styles/sections/articles/recent.module.scss";

export default function CaseStudies() {
    return (
        <Section classProp="borderBottom">
            <Container spacing={"verticalXXXXLrg"}>
                <SectionTitle
                    title="UI/UX Case Studies"
                    preTitle="Informative"
                />
                <section className={css.projects}>
                    <>
                        {data.map((data, index) => (
                            <article key={index} className={css.project}>
                                <span className={css.featuredImage}>
                                    <img
                                        src={data.thumbnail}
                                        alt="Article thumbnail"
                                    />
                                </span>
                                <span className={css.header}>
                                    <a
                                        href={data.link}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        {data.title}{" "}
                                        <Icon
                                            icon={[
                                                "fas",
                                                "up-right-from-square",
                                            ]}
                                        />
                                    </a>
                                </span>
                                <span className={css.descriptionContainer}>
                                    {data.description}
                                </span>
                                <span className={css.details}>
                                    <p>By {data.author}</p>
                                    <p className={css.pushedAt}>{data.date}</p>
                                </span>
                                <span className={css.topicsContainer}>
                                    {data.categories.map((e, index) => {
                                        return (
                                            <span
                                                key={index}
                                                className={css.topics}
                                            >
                                                <IconModule iconKey={e.icon}/>
                                                {e.name}
                                            </span>
                                        );
                                    })}
                                </span>
                            </article>
                        ))}
                    </>
                </section>
            </Container>
        </Section>
    );
}

function IconModule({ iconKey }) {
    return <i className={`devicon-${iconKey}`} />;
}

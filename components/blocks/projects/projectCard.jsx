import { useEffect } from "react";
import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Badges from "../../utils/badge.list.util";
import Icon from "../../utils/icon.util";
import css from "../../../styles/sections/projects/featured.module.scss";
import Image from "next/image";
import proimage from "../../../public/img/code3.jpg"


export default function ProjectCard({ content }, index) {
    const { project, url, repo, repoUrl, img, descriptionTitle, description, stack } =
        content;

    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.25,
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <m.section
            key={index}
            className={css.project}
            //framer-motion
            ref={ref}
            variants={container}
            initial={["rest", "hidden"]}
            whileHover="hover"
            animate={controls}
        >
            <div className={css.details}>
                <div className={css.projectHeader}>
                    <div className={css.header}>
                        <h3 className="highlight">{project}</h3>
                        <span className={css.privateOr}>
                            <a href={repoUrl} target="_blank">
                                <i className="devicon-github-plain"></i>
                                {" "}
                                {repo}
                                {"  "}
                                <Icon icon={['fas', 'up-right-from-square']} />
                            </a>
                        </span>
                    </div>
                    <div>
                        <Image src={img} alt="Your image"
                            layout="responsive"
                            width={100}
                            height={50}>
                        </Image>
                    </div>
                    <div className={css.description}>
                        <p>
                            <strong>{descriptionTitle}</strong> {description}
                        </p>
                    </div>
                    <div className={css.stackContainer}>
                        <Badges
                            list={stack}
                            block="stack"
                            fullContainer={false}
                            color={false}
                        />
                    </div>
                    <m.div variants={""} className={css.viewProject}>
                        <a href={url} target="_blank">
                            <Icon icon={["fas", "arrow-right-to-bracket"]} />
                        </a>
                    </m.div>
                </div>
            </div>
        </m.section>
    );
}

const container = {
    hidden: {
        transition: {
            delayChildren: 0.125,
            staggerChildren: 0.0625,
        },
    },
    visible: {
        transition: {
            delayChildren: 0.125,
            staggerChildren: 0.25,
        },
    },
    rest: {
        transition: {
            delayChildren: 0,
            staggerChildren: 0,
        },
    },
    hover: {
        transition: {
            delayChildren: 0,
            staggerChildren: 0,
        },
    },
};

const item = {
    hidden: {
        y: 75,
        opacity: 0,
        transition: {
            type: "tween",
            ease: "easeIn",
            duration: 0.35,
        },
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.5,
        },
    },
};

const hoverLeft = {
    rest: {
        x: 0,
    },
    hover: {
        x: -20,
    },
};

const hoverRight = {
    rest: {
        x: 0,
    },
    hover: {
        x: 20,
    },
};

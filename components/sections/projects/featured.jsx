import Section 		from '../../structure/section';
import Container 	from '../../structure/container';
import SectionTitle from '../../blocks/section.title.block'
import css 			from '../../../styles/sections/projects/featured.module.scss'
import content 		from '../../../content/projects/featured.json'
import ProjectCard from '../../blocks/projects/projectCard';

export default function FeaturedProjects() {
	return (
		<Section classProp={css.hasBg}>	
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Featured Projects"
					preTitle="Web"
					subTitle="Showcasing talent through key projects"
				/> 				{
				content.map( (data, index) => {
					return (
						<ProjectCard content={data} index={index} key={index} />
					)
				})
				}
			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}
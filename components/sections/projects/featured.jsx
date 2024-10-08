import FeaturedProject from '../../blocks/projects/featured'


// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';
import Badges 		from '../../utils/badge.list.util'
import Icon 		from '../../utils/icon.util'
import SectionTitle from '../../blocks/section.title.block'

import css 			from '../../../styles/sections/projects/featured.module.scss'
import content 		from '../../../content/projects/featured.json'

export default function FeaturedProjects() {

	return (
		<Section classProp={css.hasBg}>	
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Featured Projects"
					preTitle="MERN Stack"
					subTitle="Showcasing talent through key projects"
				/> 				{
				content.map( (data, index) => {
					return (
						<FeaturedProject content={data} index={index} key={index} />
					)
				})
				}
			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
		// <Section classProp={css.hasBg}>	
		// 	<Container>
		// 		<h2 className="fullHeight centered">Coming Soon!</h2>
		// 		<style jsx>{`
		// 		.fullHeight {
		// 			min-height: 500px;
		// 			height: 100vh;
		// 			max-height: 1200px;
		// 		}
		// 		.centered {
		// 			display: flex;
		// 			justify-content: center;
		// 			align-items: center;
		// 		}
		// 	`}</style>
		// 	</Container>
		// 	<div className={css.bgContainer}>
		// 		<span className={css.orbitalBg}>
		// 			<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
		// 			<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
		// 			<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
		// 		</span>
		// 		<span className={css.afterGlowBg}></span>
		// 	</div>
		// </Section>
	)
}
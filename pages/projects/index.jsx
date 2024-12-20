import FeaturedProjects from '../../components/sections/projects/featured'
import Color  from '../../components/utils/page.colors.util'
import colors from '../../content/projects/_colors.json'

export default function Projects() {
	return (
		<>
		<Color colors={colors} />
		<FeaturedProjects />
		</>
	)
}

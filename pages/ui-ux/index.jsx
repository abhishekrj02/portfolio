import CaseStudies from "../../components/sections/articles/caseStudies";
import Color from "../../components/utils/page.colors.util";
import colors from "../../content/articles/_colors.json";
import settings from "../../content/_settings.json";


const setting = settings.behance;
export default function Articles() {
    return (
        <>
            <Color colors={colors} />
            <CaseStudies />
        </>
    );
}

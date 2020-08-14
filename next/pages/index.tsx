import { getLayoutBySlug } from '../core/api';
import Layout from '../components/Layout';
import Stack from '../components/Stack';
import Container from '../components/Container';
import {
    ILayoutCopy,
    ILayoutHeroImage,
    ILayoutHighlightedCourse,
} from '../@types/generated/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import CopyStack from '../components/CopyStack';

export default function Home(props: Props) {
    return (
        <div>
            <Layout>
                {props.layout.map((layout) => (
                    <CopyStack
                        key={layout.sys.id}
                        id={layout.sys.id}
                        visualStyle={layout.fields.visualStyle}>
                        {documentToReactComponents(layout.fields.content)}
                    </CopyStack>
                ))}
            </Layout>
        </div>
    );
}

export async function getStaticProps({ preview = false }) {
    const layout = await getLayoutBySlug('membership', true);

    return {
        props: { preview, layout },
    };
}

interface Props {
    preview: boolean;
    layout: any;
}

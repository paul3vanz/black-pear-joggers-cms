import { getLayoutBySlug } from '../core/api';
import Layout from '../components/Layout';
import Stack from '../components/Stack';
import Container from '../components/Container';
import {
    ILayoutCopy,
    ILayoutHeroImage,
    ILayoutHighlightedCourse,
} from '../@types/generated/contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import CopyStack from '../components/CopyStack';

export default function Home(props: Props) {
    console.log(props.layout);

    return (
        <div>
            <Layout>
                {props.layout.map((layout) => (
                    <CopyStack
                        key={layout.sys.id}
                        id={layout.sys.id}
                        visualStyle={layout.fields.visualStyle}
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: documentToHtmlString(
                                    layout.fields.content
                                ),
                            }}
                        ></div>
                    </CopyStack>
                ))}
            </Layout>
        </div>
    );
}

export async function getStaticProps({ preview = false }) {
    const layout = await getLayoutBySlug('membership', true);

    console.log(JSON.stringify(layout));

    return {
        props: { preview, layout },
    };
}

interface Props {
    preview: boolean;
    layout: any;
}

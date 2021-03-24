export const Paragraph = (props: { content: string }): JSX.Element => (
    <p
        dangerouslySetInnerHTML={{
            __html: props.content,
        }}></p>
);

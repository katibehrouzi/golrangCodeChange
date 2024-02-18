import { FC } from "react";

const PageTitles: FC<{
    title: string
}> = (props) => {
    return (
        <h1>
            {props.title}
        </h1>
    )
}

export default PageTitles
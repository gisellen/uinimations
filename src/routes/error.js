import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError()
    console.error(error)
    return (
        <div id="error-page">
            <p>An error occured?</p>
            <p><small>maybe you clicked on a secret link or something</small></p>
        </div>
    )
}

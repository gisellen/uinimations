import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError()
    console.error(error)
    return (
        <div id="error-page" style={style}>
            <h1>An error occured</h1>
            <p><small>maybe you clicked on a secret link or something</small></p>
            <a href="/"><button>back to home</button></a>
        </div>
    )
}

const style ={
    backgroundColor: ' background: rgb(248, 246, 238)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}
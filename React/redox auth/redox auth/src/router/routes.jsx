import {createBrowserRouter} from "react-router-dom"

const route = createBrowserRouter({
    
        path:"./",
        element: <Signup/>
    },
    {
        path:"./signup",
        element: <Signup/>
    },
    {
        path:"./login",
        element: <Login/>
    }
)
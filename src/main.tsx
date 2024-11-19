import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import router from "@/rout/route.tsx";
import {RouterProvider} from "react-router-dom";
import {Provider} from "@/components/ui/provider"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider>
            <RouterProvider router={router}/>
        </Provider>
    </StrictMode>,
)

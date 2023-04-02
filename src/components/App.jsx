import './App.css'

import { ItemCount } from './ItemCount/ItemCount.jsx'
import { Navbar } from './Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'


export const App = () => {
    return (
        <>
            <Navbar />
            <ItemCount />
            <ItemListContainer />
        </>
    )
}
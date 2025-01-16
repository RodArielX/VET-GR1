import { Children, createContext, useState } from "react";
import axios from 'axios'

// Creacion del grupo de WhatsApp (AuthContext)
const tratamientosContext = createContext()

// Crear el mensaje(AuthProvider)
// Integrantes (children)
const TratamientosProvider = ({ children }) => {

    const [modal, setModal] = useState(false)

    const handleModal = () => {
        setModal(!modal)
    }

    const registrarTratamientos = async (datos) => {
        try {
            const token = localStorage.getItem('token')
            const url = `${import.meta.env.VITE_BACKEND_URL}/tratamiento/registro`
            const options = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            const respuesta = await axios.post(url, datos, options)
            console.log(respuesta)
        } catch (error) {
            console.log(error);
        }
    }




    return (
        <tratamientosContext.Provider value={
            {
                // Contenido del mensaje
                modal,
                setModal,
                handleModal,
                registrarTratamientos
            }
        }>
            {children}
        </tratamientosContext.Provider>
    )
} 
export { TratamientosProvider }
export default tratamientosContext

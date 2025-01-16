import { Formulario } from '../componets/Formulario'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Mensaje from '../componets/Alertas/Mensaje';
import axios from 'axios';

const Actualizar = () => {

    const [paciente, setPaciente] = useState({})

    const { id } = useParams()

    useEffect(() => {
        const consultarPaciente = async () => {
            try {
                // Obtener Token
                const token = localStorage.getItem('token')
                // Definir Endpoint
                const url = `${import.meta.env.VITE_BACKEND_URL}/paciente/${id}`
                // Headers
                const options = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                }
                // Respuesta al backend
                const respuesta = await axios.get(url, options)
                setPaciente(respuesta.data.paciente)
            } catch (error) {
                console.log(error)
            }
        }
        consultarPaciente()
    }, [])

    return (
        <div>
            <h1 className='font-black text-4xl text-gray-500'>Paciente</h1>
            <hr className='my-4' />
            <p className='mb-8'>Este módulo te permite actualizar los datos de un paciente registrado</p>

            {
                Object.keys(paciente).length !=0 && <Formulario paciente={paciente}/>
            }
          
        </div>

    )
}

export default Actualizar
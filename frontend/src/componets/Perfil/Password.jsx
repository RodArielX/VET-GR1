
import { useState } from "react"

const Password = () => {
    const [form, setForm] = useState({
        passwordactual:"",
        passwordnuevo:""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
        <div className='mt-5'>
                <h1 className='font-black text-4xl text-gray-500'>Password</h1>
                <hr className='my-4' />
                <p className='mb-2'>Este módulo te permite actualizar el password del usuario</p>
        </div>
        <form >

            <div>
                <label
                    htmlFor='passwordactual'
                    className='text-gray-700 uppercase font-bold text-sm'>Password actual: </label>
                <input
                    id='passwordactual'
                    type="password"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='**************'
                    name='passwordactual'
                    value={form.passwordactual}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label
                    htmlFor='passwordnuevo'
                    className='text-gray-700 uppercase font-bold text-sm'>Nuevo password: </label>
                <input
                    id='passwordnuevo'
                    type="password"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='**************'
                    name='passwordnuevo'
                    value={form.passwordnuevo}
                    onChange={handleChange}
                />
            </div>

            <input
                type="submit"
                className='bg-gray-800 w-full p-3 
        text-slate-300 uppercase font-bold rounded-lg 
        hover:bg-gray-600 cursor-pointer transition-all'
                value='Actualizar' />
        </form>
        </>
    )
}

export default Password
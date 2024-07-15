import { FormEvent, useEffect, useRef, useState } from "react"

export const Refs: React.FC  = () => {
    const inputref = useRef<HTMLInputElement>(null) // { current: 0 }
    const inputEmailRef = useRef<HTMLInputElement>(null)
    const inputSenhaRef = useRef<HTMLInputElement>(null)

    function handleOnSubmit(event: FormEvent){
        event.preventDefault() // evita que a pagina seja recarregada ao submeter o formulario
        console.log(inputref.current?.value)
        console.log(inputEmailRef.current?.value)
        console.log(inputSenhaRef.current?.value)
    }
    


    return(
        <form 
        style={{padding: '2rem'}} 
        onSubmit={(event) => handleOnSubmit(event)}> 
            <h1>useRef</h1>
          <br />
          <input type="text" placeholder="Nome completo"  ref={inputref} />
          <input type="email" placeholder="E-mail" ref={inputEmailRef} />
          <input type="password" placeholder="Senha" ref={inputSenhaRef} />
          
            <br />
            <button type="submit">Submeter</button>
        </form>
    )
}
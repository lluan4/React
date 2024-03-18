import  "./Formulario.css"
import TextField from "../TextField"

export const Formulario = () => {
  return(
    <section>
      <form className ="form-section">
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextField label="Nome"/>
        <TextField label="Cargo"/>
        <TextField label="Imagem"/>
        <TextField label="Time"/>
      </form>
    </section>
  )
}
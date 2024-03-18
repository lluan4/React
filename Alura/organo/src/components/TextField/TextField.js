import  "./TextField.css"

export const TextField = ({label, ...rest}) => {
    const placeholderText = getPlaceholderBy(label);
    return (
        <div className="text-field">
            <label>{label}</label>
            <input placeholder={placeholderText}/>
        </div>
    )
}

function getPlaceholderBy(label) {
      return ({ 
        Nome: `Digite seu ${label}...`,
        Cargo: `Digite seu ${label}...`,
        Imagem: `Informe o endereço da ${label}...`,
        Time: ""
      }[label]);
    }
import './TarjetasTablillas.css'

function TarjetasTablillas (props) {
    return (
        <div className="tarjeta_tablillas">

            <div className="tarjeta__imagen-contenedor_tablillas">

                <img
                    className="tarjeta__imagen_tablillas"
                    src={props.img}
                    alt={props.title}
                />

            </div>

            <div className="tarjeta__contenido_tablillas">

                <h2 className="tarjeta__titulo_tablillas">
                    {props.title}
                </h2>

                <p className="tarjeta__descripcion_tablillas">
                    {props.description}
                </p>

                <button className="tarjeta__boton_tablillas">
                    Ver más
                    <span>→</span>
                    <br />
                </button>

            </div>

        </div>
    )
}

export default TarjetasTablillas
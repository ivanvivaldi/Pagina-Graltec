import './TarjetasCortinas.css'

function TarjetasCortinas (props) {
    return (
        <div className="tarjeta">

            <div className="tarjeta__imagen-contenedor">

                <img
                    className="tarjeta__imagen"
                    src={props.img}
                    alt={props.title}
                />

            </div>

            <div className="tarjeta__contenido">

                <h2 className="tarjeta__titulo">
                    {props.title}
                </h2>

                <p className="tarjeta__descripcion">
                    {props.description}
                </p>

                <button className="tarjeta__boton">
                    Ver más
                    <span>→</span>
                    <br />
                </button>

            </div>

        </div>
    )
}

export default TarjetasCortinas
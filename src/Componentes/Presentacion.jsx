function Presentacion(props){
    return (
        <div className="Presentacion">
        <h2>Hola, mi nombre es {props.nombre} tengo {props.edad} años y trabajo como {props.profesion}</h2>
    </div>

    )

}
export default Presentacion;
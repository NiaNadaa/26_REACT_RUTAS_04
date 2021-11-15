function Main({players}){
    let mostrar = players.map((player)=>{
        return(
            <>
            <div>
            <h3>{player.nombre}</h3>
            </div>
            </>
        )
    })
return(
mostrar
)
}

export default Main;
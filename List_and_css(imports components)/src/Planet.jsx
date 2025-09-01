export const Planet = (props)=>{
    return props.isGasPlanet===false? <div><h1>{props.name}</h1></div> : null
}

import PropTypes from "prop-types"

export const Person = (props)=>{
    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>This person  {props.ismarried? "is" : "is not"} Married</h1>
            {props.friends.map((friend,ind)=>(<h1 key={ind}>{friend}</h1>))}
        </div>
    )
}

Person.propTypes = { //We define the structure of this like we did with skima 
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    ismarried: PropTypes.bool,
    friends: PropTypes.arrayOf(PropTypes.string) 
}
import Animal from "./Animal";

const AnimalList = ({animals})=>{

    return(
        <div className="animal-wrapper">
            {animals.map(animal => {
                return(
                    <Animal
                    name = {animal.name}
                    location = {animal.location}
                    diet = {animal.diet}
                    species = {animal.species}
                    endagered_level = {animal.endagered_level}
                    size = {animal.size}
                    lifespan = {animal.lifespan}
                    fun_facts = {animal.fun_facts}
                    />
                )
            })}
        </div>
    )

}



export default AnimalList;
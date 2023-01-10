import DogCart from './DogsCart';
import './dogs.css'

const Dogs = (props) => {
    const { AllDogs } = props
    return (
        <>
            <section className="dogs-container">
                {AllDogs.map((dog) => {
                    return (
                        <>
                            <div key={dog.id}>
                                <DogCart id={dog.id}
                                    name={dog.name}
                                    breed={dog.breed}
                                    description={dog.description}
                                    price={dog.price}
                                    imageUrl={dog.imageUrl} />

                            </div>

                        </>
                    )
                })}


            </section>

        </>

    );
}

export default Dogs;

const DogCart = (props) => {
    const { name, breed, price, description, imageUrl } = props
    return (
        <>
            <section className="dogs">
                <div className="dogs-info">
                    <p>{name}</p>
                    <p>{breed}</p>

                </div>
                <div className="dog-img-container">
                    <img className="dog-img" src={imageUrl}
                        alt={`picture of ${name}`} />
                </div>
                <div className="dogs-desc">
                    {description}

                </div>
                <div className="dogs-price">{price}$</div>

                <button className="dogs-btn" >
                    ADD TO CART
                </button>





            </section>
        </>

    );
}

export default DogCart;
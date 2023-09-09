const DataCard = ({item}) => {
    
    const { name, tagline, image_url, food_pairing, description } = item;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image_url} className="rounded-xl w-full h-96 object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{tagline}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default DataCard;
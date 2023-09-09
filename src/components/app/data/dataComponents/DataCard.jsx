const DataCard = ({item}) => {
    
    const { name, tagline, image_url, food_pairing, description } = item;
    console.log( food_pairing)

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image_url} className="rounded-xl w-full h-96 object-cover" />
            </figure>
            <div className="card-body items-left">
                <h2 className="card-title text-left font-bold text-3xl">{name}</h2>
                <h2 className="card-title text-left">{tagline}</h2>
                <p>{description.slice(0, 100)}</p>
                <div className="card-actions">
                    {food_pairing.map((p, i) => <li key={i}>{p}</li>)}
                </div>
            </div>
        </div>
    );
};

export default DataCard;
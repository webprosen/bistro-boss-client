const MenuItem = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div className="flex space-x-4">
            <div>
                <img className="max-w-[100px] rounded-r-3xl rounded-bl-3xl" src={image} alt="" />
            </div>
            <div>
                <h3 className="uppercase">{name}</h3>
                <p>{recipe}</p>
            </div>
            <div className="text-yellow-600">
                ${price}
            </div>
        </div>
    );
};

export default MenuItem;
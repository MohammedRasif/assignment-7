import img3 from '../icon/Frame (1).png'
import img4 from '../icon/Vector (1).png'

const Mains = ({foods,handleClickShow}) => {
    //console.log(foods)
    const { id,title,description,ingredients,time,calories,cover_image,ingredients_beef,ingredients_onion,ingredients_cloves} = foods || {};
    
    return (
        <div className="w-1/3 min-h-full">
            {/* <h1>{title}</h1> */}
            {/* card section */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={cover_image} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">{title}</h2>
                    <p><small>{description}</small></p>
                    <div>
                    <h1 className="font-bold">Ingredients : {ingredients}</h1>
                    <ul>
                        <li>    {ingredients_beef}</li>
                        <li>{ingredients_onion}</li>
                        <li>{ingredients_cloves}</li>
                        
                    </ul>
                    </div>
                        <div className='flex' >
                        <small className='flex items-center'>
                        <img src={img3} alt="" />
                        <h1 className='p-2'>{time}</h1>
                        </small>
                        <small className='flex items-center pl-16'>
                            <img src={img4} alt="" />
                            <h1 className='p-2'>{calories} calories</h1>
                        </small>
                        </div>
                    <div className="card-actions">
                    <button onClick={()=>handleClickShow(foods , id)}  className='px-6 py-3 rounded-3xl bg-green-600'>Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mains;
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Mains from "../Mains/Mains";

const Main = ({handleClickShow}) => {
    const [food,setFoot] = useState([]);
    useEffect( ()=>{
        fetch('pakes.json')
        .then(res => res.json())
        .then(data => setFoot(data))
    } ,[])
    return (
        <div className="w-2/3">
            <div className="grid md:grid-cols-2 gap-5">
            {
                food.map(foods => <Mains 
                    key={foods.id} 
                    foods={foods} 
                    handleClickShow={handleClickShow}
                    ></Mains>)
            }
            </div>
        </div>
    );
};

export default Main;
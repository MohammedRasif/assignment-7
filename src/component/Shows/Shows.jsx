import Show from "../Show/Show";

const Shows = ({show}) => {
    //console.log(show)

     const{title,time,calories}=show
    return (
        <div>
            <div className="p-2  bg-white flex items-center">
            <p>{title}</p>
            <h1 className="pl-14">{time}</h1>
            <h1 className="pl-10">{calories}</h1>
            <button className="ml-10 px-5 py-2 bg-green-600 rounded-3xl">Preparing</button>
           
                

            </div>
        </div>
    );
};

export default Shows;
import Shows from "../Shows/Shows";

const Show = ({show}) => {
    return (
        <div className="bg-slate-100 p-5  ">
            <h1 className="font-bold text-center">Want to cook: {show.length}</h1>
            <div className="flex ">
                <p className="pl-5 pr-32">Name</p>
                <p className="pr-20">Time</p>
                <p className="pr-12">Calories</p>
                
                
            </div>
            
                {
                    
                    show.map(show => <Shows key={show.id} show={show}  ></Shows>)
                
                }
            
            
            
        </div>
    );
};

export default Show;
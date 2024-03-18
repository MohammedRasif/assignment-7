
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Header from './component/Header/Header'
import Main from './component/Main/Main'
import Show from './component/Show/Show'
import Preparing from './component/Preparing/Preparing';


function App() {

  const [ clickCount , setClickCount ] = useState([]);

  const [show,setShow]=useState([]);
 

  const handleClickShow = (main,id) =>{

    const foundNumber = clickCount.find(num => num === id);

		if (foundNumber) {
			toast('Already Added to the list', {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else {
      const newShow =[...show,main];
      setShow(newShow);
			const clickedCount = [...clickCount , id ];
			setClickCount(clickedCount);
		}

  }
// console.log(show)



 
  return (
    <>
      <Header></Header>
      <ToastContainer />
      <div className='text-center pt-96 mt-20'>
                <h1 className='text-5xl font-bold'>Our Recipes</h1>
                <p className='pt-5'>Consectetur adipiscing elit. Fusce eget fermentum nulla. Curabitur in nisl vestibulum, aliquam ipsum ac, <br /> sollicitudin justo. Vivamus in ante massa.  </p>
      </div>
      <div className='m-20 md:flex'>
        
      </div>
      <div className=' m-20 md:flex'>
        <Main handleClickShow={handleClickShow}  ></Main>
        <div>
        <Show  show={show} ></Show>
        <Preparing></Preparing>
        </div>
      </div>
    </>
  )
}

export default App

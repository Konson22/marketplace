import { useGlobalContext } from "../../contexts/GlobalContextProvider"
import Login from "./Login";
import Signup from "./Signup";
import Upload from "./Upload";


export default function PopupModal(){

  const { openModal, setOpenModal } = useGlobalContext()

  return(
    <div 
      className="popup-modal h-[100vh] w-full flex items-center justify-center fixed inset-0 bg-blac backdrop-blur-sm z-40"
      onClick={() => setOpenModal(null)}
    >
      {openModal === 'upload' && <Upload />}
      {openModal === 'login' && <Login />}
      {openModal === 'signup' && <Signup />}
    </div>
  )
}
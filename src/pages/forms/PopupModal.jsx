import { useGlobalContext } from "../../contexts/GlobalContextProvider"
import Upload from "./Upload";


export default function PopupModal(){

  const { setOpenModal } = useGlobalContext()

  return(
    <div 
      className="popup-modal h-[100vh] w-full flex items-center justify-center fixed inset-0 bg-blac backdrop-blur-sm z-index-[100]"
      onClick={() => setOpenModal(null)}
    >
      <Upload />
    </div>
  )
}
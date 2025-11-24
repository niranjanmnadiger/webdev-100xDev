
import { HomeIcon } from "./icons/Home"
import { SidebarIcon } from "./icons/sidebar"

const App = () => {

  return (
    <div className="flex">
      <Sidebar />
      <Content />

    </div>





  )
}

function Sidebar() {

  return (

    <div className="bg-amber-200 w-60 h-screen">
      <SidebarIcon />

      <HomeIcon />



    </div>
  )
}




function Content() {

  return (

    <div className="w-screen h-screen mx-1">
      <div className="bg-black text-white py-7"> Fight for Your fairytale! </div>

      <div className="bg-blue-100 grid grid-cols-12 gap-3">

        <div className="col-span-2 bg-red-300 py-20 -translate-y-5 ">
          Image and info
        </div>

        <div className="col-span-6 bg-amber-400 py-20">
          meeting shedules
        </div>

        <div className="col-span-4 bg-blue-500">
          extras
        </div>



      </div>


    </div>
  )
}


export default App
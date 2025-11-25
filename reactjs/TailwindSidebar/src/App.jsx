
import { useState } from "react"
import { HomeIcon } from "./icons/Home"
import { SidebarIcon } from "./icons/sidebar"

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Content />

    </div>
  )
}

function Sidebar({ sidebarOpen, setSidebarOpen }) {

  if (sidebarOpen) {
    return (

      <div className="bg-amber-200 w-60 h-screen rounded-xl">

        <div>

          <div className="cursor-pointer hover:bg-amber-600 transform-all delay-100 duration-2000" onClick={() => { setSidebarOpen(!sidebarOpen) }}>
            <SidebarIcon />
          </div>


          <div className="space-y-3 ">
            <div className="flex text-xl border rounded-md ">

              <HomeIcon />
              Home

            </div>
            <div className="flex text-xl border rounded-md ">

              <HomeIcon />
              contact

            </div>
            <div className="flex text-xl border rounded-md ">

              <HomeIcon />
              projects

            </div>
            <div className="flex text-xl border rounded-md ">

              <HomeIcon />
              email

            </div>
          </div>
        </div>



      </div>
    )
  } else {
    return (

      <div className="cursor-pointer bg-amber-200 hover:bg-amber-600 transform-all delay-100 duration-2000" onClick={() => { setSidebarOpen(!sidebarOpen) }}>
        <SidebarIcon />
      </div>

    )
  }


}




function Content() {

  return (

    <div className="w-screen h-screen">
      <div className="bg-black rounded-md text-white h-47 text-3xl flex items-center justify-center hidden  sm:block"> Fight for Your fairytale! </div>

      <div className=" grid grid-cols-12 gap-8 p-5">

        <div className="shadow-xl sm:col-span-3 col-span-12 bg-red-300 h-70 -translate-y-10 rounded-xl hidden  sm:block ">
          Image and info
        </div>

        <div className="shadow-xl sm:col-span-5 col-span-12 h-70 bg-amber-400 rounded-xl ">
          meeting shedules
        </div>

        <div className="shadow-xl sm:col-span-4 col-span-12 h-70 bg-blue-500 rounded-xl ">
          extras
        </div>



      </div>


    </div>
  )
}


export default App
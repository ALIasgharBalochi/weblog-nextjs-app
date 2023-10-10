
import Pagination from "./components/Pagination";
import Banner from "./components/Banner";
import { ToastContainer } from "react-toastify";

export default function Home() {

  return (
    <main >
        <Banner/>
        <Pagination blogPerPage={6}/>
        <ToastContainer/>
    </main>
  )
}

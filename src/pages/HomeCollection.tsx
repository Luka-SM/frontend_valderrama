import Navbar from '../components/Navbar'
import ContactsPage from './Contacts'
import CoursesPage from './Courses'
import CraftingPage from './GuitarCrafting'
import GuitarsDisplayPage from './GuitarGallery'
import GuitarTunersPage from './GuitarTuners'
import GuitarTuningPage from './GuitarTuning'
import Home from './Home'
import LuthierPage from './Luthier'
import VideosPage from './Videos'

export default function HomeCollection() {
  return(
    <main className='flex flex-col overflow-y-auto scrollbar-hidden select-none'>

      <Navbar/>

      <Home id='homepage'/>
      <LuthierPage id='about-luthier'/>
      <GuitarsDisplayPage id='guitar-gallery'/>
      <CraftingPage id='guitar-crafting'/>
      <GuitarTunersPage id='guitar-tuners'/>
      <GuitarTuningPage id='guitar-tuning'/>
      <CoursesPage id='courses'/>
      <VideosPage id='videos'/>
      <ContactsPage id='luthier-contacts'/>
    </main>
  )
}
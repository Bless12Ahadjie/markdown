import Sidenav from './shared/components/Sidenav'
import DeleteButton from './shared/layouts/DeleteButton'
import Header from './shared/layouts/Header'


export default function Home() {
  return (
  <main>
    <Header></Header>
    <Sidenav></Sidenav>
    {/* <DeleteButton></DeleteButton> */}
  </main>
  )
}
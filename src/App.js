import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'

//бтв, порядок имеет значение, сначала навбар, потом херо, как если б реакта не было, условно - как у меня раньше дивы были
//сайдбар и сабменю - вот их по идее похуй куда пихать, но в целом
//*порядок должен как минимум отражать реальную последовательность и смысл
function App() {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Submenu/>
      <Hero/>
    </>
  )
}

export default App

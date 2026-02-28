import { useState } from 'react'
import Navbar from './components/Navbar'
import TabContent from './components/TabContent'


function App() {
const [activeTab, setActiveTab] = useState('Dashboard')


return (
<div>
<Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
<TabContent activeTab={activeTab} />
</div>
)
}


export default App
const tabs = ['Dashboard', 'Accounts', 'Transfers', 'Cards', 'Profile']


export default function Navbar({ activeTab, setActiveTab }) {
return (
<div className="navbar">
<h2>💳 MyBank</h2>
<div className="tabs">
{tabs.map(tab => (
<button
key={tab}
className={activeTab === tab ? 'active' : ''}
onClick={() => setActiveTab(tab)}
>
{tab}
</button>
))}
</div>
</div>
)
}
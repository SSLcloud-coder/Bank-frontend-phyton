export default function TabContent({ activeTab }) {
return (
<div className="content">
<h1>{activeTab}</h1>
<p>This is {activeTab} section of the bank app.</p>
</div>
)
}
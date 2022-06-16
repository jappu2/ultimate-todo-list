import "../styles/App.css"

const header = (props) => (
    <div className="App-header">
        <div className="userIcon"><img src={props.users["1"].picture} alt={props.users["1"].userName} /></div>
        <div className="userIcon"><img src={props.users["2"].picture} alt={props.users["2"].userName} /></div>
        <div className="userIcon"><img src={props.users["3"].picture} alt={props.users["3"].userName} /></div>
        <div className="userIcon"><img src={props.users["4"].picture} alt={props.users["4"].userName} /></div>
    </div>
)


export default header

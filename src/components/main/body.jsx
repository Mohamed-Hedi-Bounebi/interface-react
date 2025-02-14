import mohamed from '../../assets/mohamed.jpg'
import './body.css'
function Body(){
    return(
        <div className="main">
            <h1>Hello I'm Mohamed Hedi <span>❤</span></h1>
            <img src={mohamed} alt="" />
        </div>
    )
}
export default Body
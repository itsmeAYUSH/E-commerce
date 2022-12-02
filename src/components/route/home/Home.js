import { Fragment } from "react";
import playButton from '../image/play.png'


const Home =() =>{
    return(
        <Fragment>
            <header>
                <button>Get Out Lastest Album</button>
                <img src={playButton} alt="play Button"></img>
            </header>
            <h2>Tours</h2>
            <section>
                <div>
                    <p>JUL16 DETROIT, MIDTE ENERGY MUSIC THEATRE</p>
                    <p>JUL19 TORONTO, ON BUDWEISER STAGE</p>
                </div>
            </section>
        </Fragment>
    )
}
export default Home;
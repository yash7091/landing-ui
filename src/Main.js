import React from 'react'
import Mac from './Assets/matebook.png'
import Bigcircle from './Assets/big-eclipse.svg'
import MidCircle from './Assets/mid-eclipse.svg'
import SmallCircle from './Assets/small-eclipse.svg'
function Main() {
    return (
        <div className="main">
            <section className="presentation">
                <div className="introduction">
                    <div className="intro-text">
                        <h1>Laptop for future</h1>
                        <p>
                            The new 14 inch bezeless  display offeringa 4k
                            display with touch sreen .
                        </p>
                    </div>
                    <div className="cta">
                         <button className="cta-select">14 Inch</button>
                         <button className="cta-add">Add to Cart</button>
                    </div>
                </div>
                <div className="cover">
                    <img src={Mac}/>
                </div>

            </section>
                <img class="big-circle" src={Bigcircle}/>
                <img class="medium-circle" src={MidCircle}/>
                <img  class="small-circle" src={SmallCircle}/>
        </div>
    )
}

export default Main

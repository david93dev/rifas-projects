import "./Winners.css"

export function Winners() {
    return(
        <>
        <section>
            <div className="winners-container">

                <div className="title">
                    <h2>Conheça nossos <span>ganhadores!</span></h2>
                </div>

                <div className="video-container">
                    
                <iframe width="387" height="688" src="https://www.youtube.com/embed/pY4tVdfnQfs" title="Jurassic World Rebirth. In theaters July 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="387" height="688" src="https://www.youtube.com/embed/NxVASaXB80E" title="Superman - Look Up" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="387" height="688" src="https://www.youtube.com/embed/yB_VAhp6-Og" title="The Fantastic Four: First Steps | Official Teaser | Only in Theaters July 25" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </div>

            <div className="more-winners-btn">
            <a href="#">Ver Mais Ganhadores</a>
            </div>

            </div>
        </section>
    
        </>
    )
}
  
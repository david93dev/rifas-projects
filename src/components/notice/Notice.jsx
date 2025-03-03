import "./Notice.css"
import comunicado from "../../assets/img/Comunicado.webp";

export function Notice() {
    return (
        <>
            <section>
                <div className="container">

                    <div className="general">
                        <div>
                            <img className="img-notice" src={comunicado} alt="Imagem de comunicado importante" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
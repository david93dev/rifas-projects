import "./Footer.css"
import logo from "../../assets/img/LOGO-footer.webp";
import lotep from "../../assets/img/LOTEP.png";
import { PiInstagramLogoBold } from "react-icons/pi";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export function Footer() {
    return (
        <>
            <section>
                <div className="footer-container">

                    <div className="genral footer">

                        <div className="info-contacts">
                            <div className="logos-footer">
                                <img className="logo-footer-img" src={logo} alt="Imagem logo" />
                                <p><span className="footer-span">Prêmios incríveis</span>, que podem mudar o seu estilo de vida!</p>
                                <img className="lotep-img" src={lotep} alt="Imagem logo" />
                            </div>

                            <div className="contact-footer">
                                <h3>Fale conosco</h3>
                                <div className="enter-contact-btn">
                                    <a href="#">Entrar em cotato</a>
                                </div>
                                <p>24 horas disponível para melhor te atender!</p>
                            </div>

                            <div className="about-us">
                                <h3>Sobre nós</h3>
                                <a className="about-us-btn" href="#">Quem Somos</a>
                                <a className="about-us-btn" href="#">Política de Privacidade</a>
                            </div>

                            <div className="social-media">
                                <h3>Redes sociais</h3>
                                <a href="instagram-link"><PiInstagramLogoBold /></a>
                                <a href="youtube-link"><BsYoutube /></a>
                                <a href="facebook-link"><FaFacebook /></a>
                            </div>

                        </div>

                        <div className="info-text">
                            <p>Este bilhete de loteria está autorizado com base na portaria LTP-PRC-2024/00901 TERMO DE AUTORIZAÇÃO Nº 00134/2024</p>
                            <p>PIX DO MILHAO, PREMIOS E EBOOKS LTDA CNPJ: 58.534.909/0001-00.  Antes de contratar, consulte o Regulamento do produto. É proibida a venda para menores de 18 anos. Os sorteios e entrega dos prêmios serão realizados de acordo com os critérios estabelecidos neste site, nos termos seguintes: O adquirente concorrerá em todos os sorteios previstos no bilhete digital emitido, mesmo sendo contemplado em alguns deles. Ao contribuir, o titular do BILHETE Digital concorda desde já e sem ônus a utilização de seu nome, sua voz e imagem para a divulgação desta campanha social.   Confira o resultado dos sorteios e as condições de participação em
                            </p>
                            <a className="link-site-footer" href="#">www.pixdomilhao.com.</a>
                        </div>

                        <div className="footer-end">
                            <p>Imagens meramente ilustrativas</p>
                            <div className="line-footer"></div>
                            <h3>© 2025 - PIX DO MILHÃO</h3>
                            <div className="line-footer"></div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
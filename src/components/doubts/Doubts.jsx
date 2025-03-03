import { useState } from "react";
import "./Doubts.css"
import { Acordion } from "../acordion/Acordion";



export function Doubts() {
    const [open, setopen] = useState(false)

    return (
        <>
            <section>
                <div className="doubts-container">
                    <div className="doubts">
                        <div className="text-container">
                            <h2>Pix do milhão <span>é seguro?</span></h2>
                            <p>Dúvidas? Estamos aqui para ajudar.</p>
                        </div>
                        <Acordion title={"Quem somos?"} description={"O Pix do Milhão é uma iniciativa inovadora que, semanalmente, transforma vidas e realiza sonhos. Nosso compromisso é oferecer conhecimento por meio dos nossos e-books e, com isso, dar a você a chance de concorrer a diversos prêmios."} />

                        <Acordion title={"Quem pode participar?"} description={"Qualquer pessoa pode adquirir os e-books, entretanto, para ser sorteado é necessário que seja pessoa física, brasileiro e maior de 18 anos."} />

                        <Acordion title={"como comprar?"} description={"As compras são efetuadas através do nosso site OFICIAL: www.pixdomilhao.com. A cada e-book que você compra, ganha 1 número da sorte para concorrer a 1 MILHÃO de reais e ainda 1.000 bilhetes premiados, de até 40 mil reais. Lembrando que, na hora de fazer o pix, nosso único recebedor é: PIX DO MILHÃO."} />

                        <Acordion title={"O que é um e-book?"} description={"Um e-book é um livro digital que pode ser lido em dispositivos eletrônicos como computadores, celulares e tablets. Os nossos e-books contêm links que possibilitam a sua utilização por meio de libras e, ainda, como audiobooks tornando-os acessíveis para pessoas portadoras de deficiência.Em nosso site, na aba EBOOKS, você encontra uma grande variedade de e-books com conteúdos diversos. Com isso, além de adquirir conhecimento, você concorre ao prêmio principal de R$ 1 milhão e mil prêmios instantâneos de até R$ 40 mil."}/>

                        <Acordion title={"Para Participar, tenho que comprar um e-book?"} description={"Sim. Na aquisição de um e-book, você já tem a possibilidade de concorrer aos 1001 prêmios semanais."}/>

                        <Acordion title={"Como baixar o e-book e ver meus números?"} description={"Assim que você concluir o pagamento, ambos aparecem imediatamente na página de compra. Você também pode acessar ebook.pixdomilhao.com, digitar seu CPF e clicar em buscar para acessar os e-books e seus números da sorte."} />

                        <Acordion title={"Comprei meus e-books, fiz o pagamento, mas aparece a mensagem: “aguardando pagamento”. O que fazer?"} description={"Assim que você concluir o pagamento, ambos aparecem imediatamente na página de compra. Você também pode acessar ebook.pixdomilhao.com, digitar seu CPF e clicar em buscar para acessar os e-books e seus números da sorte."}/>

                        <Acordion title={"Como saber se um dos meus bilhetes é premiado?"} description={"Assim que você concluir o pagamento, ambos aparecem imediatamente na página de compra. Você também pode acessar ebook.pixdomilhao.com, digitar seu CPF e clicar em buscar para acessar os e-books e seus números da sorte."} />

                        <Acordion title={"Quando acontece o sorteio do prêmio principal?"} description={"Assim que você concluir o pagamento, ambos aparecem imediatamente na página de compra. Você também pode acessar ebook.pixdomilhao.com, digitar seu CPF e clicar em buscar para acessar os e-books e seus números da sorte."}/>

                        <Acordion title={"O sorteio é autorizado?"} description={"Assim que você concluir o pagamento, ambos aparecem imediatamente na página de compra. Você também pode acessar ebook.pixdomilhao.com, digitar seu CPF e clicar em buscar para acessar os e-books e seus números da sorte."}/>

                        <Acordion title={"Qual o destinatário de pagamento?"} description={"Assim que você concluir o pagamento, ambos aparecem imediatamente na página de compra. Você também pode acessar ebook.pixdomilhao.com, digitar seu CPF e clicar em buscar para acessar os e-books e seus números da sorte."} />

                        <Acordion title={"Quais as formas de pagamento?"} description={"Assim que você concluir o pagamento, ambos aparecem imediatamente na página de compra. Você também pode acessar ebook.pixdomilhao.com, digitar seu CPF e clicar em buscar para acessar os e-books e seus números da sorte."}/>

                        <Acordion title={"Onde vejo os ganhadores?"} description={"Assim que você concluir o pagamento, ambos aparecem imediatamente na página de compra. Você também pode acessar ebook.pixdomilhao.com, digitar seu CPF e clicar em buscar para acessar os e-books e seus números da sorte."}/>
                    </div>
                </div>
            </section>
        </>
    )
}
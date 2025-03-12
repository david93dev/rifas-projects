import "./Sales.css";
import banner from "../../assets/img/banner1.webp";
import logo from "../../assets/img/logo1.png";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { TbCloverFilled } from "react-icons/tb";
import { HiFire } from "react-icons/hi";
import { useState, useEffect } from "react";

export function Sales() {
    const [timeLeft, setTimeLeft] = useState(60 * 60 * 24); // 5 horas
  
    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const min = Math.floor((seconds % 3600) / 60);
        const sec = seconds % 60;
        return `${String(hrs).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    };

    return (
        <>
            <section>
                <div className="sales-banner-container">
                    <div className="sales-banner-background">
                        <div className="sales-banner-header">
                            <img className="logo-sales" src={logo} alt="logo" />
                            <button className="my-buy-btn"><span className="search-icon"><IoSearch /></span> Minhas compras <IoIosArrowForward /></button>
                        </div>
                        <div className="img-sales-banner">
                            <img src={banner} alt="main banner" />
                        </div>
                        <div className="sales-banner-footer">
                            <div className="award">
                                <p><TbCloverFilled className="icon-clover" /> Cem Mil Reais - 05/03/2025 20:30</p>
                                <p><TbCloverFilled className="icon-clover" /> Um Milhão de Reais - 07/03/2025 20:30</p>
                            </div>
                            <div className="value-tiket">
                                <p>Por Apenas <span className="value-sale-tiket">R$ 3,99</span></p>
                            </div>
                        </div>
                        <div className="container-timer">
                            <div className="background-timer">
                                <div className="timer-general">
                                    <div>
                                        <h3>Faltam</h3>
                                        <div className="timer">
                                            {formatTime(timeLeft)}
                                        </div>
                                        <h3>para o sorteio de <span>Cem Mil Reais</span>!</h3></div>
                                </div>
                            </div>
                            <div className="background-timer">
                                <div className="timer-general">
                                    <h3>A cada 10 Ebooks/Números , ganhe <span>10 chances no sorteio</span> + <span>5 Giros da Sorte</span></h3>
                                </div>
                            </div>
                        </div>
                        <div className="container-promotion">
                            <div className="title-promotion">
                                <HiFire className="fire-icon" />
                                <h2> Promoção</h2>
                                <h3>50% OFF</h3>
                            </div>
                            <div className="background-promotion">
                                <div className="promotion-info">
                                    <p className="p-edit">+ 5 Ebooks/Números</p>
                                    <p>De R$19,95 por <span>R$ 9,99</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

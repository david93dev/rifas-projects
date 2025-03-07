import "./Sales.css";
import banner from "../../assets/img/banner1.webp";
import logo from "../../assets/img/logo1.png";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

export function Sales() {
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
                                <p>Cem Mil Reais - 05/03/2025 20:30</p>
                                <p>Um Milhão de Reais - 07/03/2025 20:30</p>
                            </div>
                            <div className="value-tiket">
                                <p>Por Apenas <span>R$ 3,99</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

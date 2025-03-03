import { Header } from "../../components/header/Header"
import { MainBanner } from "../../components/banner/MainBanner"
import { Promotion } from "../../components/promotion/Promotion"
import { Winners } from "../../components/winners/Winners"
import { Ebook } from "../../components/ebook/Ebook"
import { Contact } from "../../components/contact/Contact"
import { Doubts } from "../../components/doubts/Doubts"
import { Notice } from "../../components/notice/Notice"
import { Instagram } from "../../components/instagram/Instagram"
import { Footer } from "../../components/footer/Footer"

export function Home() {

  return (
    <>
        <Header />
        <MainBanner />
        <Promotion />
        <Winners />
        <Ebook />
        <Contact />
        <Doubts />
        <Notice />
        <Instagram />
        <Footer />
    </>
  )
}



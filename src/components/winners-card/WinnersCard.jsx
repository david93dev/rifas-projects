import { useState } from "react";
import trofeu from "../../assets/img/trofeu.webp";
import "./WinnersCard.css";
import { GiTrophyCup } from "react-icons/gi";
import { MdOutlinePlayCircleFilled } from "react-icons/md";

export function WinnersCard() {
  // Dados das edições
  const edicoes = [
    { id: "e38", nome: "Edição 38 Pix do Milhão R$ 3,99 - R$ 1.000.000", data: "07/03/2025" },
    { id: "e37", nome: "Edição 37 Pix do Milhão R$ 3,99 - R$ 1.000.000", data: "01/02/2025" },
    { id: "e36", nome: "Edição 36 Pix do Milhão R$ 3,99 - R$ 1.000.000", data: "15/01/2025" },
    { id: "e35", nome: "Edição 35 Pix do Milhão R$ 3,99 - R$ 1.000.000", data: "10/12/2024" },
  ];

  // Estado para armazenar a edição selecionada
  const [edicaoSelecionada, setEdicaoSelecionada] = useState(edicoes[0]);

  // Dados fictícios dos ganhadores 
  const ganhadoresPorEdicao = {
    e38: [
      { premio: "R$ 20.000,00", nome: "Genilson S****", telefone: "*****-0613", cpf: "036.***.***-**" },
      { premio: "R$ 10.000,00", nome: "Carla M****", telefone: "*****-9823", cpf: "052.***.***-**" },
      { premio: "R$ 100.000,00", nome: "Ricardo X****", telefone: "*****-7842", cpf: "063.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Juliana T****", telefone: "*****-4526", cpf: "052.***.***-**" },
      { premio: "R$ 100.000,00", nome: "Ricardo X****", telefone: "*****-7842", cpf: "063.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Juliana T****", telefone: "*****-4526", cpf: "052.***.***-**" },
      { premio: "R$ 100.000,00", nome: "Ricardo X****", telefone: "*****-7842", cpf: "063.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Juliana T****", telefone: "*****-4526", cpf: "052.***.***-**" },
      { premio: "R$ 100.000,00", nome: "Ricardo X****", telefone: "*****-7842", cpf: "063.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Juliana T****", telefone: "*****-4526", cpf: "052.***.***-**" },

    ],
    e37: [
      { premio: "R$ 30.000,00", nome: "João P****", telefone: "*****-4152", cpf: "041.***.***-**" },
      { premio: "R$ 15.000,00", nome: "Mariana L****", telefone: "*****-7932", cpf: "072.***.***-**" },
      { premio: "R$ 100.000,00", nome: "Ricardo X****", telefone: "*****-7842", cpf: "063.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Juliana T****", telefone: "*****-4526", cpf: "052.***.***-**" },
      { premio: "R$ 100.000,00", nome: "Ricardo X****", telefone: "*****-7842", cpf: "063.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Juliana T****", telefone: "*****-4526", cpf: "052.***.***-**" },
      { premio: "R$ 100.000,00", nome: "Ricardo X****", telefone: "*****-7842", cpf: "063.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Juliana T****", telefone: "*****-4526", cpf: "052.***.***-**" },
      { premio: "R$ 100.000,00", nome: "Ricardo X****", telefone: "*****-7842", cpf: "063.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Juliana T****", telefone: "*****-4526", cpf: "052.***.***-**" },
    ],
    e36: [
      { premio: "R$ 50.000,00", nome: "Paulo H****", telefone: "*****-6987", cpf: "093.***.***-**" },
      { premio: "R$ 25.000,00", nome: "Fernanda O****", telefone: "*****-1345", cpf: "082.***.***-**" },
      { premio: "R$ 100.000,00", nome: "Ricardo X****", telefone: "*****-7842", cpf: "063.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Juliana T****", telefone: "*****-4526", cpf: "052.***.***-**" },
      { premio: "R$ 100.000,00", nome: "Ricardo X****", telefone: "*****-7842", cpf: "063.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Juliana T****", telefone: "*****-4526", cpf: "052.***.***-**" },
      { premio: "R$ 100.000,00", nome: "Ricardo X****", telefone: "*****-7842", cpf: "063.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Juliana T****", telefone: "*****-4526", cpf: "052.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Paulo H****", telefone: "*****-6987", cpf: "093.***.***-**" },
      { premio: "R$ 25.000,00", nome: "Fernanda O****", telefone: "*****-1345", cpf: "082.***.***-**" },
      { premio: "R$ 100.000,00", nome: "Ricardo X****", telefone: "*****-7842", cpf: "063.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Juliana T****", telefone: "*****-4526", cpf: "052.***.***-**" },
      { premio: "R$ 100.000,00", nome: "Ricardo X****", telefone: "*****-7842", cpf: "063.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Juliana T****", telefone: "*****-4526", cpf: "052.***.***-**" },
      { premio: "R$ 100.000,00", nome: "Ricardo X****", telefone: "*****-7842", cpf: "063.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Juliana T****", telefone: "*****-4526", cpf: "052.***.***-**" },
    ],
    e35: [
      { premio: "R$ 100.000,00", nome: "Ricardo X****", telefone: "*****-7842", cpf: "063.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Juliana T****", telefone: "*****-4526", cpf: "052.***.***-**" },
      { premio: "R$ 100.000,00", nome: "Ricardo X****", telefone: "*****-7842", cpf: "063.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Juliana T****", telefone: "*****-4526", cpf: "052.***.***-**" },
      { premio: "R$ 100.000,00", nome: "Ricardo X****", telefone: "*****-7842", cpf: "063.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Juliana T****", telefone: "*****-4526", cpf: "052.***.***-**" },
      { premio: "R$ 100.000,00", nome: "Ricardo X****", telefone: "*****-7842", cpf: "063.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Juliana T****", telefone: "*****-4526", cpf: "052.***.***-**" },
      { premio: "R$ 100.000,00", nome: "Ricardo X****", telefone: "*****-7842", cpf: "063.***.***-**" },
      { premio: "R$ 50.000,00", nome: "Juliana T****", telefone: "*****-4526", cpf: "052.***.***-**" },
    ],
  };

  return (
    <>
      {/* Título */}
      <section>
        <div className="title-winners-container">
          <div className="title-winners-card">
            <h2>Ganhadores</h2>
            <img src={trofeu} alt="Imagem de troféu" />
          </div>
        </div>
      </section>

      {/* Seção dos vencedores */}
      <section>
        <div className="winners-card-container">
          <div className="header-card-container">
            {/* Select para escolher a edição */}
            <label htmlFor="edition-winners">Escolha a edição:</label>
            <select
              id="edition-winners"
              name="edição"
              value={edicaoSelecionada.id}
              onChange={(e) => {
                const edicao = edicoes.find((ed) => ed.id === e.target.value);
                setEdicaoSelecionada(edicao);
              }}
            >
              {edicoes.map((edicao) => (
                <option key={edicao.id} value={edicao.id}>{edicao.nome}</option>
              ))}
            </select>

            {/* Informações da edição selecionada */}
            <h3>{edicaoSelecionada.nome}</h3>
            <h3>Sorteio dia {edicaoSelecionada.data}</h3>
          </div>

          {/* Cards dos ganhadores */}
          <div className="container-cards">
          <div className="winners-cards">
            {ganhadoresPorEdicao[edicaoSelecionada.id]?.map((ganhador, index) => (
                <div className="card" key={index}>
                <h3>
                  <span><GiTrophyCup /> </span>Premiação principal
                </h3>
                <ul>
                  <li><span>{ganhador.premio}</span></li>
                  <li>Ganhador(a): {ganhador.nome}</li>
                  <li>Telefone: {ganhador.telefone}</li>
                  <li>CPF: {ganhador.cpf}</li>
                  <div className="react">
                    <a href=""><span><MdOutlinePlayCircleFilled /></span></a>
                    <a href=""><span> Reação</span></a>
                  </div>
                </ul>
              </div>
            ))}
          </div>
          </div>
         
        </div>
      </section>
    </>
  );
}

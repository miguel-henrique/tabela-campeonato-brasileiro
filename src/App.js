import api from "./api";
import React, { Component } from 'react';
import './App.css';


class App extends Component{

state= {
  tabela:[],
}

async componentDidMount(){
  const response = await api.get('');

  this.setState({tabela: response.data});
}

  render(){

    const { tabela } = this.state;

/* function verultimas() {
  
//let ultimos = ["d","d","e",];
  
           for (let ultimo of verultimas()) {
            if (ultimo === "v") 
            {
          return('vitória');
                 }
            if (ultimo === "e") 
      {
        return('empate');
           }
    
             if (ultimo === "d")
      {
        return('derrota'); 
           } 
    }
} */

//const vitoria = tabela.ultimos_jogos["v"];

    return(

      
      <div>
        <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item active" aria-current="page" >Tabela Campeonato Brasileiro</li>
    </ol>
  </nav>
        <div class="container"></div>

        <div class="Time list-Time">
         <h5 class="Time-header" >Classificação</h5>
        <div class="Time-body">

        <table class="table">
        <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Time</th>
                <th scope="col">Pontos</th>
                <th scope="col">Jogos</th>
                <th scope="col">Vitórias</th>
                <th scope="col">Últimos Jogos</th>
              </tr>
            </thead>


            {tabela.map(tabela => (
            <tbody>
             <tr key={tabela.posicao}>
                <th scope="col">{tabela.posicao}</th>
                <td>{tabela.time.nome_popular}</td>
                <td>{tabela.pontos}</td>
                <td>{tabela.jogos}</td>
                <td>{tabela.vitorias}</td>                                
               <td>
                 {tabela.ultimos_jogos[1] === "v" ? <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/50/ffffff/external-check-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png" width={20} alt="img"/> : <img src="https://img.icons8.com/ios-glyphs/30/ffffff/xbox-x.png" width={20} alt="img"/>}
                 {tabela.ultimos_jogos[2] === "v" ? <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/50/ffffff/external-check-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png" width={20} alt="img"/> : <img src="https://img.icons8.com/ios-glyphs/30/ffffff/xbox-x.png" width={20} alt="img"/>}
                 {tabela.ultimos_jogos[3] === "v" ? <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/50/ffffff/external-check-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png" width={20} alt="img"/> : <img src="https://img.icons8.com/ios-glyphs/30/ffffff/xbox-x.png" width={20} alt="img"/>}
                 {tabela.ultimos_jogos[4] === "v" ? <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/50/ffffff/external-check-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png" width={20} alt="img"/> : <img src="https://img.icons8.com/ios-glyphs/30/ffffff/xbox-x.png" width={20} alt="img"/>}
                 {tabela.ultimos_jogos[5] === "v" ? <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/50/ffffff/external-check-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png" width={20} alt="img"/> : <img src="https://img.icons8.com/ios-glyphs/30/ffffff/xbox-x.png" width={20} alt="img"/>}
               </td>   
              </tr>
            </tbody>
            ))}

            </table>
            </div>
            </div>
            
            



      </div>
      
      
    );
  };
};


  

export default App;

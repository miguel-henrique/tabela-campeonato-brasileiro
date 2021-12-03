import api from "./api";
import React, { Component } from 'react';


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


    return(
      <div>
        <h1>Tabela</h1>
        {tabela.map(tabela => (
          <li key={tabela.posicao}>
            <h2>
            {tabela.time.nome_popular}
            </h2>
            <p>
              {tabela.posicao}
            </p>

          </li>
        ))}
      </div>
    );
  };
};

  

export default App;

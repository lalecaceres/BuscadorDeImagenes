import  React  , {  Component }from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component {

  state = {
      termino : '',
      imagenes : [ ] ,
      pagina : ""
  }


  scroll = () => {
    const elemento= document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start');
  }
 
PaginaAnt = () => {
//Leer el state de la pagina actual 
let pagina = this.state.pagina;

//Si es 1 no puede ir atras

if(pagina===1) return null;

//Sumar uno a la pagina actual
pagina --;

//Agregar el cambio al state 
this.setState({
  pagina
}, () => {
  this.consultarApi();
  this.scroll();
});

console.log(pagina);
}

PaginaSig = () => {
  //Leer el state de la pagina actual 
  let pagina = this.state.pagina;

  //Sumar uno a la pagina actual
  pagina ++;

  //Agregar el cambio al state 
  this.setState({
    pagina
  }, () => {
    this.consultarApi();
    this.scroll();
  });

console.log(pagina)

}



consultarApi = () => {


  //per_page agrega resultados similares de busqueda 
 //page da el numero de pagina


  const pagina = this.state.pagina;
  const url = `https://pixabay.com/api/?key=25806245-d48083cf4c49aa062d5c38cd4&q=${this.state.termino}&per_page=30&page=${pagina}` ;

 console.log(url);


  fetch (url)
    .then(respuesta =>respuesta.json())
    .then(resultado =>this.setState({imagenes: resultado.hits}))
}

  datosBuscador = (termino) => {
    this.setState({
      termino : termino,
      pagina: 1
    },()=> {
      this.consultarApi();
    })
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imagenes</p>
  
          <Buscador 
          datosBuscador= {this.datosBuscador}
          />
        </div>
            <div className="row text-center">
                  <Resultado
                  imagenes={this.state.imagenes}
                  PaginaAnt={this.PaginaAnt}
                  PaginaSig={this.PaginaSig}
                  />
            </div>
      </div>
    );
  }
}

export default App;

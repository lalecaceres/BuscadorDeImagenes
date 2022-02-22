import React , { Component} from 'react';

class Buscador extends Component {

    buscadorRef = React.createRef();

    obtenerDatos = (e) => {
            e.preventDefault();


            //Tomamos el valor del input 
            const termino= this.buscadorRef.current.value;

            // Lo enviamos al componente principal
            this.props.datosBuscador(termino);

    }

    render() {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row ">
                    <div className="form-group col-md-8">
                        <input ref={this.buscadorRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-primary btn-block" value="Buscar" />
                    </div>
                </div>
            </form>
        );
    }
}


export default Buscador ;
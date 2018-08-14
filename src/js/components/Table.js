import React, {Component} from 'react';
import '../../style/table.css';

class Table extends Component {

    constructor(props) {
        super(props)

        this.state = {
            addListener: false
        }
    }

    componentDidUpdate() {
        if(this.props.elements) {
            this.escutarEventos(this.getCollapsibleItem, this.removeCollapsible, this.addCollapsible, this.addFocusOutListener);
        }
    }
    
    escutarEventos = (getCollapsibleItem, removeCollapsible, addCollapsible, addFocusOutListener) => {        
        let table = document.querySelectorAll('#collapsible_table tr');
        table.forEach(tr => tr.addEventListener('mousedown', function (event) {
            event.preventDefault();
            
            let element = document.getElementById('collapsible_' + this.id);
            if(!element) {
                return;
            }
            let collapsibleItem = getCollapsibleItem(element);
            if(collapsibleItem) {
                if(element.classList.contains('collapsible_table_child')) {
                    removeCollapsible(element);
                    collapsibleItem.focus();
                } else {
                    addCollapsible(element);
                }
                addFocusOutListener(collapsibleItem, element);
            }
        }));
    }

    getCollapsibleItem = (element) => {
        let tdElement = element.firstElementChild;
        if(tdElement) {
            return tdElement.firstElementChild;
        }
        return null
    }
    
    addFocusOutListener = (item, element) => {
        let addCollapsible = this.addCollapsible;
        item.addEventListener('focusout', function() {
            addCollapsible(element);
        });
    }

    removeCollapsible = (element) => {
        element.classList.remove('collapsible_table_child');
    }
    
    addCollapsible = (element) => {
        element.classList.add('collapsible_table_child');
    }

    render() {
        function createStatusComponent(element) {
            return <tr id={element.id} className="collapsible_table_tr collapsible_table_father collapsible_father_text">
                        <td> 
                            <center> 
                                <div className='status_finance_element'/> 
                            </center> 
                        </td>
                        <td> {element.description} </td>
                        <td> R$ { element.value } </td>
                    </tr>
        }

        function createBodyComponent(element) {
            return <tr id={'collapsible_' + element.id} className='collapsible_table_child'>
                        <td colSpan="3"> 
                            <div className='collapsible_content' tabIndex="1">
                                <table>
                                    <tr>
                                        <td className="collapsible_child_label"> Forma de Pagamento </td>
                                        <td className="collapsible_child_value"> { element.paymentType } </td>
                                    </tr>
                                    <tr>
                                        <td className="collapsible_child_label"> Data do Lançamento </td>
                                        <td className="collapsible_child_value"> { element.releaseDate } </td>
                                    </tr>
                                    {
                                        element.expirationDate ? 
                                            <tr>
                                                <td className="collapsible_child_label"> Data de Vencimento </td>
                                                <td className="collapsible_child_value"> { element.expirationDate } </td>
                                            </tr>
                                        : <div/>
                                    }
                                    {
                                        element.paymentDate ? 
                                            <tr>
                                                <td className="collapsible_child_label"> Data de Pagamento </td>
                                                <td className="collapsible_child_value"> { element.paymentDate } </td>
                                            </tr>
                                        : <div/>
                                    }
                                    <tr>
                                        <td className="collapsible_child_label"> Status </td>
                                        <td className="collapsible_child_value"> { element.status } </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <label className="collapsible_child_label_observation"> Observação:  </label> 
                                            <div className="colapsible_child_value_observation">
                                                { element.observation }
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
        }

        let elements = this.props.elements;
        return (
            <div>
                <table id='collapsible_table'>
                    {
                        elements ? elements.map (
                            element => [createStatusComponent(element), createBodyComponent(element)]
                        ) 
                        : <div/>
                    }
                </table> 
            </div>
        )
    }
}

export default Table;
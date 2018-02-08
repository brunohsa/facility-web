import React, {Component} from 'react';
import '../../style/table.css';

class Table extends Component {

    constructor(props) {
        super(props)

        this.state = {
            addListener: false
        }
    }

    componentDidMount() {
        this.escutarEventos(this.getCollapsibleItem, this.removeCollapsible, this.addCollapsible, this.addFocusOutListener);
    }

    handlerChange = (value) => {
        this.setState = {
            addListener: value
        }
        console.log(value);
    }
    escutarEventos = (getCollapsibleItem, removeCollapsible, addCollapsible, addFocusOutListener) => {        
        let table = document.querySelectorAll("#table tr");
        
        let collapsibleItem;
        table.forEach(tr => tr.addEventListener('click', function(e) {                    
            let element = document.getElementById('collapsible_' + this.id);
            collapsibleItem = getCollapsibleItem(element);

            if(element.classList.contains('collapsible')) {
                removeCollapsible(element);
                collapsibleItem.focus();
                addFocusOutListener(collapsibleItem, element);                
            } else {
                addCollapsible(element);
                collapsibleItem.removeEventListener('focusout', function(){});
            }
        }));
    }

    getCollapsibleItem = (element) => {
        return element.firstElementChild.firstElementChild;
    }
    
    addFocusOutListener = (item, element) => {
        let addCollapsible = this.addCollapsible;
        item.addEventListener('focusout', function() {
            addCollapsible(element);
        });
    }

    removeFocusOutListener = (item) => {
        item.removeEventListener('focusout', function(){});
    }
    
    removeCollapsible = (element) => {
        element.classList.remove('collapsible');
    }
    
    addCollapsible = (element) => {
        element.classList.add('collapsible');
    }

    render() {
        return (
            <div>
                <table id='table'>
                    <tbody>
                        <tr id='123' className="father">
                            <td> 
                                <center> <div style={{backgroundColor:'green',height:'20px',width:'20px',borderRadius:'20px'}}/> </center> 
                            </td>
                            <td> Descricao </td>
                            <td> R$ 0,00 </td>
                        </tr>
                        <tr id='collapsible_123' className='collapsible'>
                            <td colSpan="3"> 
                                <div id='item' tabIndex="1">   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac lorem ante. Vestibulum quis magna pretium, lacinia arcu at, condimentum odio. Ut ultrices tempor metus, sit amet tristique nibh vestibulum in. Pellentesque vel velit eget purus mollis placerat sed sit amet enim. Sed efficitur orci sapien, ac laoreet erat fringilla sodales. </div>
                            </td>
                        </tr>
                        <tr id='456' className="father">
                            <td> 
                                <center> <div style={{backgroundColor:'red',height:'20px',width:'20px',borderRadius:'20px'}}/> </center> 
                            </td>
                            <td> Descricao </td>
                            <td> R$ 0,00 </td>
                        </tr>
                        <tr id='collapsible_456' className='collapsible'>
                            <td colSpan="3"> 
                                <div id='item' tabIndex="1">  TESTE </div>
                            </td>
                        </tr>
                        <tr id='789' className="father">
                            <td> 
                                <center> <div style={{backgroundColor:'red',height:'20px',width:'20px',borderRadius:'20px'}}/> </center> 
                            </td>
                            <td> Descricao </td>
                            <td> R$ 0,00 </td>
                        </tr>
                        <tr id='collapsible_789' className='collapsible'>
                            <td colSpan="3"> 
                                <div id='item' tabIndex="1">  TESTE </div>
                            </td>
                        </tr>
                    </tbody>    
                </table> 
            </div>
        )
    }
}

export default Table;
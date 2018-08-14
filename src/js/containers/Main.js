import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from '../components/Table';
import expenseAPI from '../api/expenseAPI'

class Main extends Component {
    
    componentDidMount() {
       let token = this.props.token;
       this.props.findExpenses(token);
    }

    render() {
        return (
            <div>
                <Table elements={this.props.expenses}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      findExpenses: (token) => {
        dispatch(expenseAPI.findExpenses(token));
      }
    }
}

const mapStateToProps = (state) => {
    return {
      error: state.error,
      token: state.login ? state.login.token : '',
      expenses: state.expense.expenses
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
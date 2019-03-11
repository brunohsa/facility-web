import React, {Component}from 'react';
import TableHeadApp from './TableHeadApp';
import TableToolbar from './TableToolbar';

import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import '../../../styles/table/table-app.css';

let counter = 0;

class TableApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            order: 'asc',
            orderBy: 'value',
            selected: [],
            data: [
              this.createData('Celular', 123, 'Crédito', 'Pago', 'Receita'),
              this.createData('Celular', 452, 'Crédito', 'Pago', 'Despesa'),
              this.createData('Celular', 262, 'Crédito', 'Pago', 'Receita'),
              this.createData('Celular', 159, 'Crédito', 'Pago', 'Receita'),
              this.createData('Celular', 356, 'Crédito', 'Pago', 'Receita'),
              this.createData('Celular', 408, 'Crédito', 'Pago', 'Receita'),
              this.createData('Celular', 237, 'Crédito', 'Pago', 'Receita'),
              this.createData('Celular', 375, 'Crédito', 'Pago', 'Receita'),
              this.createData('Celular', 518, 'Crédito', 'Pago', 'Receita'),
              this.createData('Celular', 392, 'Crédito', 'Pago', 'Receita'),
              this.createData('Celular', 318, 'Crédito', 'Pago', 'Receita'),
              this.createData('Celular', 360, 'Crédito', 'Pago', 'Receita'),
              this.createData('Celular', 437, 'Crédito', 'Pago', 'Receita'),
            ],
            page: 0,
            rowsPerPage: 5,
          };
    }

    
    createData(description, value, payment, situation, type) {
      counter += 1;
      return { id: counter, description, value, payment, situation, type };
    }
    

    handleRequestSort(event, property) {
        const orderBy = property;
        let order = 'desc';
    
        if (this.state.orderBy === property && this.state.order === 'desc') {
          order = 'asc';
        }
    
        this.setState({ order:order, orderBy:orderBy });
      };
    
      handleSelectAllClick(event) {
        if (event.target.checked) {
          this.setState(state => ({ selected: state.data.map(n => n.id) }));
          return;
        }
        this.setState({ selected: [] });
      };

      desc(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
          return -1;
        }
        if (b[orderBy] > a[orderBy]) {
          return 1;
        }
        return 0;
      }
      
      stableSort(array, cmp) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
          const order = cmp(a[0], b[0]);
          if (order !== 0) return order;
          return a[1] - b[1];
        });
        return stabilizedThis.map(el => el[0]);
      }
      
      getSorting(order, orderBy) {
        return order === 'desc' ? (a, b) => this.desc(a, b, orderBy) : (a, b) => -this.desc(a, b, orderBy);
      }
    
      handleClick(event, id){
        const { selected } = this.state;
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
    
        this.setState({ selected: newSelected });
      };
    
      handleChangePage(event, page) {
        this.setState({ page:page });
      };
    
      handleChangeRowsPerPage(event) {
        this.setState({ rowsPerPage: event.target.value });
      };
    
      isSelected(id) { this.state.selected.indexOf(id) !== -1;}

    render() {

        const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

        return (
          <Paper>
            <div id='container-table-app'>
              <TableToolbar numSelected={selected.length} />
              <Table aria-labelledby="tableTitle">
                  <TableHeadApp
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={this.handleSelectAllClick.bind(this)}
                    onRequestSort={this.handleRequestSort.bind(this)}
                    rowCount={data.length}
                  />
                  <TableBody>
                    {
                      this.stableSort(data, this.getSorting(order, orderBy))
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map(n => {
                        const isSelected = this.isSelected(n.id);
                          return (
                            <TableRow
                              hover
                              aria-checked={isSelected}
                              tabIndex={-1}
                              key={n.id}
                              selected={isSelected}
                            >
                              <TableCell component="th" scope="row" padding="none">
                                {n.description}
                              </TableCell>
                              <TableCell align="right">{n.value}</TableCell>
                              <TableCell align="right">{n.payment}</TableCell>
                              <TableCell align="right">{n.situation}</TableCell>
                              <TableCell align="right">{n.type}</TableCell>
                              <TableCell align="left"> 
                                <Button className="btn" aria-label="Filtro" />
                                <Button className="btn" />
                              </TableCell>
                            </TableRow>
                          );
                      })
                    }
                    {
                      emptyRows > 0 && (
                        <TableRow style={{ height: 49 * emptyRows }}>
                          <TableCell colSpan={7} />
                        </TableRow>
                      )
                    }
                  </TableBody>
              </Table>
            </div>
              <TablePagination
                rowsPerPageOptions={[5, 10, 20, 25]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                  'aria-label': 'Página Anterior',
                }}
                nextIconButtonProps={{
                  'aria-label': 'Próxima Página',
                }}
                onChangePage={this.handleChangePage.bind(this)}
                onChangeRowsPerPage={this.handleChangeRowsPerPage.bind(this)}
              />
          </Paper>
        );
    }
}

export default TableApp;
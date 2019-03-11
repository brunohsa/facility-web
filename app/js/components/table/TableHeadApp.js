import React, {Component}from 'react';

import PropTypes from 'prop-types';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';

const rows = [
  { id: 'description', numeric: false, disablePadding: true, label: 'Descrição' },
  { id: 'value', numeric: true, disablePadding: false, label: 'Valor' },
  { id: 'payment', numeric: true, disablePadding: false, label: 'Pagamento' },
  { id: 'situation', numeric: true, disablePadding: false, label: 'Situação' },
  { id: 'type', numeric: true, disablePadding: false, label: 'Tipo' },
  { id: 'actions', numeric: false, disablePadding: false, label: 'Ações' }
];

class TableHeadApp extends Component {

  constructor(props) {
    super(props);
  }

    createSortHandler(property) {
      return function (event) {
          this.props.onRequestSort(event, property);
      }
    }

    render() {

        const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

        return (
          <TableHead>
            <TableRow>
              {
                rows.map(row => (
                  <TableCell
                    key={row.id}
                    align={row.numeric ? 'right' : 'left'}
                    padding={row.disablePadding ? 'none' : 'default'}
                    sortDirection={orderBy === row.id ? order : false}
                  >
                    <Tooltip
                      title="Ordenar"
                      placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                      enterDelay={300}
                    >
                      <TableSortLabel
                        active={orderBy === row.id}
                        direction={order}
                        onClick={this.createSortHandler(row.id).bind(this)}
                      >
                        { row.label }
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                ), this)
              }
          </TableRow>
        </TableHead>
        );
    }
}

export default TableHeadApp;
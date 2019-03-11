import React, {Component}from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';

import '../../../styles/table/table-toolbar.css';

class TableToolbar extends Component {

  render() {

    return (
      <Toolbar id='table-toolbar-container'>
          <div id='title-table-toolbar-container'>
            <Typography id="title-table-style"> Últimos Lancamentos </Typography>
          </div>
          <div id='filter-table-toolbar-container'>
            <Tooltip title="Filtro">
              <IconButton id='table-tooltip-position' aria-label="Filtro">
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          </div>
      </Toolbar>
    );
  }
}

export default TableToolbar;
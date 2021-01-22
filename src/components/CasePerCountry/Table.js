import React, { Component } from "react";
import TableList from "./TableList";

export class Table extends Component {
  render() {
    return (
      <div className='tg-wrap table-wrapper'>
        <table className='tg fl-table'>
          <thead>
            <tr>
              <th scope='col'>Flag</th>
              <th className='tg-0lax' scope='col'>
                Country
              </th>
              <th className='tg-0lax' scope='col'>
                Active
              </th>
              <th className='tg-0lax' scope='col'>
                Cases
              </th>
              <th className='tg-0lax' scope='col'>
                Deaths
              </th>
              <th className='tg-0lax' scope='col'>
                Recovered
              </th>
              <th className='tg-0lax' scope='col'>
                Today Cases
              </th>
              <th className='tg-0lax' scope='col'>
                Today Deaths
              </th>
            </tr>
          </thead>
          <TableList filteredCountry={this.props.filteredCountries} />
        </table>
      </div>
    );
  }
}

export default Table;

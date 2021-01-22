import React from "react";

function TableList({ filteredCountry }) {
  return (
    <tbody>
      {filteredCountry.map((filteredCountries, index) => (
        <tr key={index}>
          <td data-label='Flag'>
            <img
              src={filteredCountries.countryInfo.flag}
              alt={`${filteredCountries.country} flag`}
              width='15'
              height='15'
            />
          </td>
          <td className='tg-0lax' data-label='Country'>
            {filteredCountries.country}
          </td>
          <td className='tg-0lax' data-label='Active'>
            {filteredCountries.active}
          </td>
          <td className='tg-0lax' data-label='Cases'>
            {filteredCountries.cases}
          </td>
          <td className='tg-0lax' data-label='Deaths'>
            {filteredCountries.deaths}
          </td>
          <td className='tg-0lax' data-label='Recovered'>
            {filteredCountries.recovered}
          </td>
          <td className='tg-0lax' data-label='today Cases'>
            {filteredCountries.todayCases}
          </td>
          <td className='tg-0lax' data-label='today Deaths'>
            {filteredCountries.todayDeaths}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableList;

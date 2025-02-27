import React, { useRef } from 'react';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective, SheetModel,getRangeAddress, getRangeIndexes  } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { CellStyleModel } from '@syncfusion/ej2-react-spreadsheet';
import { CellModel } from '@syncfusion/ej2-react-spreadsheet';

import './App.css';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-spreadsheet/styles/material.css';
import { data } from './datasource';



function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
  const styles: CellStyleModel = { textAlign: 'center', fontWeight: 'bold', verticalAlign: 'middle', fontStyle: 'italic', fontSize: '15pt' };
  const cellStyle: CellStyleModel = { fontStyle: 'italic', fontWeight: 'bold' };
  const fontStyle: CellStyleModel = { fontWeight: 'bold', textAlign: 'right' };
  


    // Custom function to calculate round down for values.
    const roundDownHandler = (value: number, digit: number) => {
        let multiplier: number = Math.pow(10, digit);
        return Math.floor(value * multiplier) / multiplier;
    }

    // custom function to TRIM the value in cell
    const trimHandler = (value: string) => {
        return value.trim();
    }

    // custom function for converting string to Uppercase
    const upperCaseHandler = (value: string) => {
        return value.toUpperCase();
    }
    // custom function for converting string to Lowercase
    const LowerCaseHandler = (value: string) => {
        return value.toLowerCase();
    }

    
    



    React.useEffect(() => {
    let spreadsheet = spreadsheetRef.current;
    if (spreadsheet) {
        
        // Adding custom function for calculating round down for the value.
        spreadsheet.addCustomFunction(roundDownHandler, 'ROUNDDOWN');
        // Adding custom function for Trimming the string on the cell.
        spreadsheet.addCustomFunction(trimHandler, 'TRIM');

        // Adding custom function for Converting string to uppercase.
        spreadsheet.addCustomFunction(upperCaseHandler, 'UPPERCASE');
        // Adding custom function for Converting string to lowercase.
        spreadsheet.addCustomFunction(LowerCaseHandler, 'LOWERCASE');
        }
    }, []);

  return (
    <div className="App">
        
      <SpreadsheetComponent ref={spreadsheetRef} allowOpen={true} openUrl='https://services.syncfusion.com/react/production/api/spreadsheet/open' allowSave={true} saveUrl='https://services.syncfusion.com/react/production/api/spreadsheet/save'/>  
      </div>
    
  );
}

export default App;

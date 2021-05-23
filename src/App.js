import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './component/table/Table';

function App() {
  const [userData, setUserData] = useState([])
  const [tableHeader, setTableHeader] = useState([])
  useEffect(() => {
    if (userData.length === 0 || tableHeader.length === 0) {
      fetch('https://my.api.mockaroo.com/contact_data.json?key=2fd1ee40')
          .then(function (response) {
              return response.text();
          }).then(function (data) {
              let jsonOutput = createJson(data.split("\n"));
              setTableHeader(jsonOutput[0]);
              setUserData(jsonOutput[1]);
          });
    }
  }, [userData, tableHeader])

  return (
    <div className="App">
      <Table columns={tableHeader} data={userData} />
    </div>
  );
}

function createJson(inputArray) {
  let objectKeys = inputArray[0].split(",");
  let arrayLength = inputArray.length;
  let outputObject = [];
  for (var i = 1; i < arrayLength; i++) {
    if (inputArray[i] !== "") {
      let currentArray = inputArray[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
      let dataObject = {};
      currentArray.map((data, index) => dataObject[objectKeys[index]] = data.replace(/^"(.*)"$/, '$1'));
      outputObject.push(dataObject);
    }
  }
  return [objectKeys, outputObject];
}

export default App;

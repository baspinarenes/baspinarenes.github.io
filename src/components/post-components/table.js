import React from "react";
import allDatas from "../../data";

const Table = props => {
  const { dataName, partName } = props;

  const data = allDatas[dataName];
  const dataPart = data[partName];

  return (
    <div className="table">
      <table>
        <tr>
          {data.columnNames.map(columnName => (
            <th key={columnName}>{columnName}</th>
          ))}
        </tr>
        {dataPart.map(rowData => (
          <tr key={rowData}>
            {rowData.map(
              (cellData, index) =>
                typeof cellData == "string" && (
                  <td
                    key={rowData + cellData}
                    className={
                      index === 0 && rowData[rowData.length - 1]?.color
                    }
                  >
                    {cellData}
                  </td>
                )
            )}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;

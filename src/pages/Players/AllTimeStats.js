import React from "react";
import "./AllTimeStats.css";
import "@fontsource/overpass";

function AllTimeStats({ list, rowNames, width = "auto", height = "auto" }) {
  return (
    <>
    <div className="alltimestats-container">
      <div className="alltimestats-header">
        <h2>Per Game Stats</h2>
      </div>
      <div className="alltimeStats-table">
        {list.length > 0 && (
          <table
            cellSpacing="0"
            style={{ height: height, padding: "5px 10px" }}
          >
            <thead>
              <tr>
                {rowNames.map((headerItem, i) => (
                  <th key={i}>{headerItem.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.values(list).map((obj, i) => (
                <tr key={i}>
                  {Object.values(obj).map((value, i2) => (
                    <td className="td"key={i2}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
    </>
  );
}

export default AllTimeStats;

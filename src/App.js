import React from 'react';
import Records from './record.json';
import Datas from './data.json';
function App() {
  // const modifiedRecords = Records.map((record, index) => ({
  //   ...record,
  //   avg_response_time: record.avg_response_time.toFixed(2),
  //   max_response_time: record.max_response_time.toFixed(2),
  //   median_response_time: record.median_response_time.toFixed(2),
  //   min_response_time: record.min_response_time.toFixed(2),
  //   num_requests: record.num_requests.toLocaleString(),
  //   total_rpm: record.total_rpm.toFixed(2),
  //   total_rps: record.total_rps.toFixed(2),
  // }));

  return (
    <div className="App">
      <table className="record-table" style={{ border: '1px solid black',padding: '8px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Avg Response Time</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Max Response Time</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Median Response Time</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Min Response Time</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Num Requests</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Response Time Percentiles</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Response Times</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Request Type</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Total RPM</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Total RPS</th>
          </tr>
        </thead>
        <tbody>
          {Records.map((record, index) => (
            <tr >
              <td style={{ border: '1px solid black', padding: '8px' }}>{record.avg_response_time}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{record.max_response_time}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{record.median_response_time}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{record.min_response_time}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{record.num_requests}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{JSON.stringify(record.response_time_percentiles)}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{JSON.stringify(record.response_times)}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{record.request_type}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{record.total_rpm}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{record.total_rps}</td>
            </tr>
          ))}
          {Datas.map((data, index) => (
            <tr >
              <td style={{ border: '1px solid black', padding: '8px' }}>{data.avg_response_time}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{data.max_response_time}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{data.median_response_time}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{data.min_response_time}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{data.num_requests}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{JSON.stringify(data.response_time_percentiles)}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{JSON.stringify(data.response_times)}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{data.request_type}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{data.total_rpm}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{data.total_rps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

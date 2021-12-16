import { Table } from "reactstrap";

const TableOpeningTimes = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Days</th>
          <th>Opening Time</th>
          <th>Closing Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Monday</th>
          <td>11:00am</td>
          <td>12:00pm</td>
        </tr>
        <tr>
          <th scope="row">Tuesday</th>
          <td>11:00am</td>
          <td>12:00pm</td>
        </tr>
        <tr>
          <th scope="row">Wednesday</th>
          <td>11:00am</td>
          <td>12:00pm</td>
        </tr>
        <tr>
          <th scope="row">Thursday</th>
          <td>11:00am</td>
          <td>12:00pm</td>
        </tr>
        <tr>
          <th scope="row">Friday</th>
          <td>11:00am</td>
          <td>02:00am</td>
        </tr>
        <tr>
          <th scope="row">Saturday</th>
          <td>09:00am</td>
          <td>02:00am</td>
        </tr>
        <tr>
          <th scope="row">Sunday</th>
          <td>09:00am</td>
          <td>21:00pm</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableOpeningTimes;

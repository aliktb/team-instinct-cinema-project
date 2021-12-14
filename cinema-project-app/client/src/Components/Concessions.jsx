import { Table } from "reactstrap";

const Concessions = () => {
    return (
        <div style={{ marginTop: "30px" }}>
            <p>Concessions: </p>
            <Table >
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price: Regular</th>
                        <th>Price: Large</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Popcorn</td>
                        <td>£7.99</td>
                        <td>£9.99</td>
                    </tr>
                    <tr>
                        <td>Drinks</td>
                        <td>£3.99</td>
                        <td>£4.99</td>
                    </tr>
                    <tr>
                        <td>Hot Dogs</td>
                        <td>£6.99</td>
                        <td>£8.99</td>
                    </tr>
                    <tr>
                        <td>Nachos</td>
                        <td>£6.99</td>
                        <td>£8.99</td>
                    </tr>
                    <tr>
                        <td>Tango Iceblast</td>
                        <td>£4.99</td>
                        <td>£5.99</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Concessions;
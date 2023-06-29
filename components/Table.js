import RowTableCart from "./RowTableCart";

function Table() {
    return (
        <table className="table w-full">
            <thead>
                <tr>
                    <th className="bg-rose-200 rounded-none">Product</th>
                    <th className="bg-rose-200">Quantity</th>
                    <th className="bg-rose-200">Price</th>
                    <th className="bg-rose-200 rounded-none"></th>
                </tr>
            </thead>
            <tbody>
                <RowTableCart />
            </tbody>
        </table>
    );
}

export default Table;

import React, { useContext, useEffect, useState } from "react";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import { staticMethodPayment } from "@/utils/utils";
import { UserContext } from "@/context/user-context";
import { useGetTables } from "@/hooks/useGetTables";
import { Form } from "formik";

function BankTransfer() {
    const { token } = useContext(UserContext);
    const getTables = useGetTables(token);
    const [tables, setTables] = useState([]);
    const [table, setTable] = useState(0);

    useEffect(() => {
        getTables
            .then((res) => {
                setTables(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    console.log(table);
    return (
        <Form className="w-full h-full flex gap-x-10">
            <div className="w-full">
                <div>
                    <Label label="CHOOSE BANK" />
                    <Input
                        className="select select-secondary select-sm w-full font-semibold uppercase text-rose-600"
                        component="select"
                        name="bank"
                    >
                        {staticMethodPayment.bank_transfer.map((value) => (
                            <option
                                key={value.id}
                                value={value.bank}
                                className="font-semibold"
                            >
                                {value.bank}
                            </option>
                        ))}
                    </Input>
                </div>
                <div>
                    <Label label="NOTES" />
                    <Input
                        className="textarea textarea-bordered  textarea-secondary leading-none"
                        placeholder="Note"
                        as="textarea"
                        name="notes"
                    />
                </div>
            </div>
            <div className="w-1/2">
                <div>
                    <Label label="TABLE #" />
                    <Input
                        className="select select-secondary select-sm w-full font-semibold uppercase text-rose-600"
                        name="tables"
                        component="select"
                        onChange={(event) => setTable(event.target.value)}
                        value={table}
                    >
                        {tables?.map((table) => (
                            <option key={table.id} value={table.id}>
                                {table.category}
                            </option>
                        ))}
                    </Input>
                </div>
                <div className="mt-2 flex items-center justify-end">
                    <Button className="bg-rose-600 rounded-none px-0 group">
                        <span className="p-0 m-0 h-full bg-rose-800 flex items-center px-3 group-hover:bg-inherit">
                            Rp.28.000
                        </span>
                        <span className="p-0 m-0 px-3">Pay</span>
                    </Button>
                </div>
            </div>
        </Form>
    );
}

export default BankTransfer;

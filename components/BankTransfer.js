import React, { useContext, useEffect, useState } from "react";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import { convertRupiah, staticMethodPayment } from "@/utils/utils";
import { UserContext } from "@/context/user-context";
import { useGetTableCategories, useGetTable } from "@/hooks/useGetTables";
import { Form } from "formik";

function BankTransfer({ prices }) {
    const { token } = useContext(UserContext);

    const [tables, setTables] = useState([]);
    const [tableId, setIdTable] = useState(0);
    const [table, setTable] = useState([]);

    const getTableCategories = useGetTableCategories(token);
    const getTable = useGetTable(tableId, token);
    useEffect(() => {
        getTableCategories
            .then((res) => {
                setTables(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        if (tableId) {
            getTable
                .then((res) => {
                    setTable(res);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [tableId]);

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
                    <Label label="TABLE CATEGORY #" />
                    <Input
                        className="select select-secondary select-sm w-full font-semibold uppercase text-rose-600"
                        name="tables"
                        component="select"
                        onChange={(event) => setIdTable(event.target.value)}
                        value={tableId}
                    >
                        {tables?.map((table) => (
                            <option key={table.id} value={table.id}>
                                {table.category}
                            </option>
                        ))}
                    </Input>
                </div>
                <div>
                    {/* <Label label="TABLE #" />
                    <Input
                        className="select select-secondary select-sm w-full font-semibold uppercase text-rose-600"
                        name="table"
                        component="select"
                    >
                        <option value="">H</option>
                    </Input> */}
                </div>
                <div className="mt-2 flex items-center justify-end">
                    <Button className="bg-rose-600 rounded-none px-0 group">
                        <span className="p-0 m-0 h-full bg-rose-800 flex items-center px-3 group-hover:bg-inherit">
                            Rp{convertRupiah(Number(prices.total))}
                        </span>
                        <span className="p-0 m-0 px-3">Pay</span>
                    </Button>
                </div>
            </div>
        </Form>
    );
}

export default BankTransfer;

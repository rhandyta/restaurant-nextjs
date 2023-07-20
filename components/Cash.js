import React, { useContext, useEffect, useState } from "react";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import { convertRupiah } from "@/utils/utils";
import { UserContext } from "@/context/user-context";
import { useGetTableCategories, useGetTable } from "@/hooks/useGetTables";
import ErrorMessageField from "./ErrorMessageField";
import ButtonLoading from "./ButtonLoading";
import { useFormikContext } from "formik";

function Cash({ prices, isLoading, props }) {
    const { token = null } = useContext(UserContext);

    const { values, setFieldValue } = useFormikContext();

    const [tables, setTables] = useState([]);
    const [table, setTable] = useState([]);

    const getTableCategories = useGetTableCategories;
    const getTable = useGetTable;

    useEffect(() => {
        if (token) {
            getTableCategories(token)
                .then((res) => {
                    setTables(res);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            setTables([]);
        }

        if (values.tables) {
            getTableHandle(values.tables);
        } else {
            setTable([]);
        }
    }, [token, values]);

    const getTableHandle = async (id) => {
        try {
            const request = await getTable(id, token);
            setTable(request);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (values.tables != "") {
            setFieldValue("table", "");
        }
    }, [values.tables]);

    return (
        <div className="w-full h-full flex gap-x-10">
            <div className="w-full">
                <div>
                    <Label label="NOTES" />
                    <Input
                        className="textarea textarea-bordered  textarea-secondary leading-none"
                        placeholder="Note"
                        as="textarea"
                        name="notes"
                    />

                    <ErrorMessageField name="notes" />
                </div>
            </div>
            <div className="w-1/2">
                <div>
                    <Label label="TABLE CATEGORY #" />
                    <Input
                        className="select select-secondary select-sm w-full font-semibold uppercase text-rose-600"
                        name="tables"
                        component="select"
                    >
                        <option disabled key={"default"} value={""}>
                            --CHOOSE TABLE CATEGORIES--
                        </option>
                        {tables?.map((table) => (
                            <option key={table.id} value={table.id}>
                                {table.category}
                            </option>
                        ))}
                    </Input>
                    <ErrorMessageField name="tables" />
                </div>
                <div className={values?.tables == 0 ? "hidden" : ""}>
                    <Label label="TABLE #" />
                    <Input
                        className="select select-secondary select-sm w-full font-semibold uppercase text-rose-600"
                        name="table"
                        component="select"
                    >
                        <option disabled key={"default"} value={""}>
                            --CHOOSE TABLE--
                        </option>
                        {table?.map((item) => (
                            <option key={item.id} value={item.no}>
                                #No-{item.no}
                            </option>
                        ))}
                    </Input>
                    <ErrorMessageField name="table" />
                </div>
                <div className="mt-2 flex items-center justify-end">
                    {isLoading ? (
                        <ButtonLoading />
                    ) : (
                        !props.isSubmitting &&
                        props.isValid &&
                        props.dirty && (
                            <Button
                                className="bg-rose-600 rounded-none px-0 group"
                                type="submit"
                            >
                                <span className="p-0 m-0 h-full bg-rose-800 flex items-center px-3 group-hover:bg-inherit">
                                    Rp{convertRupiah(Number(prices.total))}
                                </span>
                                <span className="p-0 m-0 px-3">Pay</span>
                            </Button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cash;

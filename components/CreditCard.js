import React from "react";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import ErrorMessageField from "./ErrorMessageField";

function CreditCard() {
    return (
        <div className="w-full h-full flex gap-x-10">
            <div className="w-1/2">
                <div>
                    <Label label="CARD NUMBER" />
                    <Input className="" name="card_number" />
                    <ErrorMessageField name="card_number" />
                </div>
                <div>
                    <Label label="CARD HOLDER NAME" />
                    <Input className="" name="card_holder_name" />
                    <ErrorMessageField name="card_holder_name" />
                </div>
            </div>
            <div className="w-1/2">
                <div>
                    <Label label="EXPIRATION DATE" />
                    <Input className="" name="expiration_date" />
                    <ErrorMessageField name="expiration_date" />
                </div>
                <div>
                    <Label label="CVV" />
                    <Input className="" name="cvv" />
                    <ErrorMessageField name="cvv" />
                </div>
                <div className="mt-2 flex items-center justify-end">
                    <Button className="bg-rose-600 rounded-none px-0 group" type="submit">
                        <span className="p-0 m-0 h-full bg-rose-800 flex items-center px-3 group-hover:bg-inherit">
                            Rp.28.000
                        </span>
                        <span className="p-0 m-0 px-3">Pay</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CreditCard;

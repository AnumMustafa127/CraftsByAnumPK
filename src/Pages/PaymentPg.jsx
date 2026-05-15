import React, { useReducer, useState } from "react";

function PaymentMethod() {

    function reducer(state, action) {

        switch (action.type) {

            case "CoD":
                return "CoD";

            case "JazzCash":
                return "JazzCash";

            case "EasyPaisa":
                return "EasyPaisa";

            case "Card":
                return "Card";

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, "");

    const [popup, setPopup] = useState(false);
    const [isLoading, setisLoading] = useState(false)

    // Inputs
    const [number, setNumber] = useState("");
    const [pin, setPin] = useState("");

    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");

    function handleOrder() {

    // No method selected
    if (state === "") {
        alert("Please select a payment method");
        return;
    }

    // JazzCash / EasyPaisa Validation
    if (state === "JazzCash" || state === "EasyPaisa") {

        if (number.length !== 11) {
            alert("Mobile number must be 11 digits");
            return;
        }

        if (pin.length !== 4) {
            alert("PIN must be 4 digits");
            return;
        }
    }

    // Card Validation
    if (state === "Card") {

        if (cardNumber.length !== 16) {
            alert("Card number must be 16 digits");
            return;
        }

        if (cardName.trim() === "") {
            alert("Enter card holder name");
            return;
        }

        if (expiry.trim() === "") {
            alert("Enter expiry date");
            return;
        }

        if (cvv.length !== 3) {
            alert("CVV must be 3 digits");
            return;
        }
    }

    // Start Loading
    setisLoading(true);

    // Fake Payment Processing
    setTimeout(() => {

        setisLoading(false);

        setPopup(true);

        setTimeout(() => {
            setPopup(false);
        }, 3000);

    }, 3000);
}

    return (
        <div className="min-h-screen text-[#D4DE95] bg-[#2d3416] flex items-center justify-center relative">

            {/* Popup */}
            {popup && (
                <div className="absolute top-10 bg-green-400 text-black px-6 py-3 rounded-xl font-bold shadow-lg animate-bounce">
                    Hurre! Order Confirmed 🎉
                </div>
            )}
            {isLoading && (
                <div className="absolute top-10 bg-white text-black px-6 py-3 rounded-xl font-bold shadow-lg animate-pulse">
                    Processing Payment...
                </div>
            )}

            <div className="border border-white p-10 rounded-xl w-[420px] flex flex-col gap-6">

                <h1 className="text-3xl font-bold text-center">
                    Choose Payment Method
                </h1>

                <div className="flex flex-col gap-4">

                    {/* COD */}
                    <label className="border p-3 rounded-lg cursor-pointer hover:bg-white hover:text-black transition-all">

                        <input
                            type="radio"
                            name="payment"
                            className="mr-2"
                            onChange={() => dispatch({ type: "CoD" })}
                        />

                        Cash on Delivery

                    </label>

                    {state === "CoD" && (
                       <p>100 Rs. CoD added!</p>
                    )}

                    {/* JazzCash */}
                    <label className="border p-3 rounded-lg cursor-pointer hover:bg-white hover:text-black transition-all">

                        <input
                            type="radio"
                            name="payment"
                            className="mr-2"
                            onChange={() => dispatch({ type: "JazzCash" })}
                        />

                        JazzCash

                    </label>

                    {state === "JazzCash" && (
                        <div className="flex flex-col gap-2">

                            <input
                                type="number"
                                placeholder="Enter JazzCash Number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                className="border border-white p-2 rounded-md bg-black"
                            />

                            <input
                                type="password"
                                placeholder="Enter 4 Digit PIN"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                className="border border-white p-2 rounded-md bg-black"
                            />

                        </div>
                    )}

                    {/* EasyPaisa */}
                    <label className="border p-3 rounded-lg cursor-pointer hover:bg-white hover:text-black transition-all">

                        <input
                            type="radio"
                            name="payment"
                            className="mr-2"
                            onChange={() => dispatch({ type: "EasyPaisa" })}
                        />

                        EasyPaisa

                    </label>

                    {state === "EasyPaisa" && (
                        <div className="flex flex-col gap-2">

                            <input
                                type="number"
                                placeholder="Enter EasyPaisa Number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                className="border border-white p-2 rounded-md bg-black"
                            />

                            <input
                                type="password"
                                placeholder="Enter 4 Digit PIN"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                className="border border-white p-2 rounded-md bg-black"
                            />

                        </div>
                    )}

                    {/* Card */}
                    <label className="border p-3 rounded-lg cursor-pointer hover:bg-white hover:text-black transition-all">

                        <input
                            type="radio"
                            name="payment"
                            className="mr-2"
                            onChange={() => dispatch({ type: "Card" })}
                        />

                        Debit / Credit Card

                    </label>

                    {state === "Card" && (
                        <div className="flex flex-col gap-2">

                            <input
                                type="number"
                                placeholder="Enter Card Number"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                className="border border-white p-2 rounded-md bg-black"
                            />

                            <input
                                type="text"
                                placeholder="Card Holder Name"
                                value={cardName}
                                onChange={(e) => setCardName(e.target.value)}
                                className="border border-white p-2 rounded-md bg-black"
                            />

                            <div className="flex gap-2">

                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    value={expiry}
                                    onChange={(e) => setExpiry(e.target.value)}
                                    className="border border-white p-2 rounded-md bg-black w-1/2"
                                />

                                <input
                                    type="password"
                                    placeholder="CVV"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    className="border border-white p-2 rounded-md bg-black w-1/2"
                                />

                            </div>

                        </div>
                    )}

                </div>

                <button
                    onClick={handleOrder}
                    className="bg-white text-black p-3 rounded-lg font-bold hover:bg-green-300 hover:scale-105 transition-all duration-300"
                >
                    Confirm Order
                </button>

            </div>
        </div>
    );
}

export default PaymentMethod;
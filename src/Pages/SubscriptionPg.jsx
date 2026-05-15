import { useState } from "react"

function JoinPage() {

    const [plan, setPlan] = useState("")

    function handleJoin(planType) {
        if (planType === "free") {
            alert("Joined Free Plan 🎨")
        } else {
         const cardNumber = prompt("Enter Card Details💎")
         if(cardNumber.length <=14){
            alert('plaease enter valid number')
         }
         else{
             alert("Congragulation!! Premium plan Joined 💎")
         }
        }
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">

            <div className="w-full max-w-4xl text-white">

                {/* Heading */}
                <h1 className="text-4xl font-bold text-center mb-2">
                    Are You on the List?
                </h1>

                <p className="text-center text-gray-400 mb-10">
                    Join our art community and explore exclusive content
                </p>

                {/* Two Blocks */}
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Free Block */}
                    <div
                        onClick={() => setPlan("free")}
                        className={`p-6 rounded-2xl items-center border flex justify-between cursor-pointer transition
              ${plan === "free"
                                ? "border-green-400 bg-green-500/10"
                                : "border-white/20 bg-white/5"}`}
                    >
                        <div>
                            <h2 className="text-2xl font-semibold mb-3">Free Plan</h2>

                            <p className="text-gray-300 text-sm space-y-2">
                                ✔ View artworks<br />
                                ✔ Join community<br />
                                ✔ Basic updates<br />
                                ✖ No premium access
                            </p>
                            {/* button */}
                            <div className="mt-6 font-bold text-green-400">
                                $0 / month
                            </div>
                        </div>
                    <button
                        onClick={()=>{handleJoin('free')}}
                        className="px-8 py-3  bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
                    >
                        Join Now
                    </button>

                    </div>

                    {/* Premium Block */}
                    <div
                        onClick={() => setPlan("premium")}
                        className={`p-6 rounded-2xl items-center flex justify-between border cursor-pointer transition
              ${plan === "premium"
                                ? "border-yellow-400 bg-yellow-500/10"
                                : "border-white/20 bg-white/5"}`}
                    >
                        <div>
                            <h2 className="text-2xl font-semibold mb-3">
                                Premium 💎
                            </h2>

                            <p className="text-gray-300 text-sm space-y-2">
                                ✔ Exclusive artworks<br />
                                ✔ Early access drops<br />
                                ✔ Download sketches<br />
                                ✔ Artist support
                            </p>

                            <div className="mt-6 font-bold text-yellow-400">
                                $5 / month
                            </div>

                        </div>
                        <button
                            onClick={()=>{handleJoin('premium')}}
                            className="px-8 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
                        >
                            Continue
                        </button>

                    </div>

                </div>

                {/* Button */}
                <div className="text-center mt-8">
                </div>

            </div>

        </div>
    )
}

export default JoinPage
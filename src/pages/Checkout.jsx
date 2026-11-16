return (
    <section className="bg-gray-50 min-h-screen py-12 relative">

        <div className="max-w-7xl mx-auto px-4">

            {cartdata.length === 0 ? (
                <div>
                    <h2>Your Cart is Empty</h2>
                    <Link to="/shop">Continue Shopping</Link>
                </div>
            ) : (
                <form onSubmit={handleConfirm}>

                    {/* তোমার সম্পূর্ণ Checkout Design এখানে থাকবে */}

                    <button type="submit">
                        Confirm Order
                    </button>

                </form>
            )}

        </div>

        {orderSuccess && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] px-4">

                <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">

                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                        <span className="text-5xl text-green-600">✓</span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900">
                        Order Confirmed!
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Thank you for your purchase. Your order has been placed successfully.
                    </p>

                    <button
                        type="button"
                        onClick={() => navigate("/shop")}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold mt-7"
                    >
                        Continue Shopping
                    </button>

                </div>
            </div>
        )}

    </section>
);
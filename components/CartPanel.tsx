'use client';
import { useCart } from './CartContext';

export const CartPanel = () => {
    const { cart, showCart, toggleCart, clearCart} = useCart();

    if (!showCart) return null;

    return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
        <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleCart}
        ></div>

        {/* Side Drawer */}
        <div className="relative w-full sm:w-96 bg-white shadow-lg flex flex-col max-h-screen">
                {/* Header */}
                <div className='bg-orange-500'>
                    <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        🛒 My Cart
                    </h2>
                    <button onClick={toggleCart}
                            className="text-gray-300 hover:text-gray-800 transition-transform text-lg">
                        ✕
                    </button>
            </div>
        </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
                <p className="text-gray-500 text-center mt-8">Your cart is empty.</p>
            ) : (
                <ul className="space-y-4">
                {cart.map((item) => (
                    <li
                    key={item.id}
                    className="flex items-center justify-between border-b pb-2"
                    >
                    <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-red-500">{item.price}</p>
                    </div>
                    <button
                        //onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:underline text-sm"
                    >
                        Remove
                    </button>
                    </li>
                ))}
                </ul>
            )}
        </div>

            {/* Footer */}
            {cart.length > 0 && (
            <div className="p-4 border-t">
                <button
                onClick={clearCart}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition"
                >
                Checkout
                </button>
            </div>
            )}
        </div>
        </div>
    );
};

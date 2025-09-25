// src/components/Cart.jsx
import { useSelector, useDispatch } from "react-redux";
import { closeCart } from "../../redux/sidebarCartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  // cart state now has both cart items & UI state
  const cartItems = useSelector((state) => state.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  return (
    <>
      {/* Overlay (click to close) */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => dispatch(closeCart())}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button
            onClick={() => dispatch(closeCart())}
            className="text-gray-500 hover:text-black"
          >
            ✖
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-60px)]">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 border-b pb-2">
                <img src={item.image} alt={item.name} className="w-12 h-12" />
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

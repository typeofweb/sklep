import React from 'react';

export const CartSummary = React.memo(() => {
  return (
    <div className="w-full md:w-1/3 mb-4">
      <h3 className="text-2xl mb-8">Podsumowanie</h3>
      <div className="border border-gray-400 bg-gray-100">
        <div className="flex justify-between p-4 text-2xl border-t border-gray-300">
          <h4>Razem</h4>
          <span>2020 zł</span>
        </div>
      </div>
      <button
        className="bg-gray-900 text-white w-full rounded-sm mt-4 p-4 shadow-sm hover:bg-gray-800"
        title="Przejdź do płatności"
      >
        Przejdź do płatności
      </button>
    </div>
  );
});
CartSummary.displayName = 'CartSummary';

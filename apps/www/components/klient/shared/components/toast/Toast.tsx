import type { Nil } from '@sklep/types';
import React from 'react';
import ReactDOM from 'react-dom';

import { SuccessIcon } from '../icons/SuccessIcon';

export const ToastContext = React.createContext<
  Nil<{
    readonly isVisible: boolean;
    readonly setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  }>
>(null);

interface ToastProps {
  readonly isVisible: boolean;
  readonly hideToast: () => void;
}

export const Toast = ({ isVisible, hideToast }: ToastProps) => {
  if (!isVisible) {
    return null;
  }
  setTimeout(() => {
    hideToast();
  }, 2000);
  return ReactDOM.createPortal(
    <div className="fixed top-0 right-0 px-2 h-12 mr-2 mt-2 bg-white flex items-center justify-center rounded slide-left border-l-4 border-green-600 shadow z-50">
      <div className="flex justify-center items-center">
        <SuccessIcon />
        <p className="text-gray-900">Dodano do koszyka</p>
      </div>
    </div>,
    document.body,
  );
};

export const ToastContextProvider = ({ children }: { readonly children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const hideToast = () => {
    setIsVisible(false);
  };

  return (
    <ToastContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
      <Toast hideToast={hideToast} isVisible={isVisible} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a ToastContextProvider');
  }
  return context;
};

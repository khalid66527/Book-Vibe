import React from 'react';

const ErrorPage = ({ 
    title = "Something went wrong", 
    message = "An unexpected error occurred. Please try again.",
    onRetry,
    onGoHome 
}) => {
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
                
                {/* Icon */}
                <div className="flex flex-col items-center pt-10 pb-6 px-8 text-center">
                    <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
                        <span className="text-6xl">⚠️</span>
                    </div>
                    
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        {title}
                    </h1>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        {message}
                    </p>
                </div>

                {/* Buttons */}
                <div className="border-t border-gray-200 dark:border-gray-800 px-8 py-6 flex gap-3">
                    {onRetry && (
                        <button
                            onClick={onRetry}
                            className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-xl transition-all active:scale-95"
                        >
                            Try Again
                        </button >
                    )}
                    
                    <button
                        
                        onClick={onGoHome || (() => window.location.href = '/')}
                        className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium py-3 px-6 rounded-xl transition-all active:scale-95"
                    >
                        Go Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
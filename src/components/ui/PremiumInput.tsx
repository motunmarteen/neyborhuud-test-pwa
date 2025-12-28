'use client';

import React, { useState } from 'react';

interface PremiumInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    icon?: string;
    error?: string;
    success?: boolean;
}

export const PremiumInput: React.FC<PremiumInputProps> = ({
    label,
    icon,
    error,
    success,
    className = '',
    type,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordField = type === 'password';
    const inputType = isPasswordField && showPassword ? 'text' : type;

    return (
        <div className="flex flex-col gap-2 w-full group">
            {label && (
                <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-4">
                    {label}
                </label>
            )}
            <div className={`
                relative flex items-center transition-all duration-300
                neumorphic-socket rounded-2xl px-4 py-1
                ${error ? 'ring-1 ring-brand-red/30' : ''}
                ${success ? 'ring-1 ring-neon-green/30' : ''}
                ${className}
            `}>
                {icon && (
                    <i className={`bi ${icon} text-lg mr-3 text-charcoal/30 group-focus-within:text-brand-blue transition-colors`}></i>
                )}
                <input
                    type={inputType}
                    className="bg-transparent w-full py-3 text-charcoal placeholder:text-charcoal/20 focus:outline-none font-light"
                    {...props}
                />
                {isPasswordField && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="ml-2 text-charcoal/40 hover:text-brand-blue transition-colors focus:outline-none"
                        tabIndex={-1}
                    >
                        <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} text-lg`}></i>
                    </button>
                )}
                {error && (
                    <i className="bi bi-exclamation-circle text-brand-red ml-2" title={error}></i>
                )}
                {success && (
                    <i className="bi bi-check-circle text-neon-green ml-2"></i>
                )}
            </div>
            {error && (
                <span className="text-[10px] text-brand-red ml-4 font-bold uppercase tracking-tighter">
                    {error}
                </span>
            )}
        </div>
    );
};

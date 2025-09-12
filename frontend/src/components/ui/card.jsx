import * as React from "react";

export function Card({ className, ...props }) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white shadow-md p-6 ${className}`}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }) {
  return <div className={`mb-4 ${className}`} {...props} />;
}

export function CardTitle({ className, ...props }) {
  return (
    <h2
      className={`text-xl font-semibold text-gray-900 ${className}`}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }) {
  return <div className={`${className}`} {...props} />;
}


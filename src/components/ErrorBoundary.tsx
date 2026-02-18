import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-red-50 text-red-900">
                    <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
                    <p className="mb-4">The application crashed with the following error:</p>
                    <pre className="bg-white p-4 rounded shadow overflow-auto max-w-full">
                        {this.state.error?.message}
                    </pre>
                    <p className="mt-4 text-sm text-gray-600">
                        Check the console for more details.
                    </p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

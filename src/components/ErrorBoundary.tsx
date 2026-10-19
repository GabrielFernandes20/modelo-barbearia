import React, { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
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
        <div className="min-h-screen bg-dark-950 text-cream-100 flex items-center justify-center p-6 text-center">
          <div className="max-w-md bg-dark-900 border border-gold/30 p-8 rounded-2xl shadow-dark-card-lg">
            <h2 className="font-display text-2xl font-bold text-gold mb-3">Algo deu errado</h2>
            <p className="text-sm text-cream-400 mb-6">
              Ocorreu um erro inesperado na visualização. Recarregue a página para continuar.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 rounded-full bg-gold text-dark-950 font-bold text-sm hover:bg-gold-hover transition-colors"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

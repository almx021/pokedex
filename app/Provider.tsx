'use client'

import { QueryClientProvider } from "@tanstack/react-query"
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient()

const Provider = ({ children }: { children: React.ReactNode }) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default Provider
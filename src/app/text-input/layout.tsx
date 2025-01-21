import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"
import { TextInputProvider } from "@/components/text-input/text-input-context"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <TextInputProvider>
            <SidebarProvider>
                <AppSidebar />
                <main>
                    {children}
                </main>
            </SidebarProvider>
        </TextInputProvider>
    )
}

import Dashboard from "@/components/dashboard/dashboard";

export default function DashboardLayout ({children}: {children: React.ReactNode}) {
    return (
        <div className="flex">
        <div className="w-full h-screen bg-white max-w-xs  p-4">
            <Dashboard />
        </div>
        <div className="w-full overflow-hidden h-screen overflow-y-scroll">
            {children}
        </div>
        </div>
    )
}
import { Outlet } from "react-router-dom";
import { UserProvider } from "./context/userContext/userContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SpeedInsights } from "@vercel/speed-insights/react"
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
function App():ReturnType<React.FC> {

  return (
    
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <div className="w-screen h-screen font-body bg-white">
          <Outlet />
          <SpeedInsights/>
        </div>
      </UserProvider>
    </QueryClientProvider>
  );
  
}


export default App

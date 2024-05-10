import { Toaster } from "sonner";

import { AuthProvider } from "@/components/providers/auth-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { getSession } from "@/lib/auth";

type LayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = async (props: LayoutProps) => {
  const { children } = props;

  const session = await getSession();

  return (
    <ThemeProvider
      attribute="class"
      forcedTheme="dark"
      storageKey="expo-tracker"
      // forcedTheme="light"
      // defaultTheme="system"
      // enableSystem
      // disableTransitionOnChange
    >
      <AuthProvider session={session}>
        <Toaster theme="light" />
        {children}
      </AuthProvider>
    </ThemeProvider>
  );
};

export default HomeLayout;

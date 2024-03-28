import { Inter } from "next/font/google";
import Nav from './constants/sidebar/Nav';
import { Box } from '@mui/material';
import theme from "./styles/theme";
import { ThemeProvider } from '@mui/material';
import NavLegends from "./constants/sidebar/NavLegends";


const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Sales Mind AI Test",
  description: "Dashboard for SalesMind AI",
};
export default function RootLayout({ children }) {

  return (
    <>

      <html lang="en">
        <body>
          <ThemeProvider theme={theme}>
            <div style={{ display: 'flex' }}>

              <Nav />
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <NavLegends />
                <main style={{ flex: 1, padding: '20px' }}>
                  {children}
                </main>
              </Box>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

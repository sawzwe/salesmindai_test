import { Inter } from "next/font/google";
import Nav from './constants/sidebar/Nav';
import { Box } from '@mui/material';
import theme from "./styles/theme";
import { ThemeProvider } from '@mui/material';

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
              <main style={{ flex: 1, padding: '20px' }}>
                {children}
              </main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

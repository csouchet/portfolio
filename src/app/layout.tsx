// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

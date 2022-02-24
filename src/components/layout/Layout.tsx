import Header from "@/components/layout/Header";

type AppProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: AppProps): JSX.Element {
  return (
    <>
      <Header />
      <main className="layout-container">{children}</main>
      {/* <footer>Footer</footer> */}
    </>
  );
}

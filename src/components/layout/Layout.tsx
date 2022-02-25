import Header from "@/components/layout/Header";

type AppProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: AppProps): JSX.Element {
  return (
    <>
      <Header />
      <main className="bg-[#fafafa] ">
        <div className="layout-container ">{children}</div>
      </main>
      {/* <footer>Footer</footer> */}
    </>
  );
}

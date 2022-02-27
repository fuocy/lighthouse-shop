import Header from "@/components/layout/Header";

type AppProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: AppProps): JSX.Element {
  return (
    <>
      <Header />
      <main className="bg-[#fafafa]">{children}</main>
      {/* will show FOOTER later!!! */}
      <footer className="h-[38px] bg-[#333333]"></footer>
    </>
  );
}

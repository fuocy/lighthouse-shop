import dynamic from "next/dynamic";

const ClientSide = ({ children }) => <>{children}</>;

export default dynamic(() => Promise.resolve(ClientSide), {
  ssr: false,
});

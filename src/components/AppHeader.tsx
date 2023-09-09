import Navbar from "./Navbar";

interface AppHeaderProps {
  setAddItemAvailable: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AppHeader({ setAddItemAvailable }: AppHeaderProps) {
  return (
    <>
      <Navbar setAddItemAvailable={setAddItemAvailable} />
    </>
  );
}

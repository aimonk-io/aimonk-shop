import { NavLinks } from "@/Data/Navbar/Index";
import Navbar from "./navbar";


export default function Nav() {
  // Pass null or an empty object if the Navbar expects a session prop
  return <Navbar navLinks={NavLinks} />;
}

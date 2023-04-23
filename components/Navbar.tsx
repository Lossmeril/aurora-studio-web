import { Navbar, Text, Button, Link } from "@nextui-org/react";
import Image from "next/image";

const SiteNavbar = () => {
  return (
    <Navbar
      variant="sticky"
      maxWidth="fluid"
      height="100px"
      disableBlur
      disableShadow
    >
      <Navbar.Brand>
        <div style={{ width: "300px", height: "80px", position: "relative" }}>
          <Image
            src={"/img/logo.png"}
            alt="AURORA studio logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </Navbar.Brand>
      <Navbar.Content activeColor="primary" hideIn="xs" variant="underline">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">
          Customers
        </Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} color="primary" href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default SiteNavbar;

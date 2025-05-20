import { Link } from "react-router-dom";

const links = [
  { path: "/", name: "Inicio" },
  { path: "/Contact", name: "Contacto" },
  { path: "/Team", name: "Equipo" },
  { path: "/About", name: "Acerca de" }
];

export default function Nav() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-4 justify-center">
      {
        // Se usa map para recorrer cada objeto del array y crear un <Link> por cada ruta
        links.map(link => (
          <Link key={link.path} to={link.path}>
            {link.name}
          </Link>
        ))
      }
    </nav>
  );
}

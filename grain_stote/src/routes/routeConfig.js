export const ROLES = {
  admin: "Administrador",
  vendedor: "Vendedor",
  contador: "Contador",
};

export const ROLE_PROFILE = {
  admin: {
    panelLabel: "Panel Administrador",
    profileName: "Administrador",
    profileRole: "Admin",
    avatar: "A",
  },
  vendedor: {
    panelLabel: "Panel Vendedor",
    profileName: "Vendedor",
    profileRole: "Ventas",
    avatar: "V",
  },
  contador: {
    panelLabel: "Panel Contador",
    profileName: "Contador",
    profileRole: "Finanzas",
    avatar: "C",
  },
};

export const PUBLIC_ROUTES = [
  { path: "/login", label: "Iniciar sesion" },
  { path: "/registro", label: "Registro" },
];

export const ROLE_ROUTES = {
  admin: [
    { path: "/admin/dashboard", label: "Dashboard", icon: "dashboard", group: "Principal" },
    { path: "/admin/ventas", label: "Ventas", icon: "sales", group: "Principal" },
    { path: "/admin/clientes", label: "Clientes", icon: "customers", group: "Gestion" },
    { path: "/admin/productos", label: "Productos", icon: "products", group: "Gestion" },
    { path: "/admin/reportes", label: "Reportes", icon: "reports", group: "Gestion" },
    { path: "/admin/configuracion", label: "Configuracion", icon: "settings", group: "Gestion" },
  ],
  vendedor: [
    { path: "/vendedor/dashboard", label: "Dashboard", icon: "dashboard", group: "Principal" },
    { path: "/vendedor/ventas", label: "Ventas", icon: "sales", group: "Principal" },
    { path: "/vendedor/clientes", label: "Clientes", icon: "customers", group: "Gestion" },
    { path: "/vendedor/productos", label: "Productos", icon: "products", group: "Gestion" },
  ],
  contador: [
    { path: "/contador/dashboard", label: "Dashboard", icon: "dashboard", group: "Principal" },
    { path: "/contador/clientes", label: "Clientes", icon: "customers", group: "Gestion" },
    { path: "/contador/reportes", label: "Reportes", icon: "reports", group: "Gestion" },
    { path: "/contador/configuracion", label: "Configuracion", icon: "settings", group: "Gestion" },
  ],
};

export const ROLE_HOME = {
  admin: "/admin/dashboard",
  vendedor: "/vendedor/dashboard",
  contador: "/contador/dashboard",
};

export const SETTINGS_TABS = {
  admin: ["perfil", "sistema", "tienda", "usuarios"],
  contador: ["perfil", "sistema", "tienda"],
};

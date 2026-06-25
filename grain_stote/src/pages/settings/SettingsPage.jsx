import { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Settings, Store, SlidersHorizontal, User, Users } from "lucide-react";
import Tabs from "@/components/common/Tabs";
import { ROLES, SETTINGS_TABS } from "@/routes/routeConfig";

const TAB_META = {
  perfil: {
    label: "Mi Perfil",
    icon: <User size={16} />,
    title: "Mi Perfil",
  },
  sistema: {
    label: "Sistema",
    icon: <SlidersHorizontal size={16} />,
    title: "Sistema",
  },
  tienda: {
    label: "Mi Tienda",
    icon: <Store size={16} />,
    title: "Mi Tienda",
  },
  usuarios: {
    label: "Usuarios",
    icon: <Users size={16} />,
    title: "Usuarios",
  },
};

function SettingsPage() {
  const { role } = useOutletContext();
  const roleLabel = ROLES[role] ?? role;
  const tabs = useMemo(
    () => (SETTINGS_TABS[role] ?? []).map((id) => ({ id, ...TAB_META[id] })),
    [role],
  );
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "perfil");
  const currentTab = TAB_META[activeTab] ?? TAB_META.perfil;

  return (
    <section>
      <div className="gs-page-header">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">
            Panel de {roleLabel}
          </p>
          <h1 className="gs-page-title">
            <Settings className="inline-block align-[-0.08em]" size={34} /> Configuración
          </h1>
        </div>
      </div>
      <Tabs activeTab={activeTab} onChange={setActiveTab} tabs={tabs} />
      <div className="gs-card gs-card-pad" role="tabpanel">
        <h2 className="font-heading text-2xl font-semibold uppercase text-foreground">
          {currentTab.title}
        </h2>
        <p className="mt-2 text-muted-foreground">
          Sección preparada para implementar la configuración correspondiente.
        </p>
      </div>
    </section>
  );
}

export default SettingsPage;

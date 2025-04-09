import { Map, Ship, Wifi, Layers } from 'lucide-react';

function Sidebar() {
  return (
    <div className="h-screen w-20 bg-[#1e2a38] text-white flex flex-col items-center py-4 space-y-6">
      <Icon icon={<Map size={28} color="white" />} tooltip="Map" />
      <Icon icon={<Ship size={28} color="white" />} tooltip="Vessels" />
      <Icon icon={<Wifi size={28} color="white" />} tooltip="AIS Feed" />
      <Icon icon={<Layers size={28} color="white" />} tooltip="Layers" />
    </div>
  );
}

function Icon({ icon, tooltip }: { icon: JSX.Element; tooltip: string }) {
  return (
    <div className="group relative flex flex-col items-center">
      <div className="p-2 hover:bg-blue-600 rounded-md cursor-pointer">
        {icon}
      </div>
      <span className="absolute left-20 top-2 w-max bg-black text-xs text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
        {tooltip}
      </span>
    </div>
  );
}

export default Sidebar;
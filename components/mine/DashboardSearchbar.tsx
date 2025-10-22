import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DashboardSearchbar() {
  return (
    <div className="w-full max-w-xs flex items-center gap-2">
      <Input type="email" placeholder="Buscar" className="bg-white"/>
      <Button className="shadow">Ir</Button>
    </div>
  );
}

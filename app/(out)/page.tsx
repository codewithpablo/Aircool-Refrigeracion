import Link from "next/link";
import LandingSlider from "@/components/mine/LandingSlider";
import "../globals.css"
import LogInButton from "@/components/mine/LogInButton";
import SignUpButton from "@/components/mine/SignUpButton";
import Logo from "@/components/mine/Logo";

export default function Home() {
  return (
    <div className="flex w-full h-full text-emerald-700 ">
        <div className="flex-1 flex items-center  justify-center">
          <div className="max-w-lg flex flex-col gap-6">
            <div>
                <h1 className="text-2xl font-bold italic ">Aircool</h1>
              <h1 className="text-5xl font-semibold">Capacitamos profesionales en el arte de la refrigeración</h1>
            </div>
            <p className="text-sm text-gray-500">En Aircool Refrigeración te brindamos una formación completa y práctica para que te conviertas en un técnico capacitado en reparación, mantenimiento e instalación de equipos de aire acondicionado y sistemas de refrigeración. Aprendé a tu ritmo, desde cualquier lugar, con nuestro campus virtual.</p>
            <div className="flex  gap-2">
             <Link href="/dashboard">
                 <LogInButton />
             </Link>

              <Link href="/dashboard">
              <SignUpButton />
              </Link>
            
            </div>
          </div>
        </div>
        <div className="flex-1  h-[100vh]">
          <LandingSlider />
        </div>
    </div>
  );
}

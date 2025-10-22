import { Home, User, Users, Settings, BookOpen, Calendar, FileText, LineChart, CalendarCheck, MessageCircle } from "lucide-react";
import { DashboardStats } from "@/types";

export const tabs = [
  {
    name: "Inicio",
    value: "inicio",
    icon: Home, // casa para inicio
    path: "/dashboard"
  },
  {
    name: "Profesores",
    value: "profesores",
    icon: User, // persona individual
     path: "/dashboard"
  },
  {
    name: "Estudiantes",
    value: "estudiantes",
    icon: Users, // grupo de personas
     path: "/dashboard"
  },
  {
    name: "Ajustes",
    value: "ajustes",
    icon: Settings, // engranaje
     path: "/dashboard"
  },
  {
    name: "Materias",
    value: "materias",
    icon: BookOpen, // libro abierto
     path: "/dashboard"
  },
  {
    name: "Clases",
    value: "clases",
    icon: Calendar, // calendario
     path: "/dashboard"
  },
  {
    name: "Parciales",
    value: "parciales",
    icon: FileText, // documento
     path: "/dashboard"
  },
  {
    name: "Resultados",
    value: "resultados",
    icon: LineChart, // Cambiado de BarChart a LineChart
     path: "/dashboard"
  },
  {
    name: "Eventos",
    value: "eventos",
    icon: CalendarCheck, // calendario con check
     path: "/dashboard"
  },
  {
    name: "Mensajes",
    value: "mensajes",
    icon: MessageCircle, // burbuja de chat
     path: "/dashboard"
  },
];


export const stats: DashboardStats = {
  admins: 2,
  teachers: 24,
  students: 460,
  parents: 382
};

type Imagen = {
  nombre: string;
  src: string;
  descripcion?: string; // opcional
};

const imagenes: Imagen[] = [
  {
    nombre: "UTN Logo",
    src: "/1.png",
    descripcion: "Logo oficial de la UTN"
  },
  {
    nombre: "Laboratorio",
    src: "/2.jpg",
    descripcion: "Laboratorio de informática"
  },
  {
    nombre: "Estudiantes",
    src: "/3.jpg",
    descripcion: "Estudiantes trabajando en proyectos"
  },
  {
    nombre: "Aula",
    src: "/4.png",
    descripcion: "Clase práctica de ingeniería"
  },
  {
    nombre: "Campus",
    src: "/5.jpg",
    descripcion: "Vista aérea del campus universitario"
  }
];

export default imagenes;
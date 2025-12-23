import type { Project, ProjectCategory } from "@/types/project";

import LOTIZA_LOGO from "@/assets/gallery/LOTIZA/logo.webp";
import LOTIZA1 from "@/assets/gallery/LOTIZA/img1.webp";
import LOTIZA2 from "@/assets/gallery/LOTIZA/img2.webp";
import LOTIZA3 from "@/assets/gallery/LOTIZA/img3.webp";
import LOTIZA4 from "@/assets/gallery/LOTIZA/img4.webp";
import LOTIZA5 from "@/assets/gallery/LOTIZA/img5.webp";

import APALWORKFLOW_GENERAL_LOGO from "@/assets/gallery/APALWORKFLOW_GENERAL/logo.webp";
import APALWORKFLOW_GENERAL1 from "@/assets/gallery/APALWORKFLOW_GENERAL/img1.webp";
import APALWORKFLOW_GENERAL2 from "@/assets/gallery/APALWORKFLOW_GENERAL/img2.webp";
import APALWORKFLOW_GENERAL3 from "@/assets/gallery/APALWORKFLOW_GENERAL/img3.webp";
// import APALWORKFLOW_GENERAL4 from "@/assets/gallery/APALWORKFLOW_GENERAL/img4.webp";

import APALWORKFLOW_MANAGE_LOGO from "@/assets/gallery/APALWORKFLOW_MANAGE/logo.webp";
import APALWORKFLOW_MANAGE1 from "@/assets/gallery/APALWORKFLOW_MANAGE/img1.webp";
import APALWORKFLOW_MANAGE2 from "@/assets/gallery/APALWORKFLOW_MANAGE/img2.webp";
import APALWORKFLOW_MANAGE3 from "@/assets/gallery/APALWORKFLOW_MANAGE/img3.webp";
import APALWORKFLOW_MANAGE4 from "@/assets/gallery/APALWORKFLOW_MANAGE/img4.webp";

import BELLEZA_LOGO from "@/assets/gallery/BELLEZA/logo.webp";
import BELLEZA1 from "@/assets/gallery/BELLEZA/img1.webp";
import BELLEZA2 from "@/assets/gallery/BELLEZA/img2.webp";
import BELLEZA3 from "@/assets/gallery/BELLEZA/img3.webp";
import BELLEZA4 from "@/assets/gallery/BELLEZA/img4.webp";

import EL_CRUCE_LOGO from "@/assets/gallery/EL_CRUCE/logo.webp";
import EL_CRUCE1 from "@/assets/gallery/EL_CRUCE/img1.webp";
import EL_CRUCE2 from "@/assets/gallery/EL_CRUCE/img2.webp";
import EL_CRUCE3 from "@/assets/gallery/EL_CRUCE/img3.webp";
import EL_CRUCE4 from "@/assets/gallery/EL_CRUCE/img4.webp";

import HERMOS_LOGO from "@/assets/gallery/HERMOS/logo.webp";
import HERMOS1 from "@/assets/gallery/HERMOS/img1.webp";
import HERMOS2 from "@/assets/gallery/HERMOS/img2.webp";
import HERMOS3 from "@/assets/gallery/HERMOS/img3.webp";

import PARQUEO_LOGO from "@/assets/gallery/PARQUEO/logo.webp";
import PARQUEO1 from "@/assets/gallery/PARQUEO/img1.webp";
import PARQUEO2 from "@/assets/gallery/PARQUEO/img2.webp";
import PARQUEO3 from "@/assets/gallery/PARQUEO/img3.webp";
import PARQUEO4 from "@/assets/gallery/PARQUEO/img4.webp";

import RAIZ_BRAIN_LOGO from "@/assets/gallery/RAIZ_BRAIN/logo.webp";
import RAIZ_BRAIN1 from "@/assets/gallery/RAIZ_BRAIN/img1.webp";
import RAIZ_BRAIN2 from "@/assets/gallery/RAIZ_BRAIN/img2.webp";
import RAIZ_BRAIN3 from "@/assets/gallery/RAIZ_BRAIN/img3.webp";
import RAIZ_BRAIN4 from "@/assets/gallery/RAIZ_BRAIN/img4.webp";

export const categories: ProjectCategory[] = [
  {
    id: 1,
    name: "Todos",
  },
  {
    id: 2,
    name: "Gestión & Operaciones",
  },
  {
    id: 3,
    name: "SaaS & Plataformas",
  },
  {
    id: 4,
    name: "Aplicaciones Móviles",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Logística Mayorista – Administración",
    category_id: 3,
    cover: APALWORKFLOW_GENERAL_LOGO,
    images: [
      APALWORKFLOW_GENERAL1,
      APALWORKFLOW_GENERAL2,
      APALWORKFLOW_GENERAL3,
      // APALWORKFLOW_GENERAL4,
    ],
    description:
      "Sistema administrativo para la gestión de logística y entregas: asignación de pedidos, control de rutas, seguimiento en tiempo real, carga masiva desde Excel, estadísticas y asignación de vehículos y operadores.",
  },

  {
    id: 2,
    title: "Gestión de Vacaciones de Empleados",
    category_id: 2,
    cover: HERMOS_LOGO,
    images: [HERMOS1, HERMOS2, HERMOS3],
    description:
      "Sistema enfocado en la gestión de vacaciones del personal: cálculo automático de antigüedad, control de días disponibles por año, registro de solicitudes y notificaciones automáticas por correo a los responsables.",
  },

  {
    id: 3,
    title: "Plataforma de Lotizaciones (SaaS)",
    category_id: 3,
    cover: LOTIZA_LOGO,
    images: [LOTIZA1, LOTIZA2, LOTIZA3, LOTIZA4, LOTIZA5],
    description:
      "Plataforma multiempresa para inmobiliarias: gestión de proyectos de lotización, ventas, contratos, recordatorios automáticos vía WhatsApp, portal público de venta de lotes y landing pages personalizadas.",
  },

  {
    id: 4,
    title: "Sistema de Estacionamientos",
    category_id: 2,
    cover: PARQUEO_LOGO,
    images: [PARQUEO1, PARQUEO2, PARQUEO3, PARQUEO4],
    description:
      "Plataforma para el control integral de estacionamientos: registro de entradas y salidas de vehículos, planes prepago, control de tiempos, pausas, reubicación de vehículos y gestión operativa en tiempo real.",
  },

  {
    id: 5,
    title: "Sistema para Talleres Mecánicos",
    category_id: 2,
    cover: EL_CRUCE_LOGO,
    images: [EL_CRUCE1, EL_CRUCE2, EL_CRUCE3, EL_CRUCE4],
    description:
      "Sistema para talleres de reparación vehicular que permite registrar vehículos, diagnósticos, reparaciones, repuestos, costos de mano de obra, venta de aceites y servicios de mantenimiento.",
  },

  {
    id: 6,
    title: "App de Servicios de Belleza",
    category_id: 4,
    cover: BELLEZA_LOGO,
    images: [BELLEZA1, BELLEZA2, BELLEZA3, BELLEZA4],
    description:
      "Aplicación móvil para profesionales del sector estético: contratación de estilistas, maquilladores y otros servicios de belleza bajo demanda.",
  },

  {
    id: 7,
    title: "App Educativa Inmobiliaria",
    category_id: 4,
    cover: RAIZ_BRAIN_LOGO,
    images: [RAIZ_BRAIN1, RAIZ_BRAIN2, RAIZ_BRAIN3, RAIZ_BRAIN4],
    description:
      "Plataforma educativa móvil para aprender conceptos clave del real estate, con lecciones cortas y prácticas al final de cada módulo.",
  },

  {
    id: 8,
    title: "Logística Mayorista – Operadores",
    category_id: 4,
    cover: APALWORKFLOW_MANAGE_LOGO,
    images: [
      APALWORKFLOW_MANAGE1,
      APALWORKFLOW_MANAGE2,
      APALWORKFLOW_MANAGE3,
      APALWORKFLOW_MANAGE4,
    ],
    description:
      "Aplicación móvil para conductores y operadores: visualización de rutas optimizadas en mapa, gestión de entregas, actualización de estados de pedidos y comunicación directa con el área administrativa.",
  },
];

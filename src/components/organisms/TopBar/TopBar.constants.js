import ArgentinianFlag from "../../../assets/images/flags/ar.svg";
import BrazilianFlag from "../../../assets/images/flags/br.svg";
import ChileanFlag from "../../../assets/images/flags/cl.svg";
import ColombianFlag from "../../../assets/images/flags/co.svg";
import MexicanFlag from "../../../assets/images/flags/mx.svg";
import PeruvianFlag from "../../../assets/images/flags/pe.svg";
import UruguayanFlag from "../../../assets/images/flags/uy.svg";
import EcuatorianFlag from "../../../assets/images/flags/ec.svg";
import CostaRicaFlag from "../../../assets/images/flags/cr.svg";

export const countries = [
  { label: "Argentina", value: "AR", icon: ArgentinianFlag },
  { label: "Brasil", value: "BR", icon: BrazilianFlag },
  { label: "Chile", value: "CL", icon: ChileanFlag },
  { label: "Colombia", value: "CO", icon: ColombianFlag },
  { label: "México", value: "MX", icon: MexicanFlag },
  { label: "Perú", value: "PE", icon: PeruvianFlag },
  { label: "Uruguay", value: "UY", icon: UruguayanFlag },
  { label: "Costa Rica", value: "CR", icon: CostaRicaFlag },
  { label: "Ecuador", value: "EC", icon: EcuatorianFlag },
];

export const verticals = [
  { label: "Restaurantes", value: "geo-stores-api" },
  { label: "CPGs", value: "cpgs-geo-stores-api" },
  { label: "Misc", value: "misc-geo-stores-api" },
];

export const diagnosticMessages = {
  store_exists: "La tienda existe.",
  store_is_not_deleted_true: "La tienda no ha sido eliminada.",
  store_is_not_deleted_false: "La tienda ha sido eliminada.",
  store_has_city: "La tienda tiene City.",
  store_has_brand: "La tienda tiene Brand.",
  store_has_products: "El restaurante tiene productos.",
  store_has_schedule: "El restaurante tiene horarios definidos.",
  store_is_enabled: "La tienda está habilitada.",
  store_opens_today: "La tienda está abierta o abre hoy.",
  store_has_zones: "La tienda tiene polígonos.",
  store_zones_are_well_formed: "Los polígonos se contienen entre sí.",
  server_error: "Ha ocurrido un error consultando el servidor",
};

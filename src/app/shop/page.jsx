import Cards from "@/components/Cards";
import Box from "@/components/components-encabezado-pagina/Dash";



export default function About() {
    return (
      <div>
        
        <div className="flex flex-col lg:flex-row bg-white">
          <div className="flex-1">
          <Box name="Tienda" description="Descubre una amplia variedad de productos de alta calidad que satisfarán tus necesidades y gustos. ¡Encuentra ese artículo especial que estás buscando!" />
                    </div>
        </div>
    {/* Codigo */}
    <Cards></Cards>
      </div>
    );
  }
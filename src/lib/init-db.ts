import { supabase } from '@/lib/supabase';

// Script para inicializar la base de datos
export async function initializeDatabase() {
  console.log('🚀 Inicializando base de datos...');

  try {
    // 1. Verificar si la tabla ya existe
    const { data: existingTable, error: checkError } = await supabase
      .from('site_content')
      .select('count')
      .single();

    if (!checkError) {
      console.log('✅ La tabla site_content ya existe');
      return true;
    }

    // 2. Crear la tabla usando RPC
    const { error: createError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS site_content (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          section TEXT NOT NULL UNIQUE,
          data JSONB NOT NULL,
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW()
        );
        
        CREATE INDEX IF NOT EXISTS idx_site_content_section ON site_content(section);
      `
    });

    if (createError) {
      console.error('❌ Error creando la tabla:', createError);
      return false;
    }

    console.log('✅ Tabla site_content creada exitosamente');

    // 3. Insertar datos iniciales
    const defaultContent = {
      hero: {
        name: "WENDY NIETO",
        subtitle: "Estratega de Plataformas y Crecimiento Tech",
        description: "Ayudo a restaurantes, hoteles, cocinas ocultas y e-commerces a multiplicar sus ingresos con estrategias de ventas basadas en datos y tecnología.",
        stat1_value: "+15",
        stat1_label: "Proyectos",
        stat2_value: "5 años",
        stat2_label: "Ecosistema LatAm",
        badge: "Disponible para proyectos",
        cta_primary: "Ver servicios",
        cta_secondary: "Agendar consultoría"
      },
      services: [
        {
          title: "Tecnología para Restaurantes",
          shortDesc: "Sistemas POS, integraciones de delivery y optimización de operaciones gastronómicas.",
          problem: "",
          solution: ""
        },
        {
          title: "Estrategia de Plataformas",
          shortDesc: "Escalabilidad, retención y marketplaces para startups de alto crecimiento.",
          problem: "",
          solution: ""
        },
        {
          title: "Cocinas Ocultas (Ghost Kitchens)",
          shortDesc: "Despliegue operativo y tecnológico para marcas virtuales multicanal.",
          problem: "",
          solution: ""
        },
        {
          title: "Economía Creativa",
          shortDesc: "Sistemas de monetización y distribución para creadores UGC.",
          problem: "",
          solution: ""
        }
      ],
      testimonials: [
        {
          author: "Roberto García",
          role: "CEO de GhostKitchens MX",
          quote: "Pasamos de 5 a 50 marcas virtuales sin quebrar la infraestructura."
        },
        {
          author: "Ana Martínez",
          role: "Head of Operations, Rappi Colombia",
          quote: "Redujimos el tiempo de entrega promedio en 12%."
        },
        {
          author: "Carlos Ruiz",
          role: "Co-founder, StartUp Tech LATAM",
          quote: "Nos ayudó a escalar de 100k a 5M USD en GMV."
        }
      ],
      contact: {
        email: "wendy@wendynieto.com",
        whatsapp: "+52 55 0000 0000",
        linkedin: "https://linkedin.com/in/wendynieto",
        twitter: "https://twitter.com/wendynieto"
      }
    };

    // Insertar datos por sección
    for (const [section, data] of Object.entries(defaultContent)) {
      const { error: insertError } = await supabase
        .from('site_content')
        .upsert({ section, data }, { onConflict: 'section' });

      if (insertError) {
        console.error(`❌ Error insertando ${section}:`, insertError);
      } else {
        console.log(`✅ Datos de ${section} insertados correctamente`);
      }
    }

    console.log('🎉 Base de datos inicializada exitosamente');
    return true;

  } catch (error) {
    console.error('❌ Error general:', error);
    return false;
  }
}

"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Database, Play, CheckCircle, XCircle, Loader2 } from "lucide-react";

export default function DatabaseInitPage() {
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const logMessage = `[${timestamp}] ${message}`;
    setLogs(prev => [...prev, logMessage]);
    console.log(logMessage);
  };

  const createTableManually = async () => {
    setLoading(true);
    setLogs([]);
    setSuccess(false);

    try {
      addLog("🚀 Iniciando creación manual de la tabla...");

      // Intentar crear la tabla usando SQL directo
      const { error: createError } = await supabase
        .from('site_content')
        .select('*')
        .limit(1);

      if (!createError) {
        addLog("✅ La tabla site_content ya existe");
        setSuccess(true);
        setLoading(false);
        return;
      }

      addLog("⚠️ La tabla no existe, intentando crearla...");

      // Crear datos básicos para forzar la creación de la tabla
      const testData = {
        section: 'test',
        data: { test: true }
      };

      const { error: insertError } = await supabase
        .from('site_content')
        .insert(testData);

      if (insertError) {
        addLog(`❌ Error insertando datos de prueba: ${insertError.message}`);
        
        // Intentar con una tabla más simple
        addLog("🔄 Intentando crear estructura básica...");
        
        // Insertar datos directamente sin verificar si la tabla existe
        const heroData = {
          section: 'hero',
          data: {
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
          }
        };

        const { error: heroError } = await supabase
          .from('site_content')
          .upsert(heroData, { onConflict: 'section' });

        if (heroError) {
          addLog(`❌ Error crítico: ${heroError.message}`);
          addLog("📋 Necesitas crear la tabla manualmente en Supabase:");
          addLog("1. Ve a tu proyecto de Supabase");
          addLog("2. Ve a SQL Editor");
          addLog("3. Ejecuta este SQL:");
          addLog(`
CREATE TABLE site_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  section TEXT NOT NULL UNIQUE,
  data JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_site_content_section ON site_content(section);
          `);
        } else {
          addLog("✅ Tabla creada y datos iniciales insertados");
          setSuccess(true);
        }
      } else {
        addLog("✅ Datos de prueba insertados, la tabla existe");
        
        // Limpiar datos de prueba e insertar datos reales
        await supabase
          .from('site_content')
          .delete()
          .eq('section', 'test');

        addLog("🧹 Datos de prueba eliminados");
        setSuccess(true);
      }

    } catch (error) {
      addLog(`❌ Error general: ${error}`);
    }

    setLoading(false);
  };

  const testConnection = async () => {
    addLog("🔍 Probando conexión con Supabase...");
    
    try {
      const { data, error } = await supabase
        .from('site_content')
        .select('count')
        .single();

      if (error) {
        addLog(`❌ Error de conexión: ${error.message}`);
      } else {
        addLog(`✅ Conexión exitosa. Registros encontrados: ${data.count || 0}`);
      }
    } catch (err) {
      addLog(`❌ Error: ${err}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Database className="w-8 h-8 text-purple-400" />
          <h1 className="text-3xl font-bold">Inicialización de Base de Datos</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Controls */}
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Acciones</h2>
              
              <div className="space-y-3">
                <button
                  onClick={testConnection}
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg px-4 py-3 flex items-center justify-center gap-2"
                >
                  <Play size={16} />
                  Probar Conexión
                </button>

                <button
                  onClick={createTableManually}
                  disabled={loading}
                  className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 rounded-lg px-4 py-3 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Creando...
                    </>
                  ) : (
                    <>
                      <Database size={16} />
                      Crear Tabla site_content
                    </>
                  )}
                </button>
              </div>

              {success && (
                <div className="mt-4 p-4 bg-green-600/20 border border-green-600/50 rounded-lg">
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle size={16} />
                    <span>Base de datos inicializada correctamente</span>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-yellow-400">ℹ️ Información</h3>
              <p className="text-sm text-yellow-200">
                Esta página crea la tabla <code>site_content</code> necesaria para el dashboard de administración.
                Si hay errores, puedes crear la tabla manualmente en el SQL Editor de Supabase.
              </p>
            </div>
          </div>

          {/* Logs */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Console Logs</h2>
              <button
                onClick={() => setLogs([])}
                className="text-gray-400 hover:text-white"
              >
                Limpiar
              </button>
            </div>
            
            <div className="bg-black rounded-lg p-4 h-96 overflow-y-auto font-mono text-xs">
              {logs.length === 0 ? (
                <p className="text-gray-500">Los logs aparecerán aquí...</p>
              ) : (
                logs.map((log, index) => (
                  <div key={index} className="mb-1">
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a href="/admin/robust-login" className="text-blue-400 hover:underline">
            Ir al Login de Admin
          </a>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function ConfigCheck() {
  const [config, setConfig] = useState<any>({});

  const checkConfig = () => {
    const configData = {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ? 
        `${process.env.NEXT_PUBLIC_SUPABASE_URL.substring(0, 20)}...` : '❌ No configurada',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 
        `✅ Configurada (${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.length} caracteres)` : '❌ No configurada',
      DASHBOARD_AUTHORIZED_EMAIL: process.env.DASHBOARD_AUTHORIZED_EMAIL || '⚠️ No configurada (temporalmente deshabilitado)',
      NODE_ENV: process.env.NODE_ENV || '❌ No configurado',
    };

    setConfig(configData);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">🔍 Verificación de Configuración</h1>
        
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <button
            onClick={checkConfig}
            className="bg-blue-600 hover:bg-blue-700 rounded px-6 py-3"
          >
            Verificar Configuración
          </button>
        </div>

        {Object.keys(config).length > 0 && (
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Variables de Entorno</h2>
            <div className="space-y-3">
              {Object.entries(config).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="font-mono text-sm">{key}</span>
                  <span className="text-sm">{value as string}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 bg-yellow-900/30 border border-yellow-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">⚠️ Nota Importante</h3>
          <p className="text-sm">
            Si NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY no están configuradas,
            el login no funcionará. Estas variables deben estar en tu archivo .env.local
          </p>
        </div>

        <div className="mt-6 text-center">
          <a href="/auth-test" className="text-blue-400 hover:underline mr-4">
            Test de Autenticación
          </a>
          <a href="/admin/login" className="text-blue-400 hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

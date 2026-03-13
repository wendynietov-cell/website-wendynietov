"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SimpleAuthTest() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
    console.log(message);
  };

  const testSupabaseConnection = async () => {
    addLog("🔍 Probando conexión con Supabase...");
    
    try {
      const { data, error } = await supabase.from('site_content').select('count');
      if (error) {
        addLog(`❌ Error de conexión: ${error.message}`);
      } else {
        addLog("✅ Conexión con Supabase exitosa");
      }
    } catch (err) {
      addLog(`❌ Error al conectar: ${err}`);
    }
  };

  const checkCurrentSession = async () => {
    addLog("🔍 Verificando sesión actual...");
    
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        addLog(`❌ Error al obtener sesión: ${error.message}`);
      } else if (session) {
        addLog(`✅ Sesión activa: ${session.user.email}`);
        addLog(`📅 Expira: ${new Date(session.expires_at! * 1000).toLocaleString()}`);
      } else {
        addLog("❌ No hay sesión activa");
      }
    } catch (err) {
      addLog(`❌ Error: ${err}`);
    }
  };

  const attemptLogin = async () => {
    if (!email || !password) {
      addLog("❌ Por favor ingresa email y contraseña");
      return;
    }

    setLoading(true);
    addLog(`🔑 Intentando login con: ${email}`);

    try {
      // Limpiar sesión primero
      await supabase.auth.signOut();
      addLog("🧹 Sesión anterior limpiada");

      // Intentar login
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        addLog(`❌ Error de login: ${error.message}`);
        addLog(`📊 Código de error: ${error.status || 'N/A'}`);
      } else if (data.user && data.session) {
        addLog(`✅ Login exitoso!`);
        addLog(`👤 Usuario: ${data.user.email}`);
        addLog(`🆔 ID: ${data.user.id}`);
        addLog(`📧 Verificado: ${data.user.email_confirmed_at ? 'Sí' : 'No'}`);
        
        // Verificar sesión inmediatamente
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        if (currentSession) {
          addLog(`✅ Sesión guardada correctamente`);
          addLog(`🔄 Token de acceso: ${currentSession.access_token.substring(0, 20)}...`);
          
          // Intentar redirección
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 2000);
        } else {
          addLog(`❌ La sesión no se guardó correctamente`);
        }
      } else {
        addLog("❌ No se recibió usuario o sesión");
      }
    } catch (err) {
      addLog(`❌ Error inesperado: ${err}`);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">🔧 Diagnóstico de Autenticación</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">📝 Formulario de Login</h2>
            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full bg-gray-700 rounded px-4 py-2 text-white"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className="w-full bg-gray-700 rounded px-4 py-2 text-white"
              />
              <button
                onClick={attemptLogin}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded px-4 py-2"
              >
                {loading ? "Intentando..." : "Iniciar Sesión"}
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">🔍 Pruebas Rápidas</h2>
            <div className="space-y-3">
              <button
                onClick={testSupabaseConnection}
                className="w-full bg-green-600 hover:bg-green-700 rounded px-4 py-2"
              >
                Probar Conexión Supabase
              </button>
              <button
                onClick={checkCurrentSession}
                className="w-full bg-yellow-600 hover:bg-yellow-700 rounded px-4 py-2"
              >
                Verificar Sesión Actual
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">📋 Logs</h2>
          <div className="bg-black rounded p-4 h-96 overflow-y-auto font-mono text-sm">
            {logs.length === 0 ? (
              <p className="text-gray-500">No hay logs aún...</p>
            ) : (
              logs.map((log, index) => (
                <div key={index} className="mb-1">
                  {log}
                </div>
              ))
            )}
          </div>
          <button
            onClick={() => setLogs([])}
            className="mt-4 bg-red-600 hover:bg-red-700 rounded px-4 py-2"
          >
            Limpiar Logs
          </button>
        </div>

        <div className="mt-6 text-center">
          <a href="/admin/login" className="text-blue-400 hover:underline mr-4">
            Login Original
          </a>
          <a href="/auth-debug" className="text-blue-400 hover:underline">
            Debug Completo
          </a>
        </div>
      </div>
    </div>
  );
}

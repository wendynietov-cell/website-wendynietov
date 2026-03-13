"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { LogIn, Eye, EyeOff, Loader2, RefreshCw } from "lucide-react";

export default function RobustLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [debug, setDebug] = useState<string[]>([]);

  const addDebug = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const debugMessage = `[${timestamp}] ${message}`;
    setDebug(prev => [...prev, debugMessage]);
    console.log(debugMessage);
  };

  const clearDebug = () => setDebug([]);

  const testConnection = async () => {
    addDebug("🔍 Probando conexión con Supabase...");
    try {
      const { data, error } = await supabase.from('site_content').select('count').single();
      if (error) {
        addDebug(`❌ Error de conexión: ${error.message}`);
        return false;
      } else {
        addDebug("✅ Conexión exitosa con la base de datos");
        return true;
      }
    } catch (err) {
      addDebug(`❌ Error al conectar: ${err}`);
      return false;
    }
  };

  const checkCurrentSession = async () => {
    addDebug("🔍 Verificando sesión actual...");
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        addDebug(`❌ Error al obtener sesión: ${error.message}`);
        return null;
      } else if (session) {
        addDebug(`✅ Sesión encontrada: ${session.user.email}`);
        addDebug(`📅 Expira: ${new Date(session.expires_at! * 1000).toLocaleString()}`);
        return session;
      } else {
        addDebug("❌ No hay sesión activa");
        return null;
      }
    } catch (err) {
      addDebug(`❌ Error: ${err}`);
      return null;
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    clearDebug();

    addDebug(`🚀 Iniciando proceso de login para: ${email}`);

    // 1. Probar conexión
    const isConnected = await testConnection();
    if (!isConnected) {
      setError("No se puede conectar con Supabase. Revisa tu configuración.");
      setLoading(false);
      return;
    }

    // 2. Limpiar cualquier sesión existente
    addDebug("🧹 Limpiando sesión existente...");
    await supabase.auth.signOut();

    // 3. Verificar que no haya sesión residual
    const existingSession = await checkCurrentSession();
    if (existingSession) {
      addDebug("⚠️ Sesión residual encontrada, intentando cerrarla de nuevo...");
      await supabase.auth.signOut();
    }

    // 4. Intentar login
    addDebug("🔑 Intentando iniciar sesión...");
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        addDebug(`❌ Error de autenticación: ${error.message}`);
        addDebug(`📊 Código: ${error.status || 'N/A'}`);
        setError(`Error de login: ${error.message}`);
        setLoading(false);
        return;
      }

      if (!data.user || !data.session) {
        addDebug("❌ Login exitoso pero no se recibió usuario o sesión");
        setError("Login exitoso pero hay un problema con la sesión. Intenta de nuevo.");
        setLoading(false);
        return;
      }

      addDebug(`✅ Login exitoso! Usuario: ${data.user.email}`);
      addDebug(`🆔 ID: ${data.user.id}`);
      addDebug(`📧 Email verificado: ${data.user.email_confirmed_at ? 'Sí' : 'No'}`);

      // 5. Esperar y verificar que la sesión se guardó
      addDebug("⏳ Esperando que la sesión se guarde...");
      await new Promise(resolve => setTimeout(resolve, 2000));

      const savedSession = await checkCurrentSession();
      if (!savedSession) {
        addDebug("❌ La sesión no se guardó correctamente");
        setError("La sesión no se pudo guardar. Intenta recargar la página y volver a intentarlo.");
        setLoading(false);
        return;
      }

      addDebug("✅ Sesión guardada correctamente!");
      addDebug(`🔄 Token de acceso: ${savedSession.access_token.substring(0, 30)}...`);

      // 6. Redirigir
      addDebug("🚀 Redirigiendo al dashboard...");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);

    } catch (err) {
      addDebug(`❌ Error inesperado: ${err}`);
      setError("Error inesperado. Intenta de nuevo.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Login Form */}
          <div className="bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10 p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Wendy Nieto</h1>
              <p className="text-gray-300">Dashboard Admin</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pr-12 text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Iniciando sesión...
                  </>
                ) : (
                  <>
                    <LogIn size={18} />
                    Iniciar Sesión
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={checkCurrentSession}
                className="text-blue-400 hover:text-blue-300 text-sm underline"
              >
                Ver estado de autenticación
              </button>
            </div>
          </div>

          {/* Debug Panel */}
          <div className="bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Debug Console</h2>
              <button
                onClick={clearDebug}
                className="text-gray-400 hover:text-white"
              >
                <RefreshCw size={16} />
              </button>
            </div>
            
            <div className="bg-black/50 rounded-lg p-4 h-96 overflow-y-auto font-mono text-xs text-green-400">
              {debug.length === 0 ? (
                <p className="text-gray-500">Los logs aparecerán aquí...</p>
              ) : (
                debug.map((log, index) => (
                  <div key={index} className="mb-1 whitespace-pre-wrap">
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a href="/config-check" className="text-blue-400 hover:underline mr-4">
            Ver Configuración
          </a>
          <a href="/auth-test" className="text-blue-400 hover:underline mr-4">
            Test Simple
          </a>
          <a href="/admin/login" className="text-blue-400 hover:underline">
            Login Original
          </a>
        </div>
      </div>
    </div>
  );
}

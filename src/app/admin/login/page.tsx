"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { LogIn, Eye, EyeOff, Loader2 } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("Intentando login con:", email);
      
      // Primero, limpiar cualquier sesión existente
      await supabase.auth.signOut();
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log("Respuesta de auth:", { data, error });

      if (error) {
        console.error("Error de autenticación:", error);
        setError(`Error: ${error.message}`);
      } else if (data.user && data.session) {
        console.log("Login exitoso, usuario:", data.user);
        console.log("Sesión:", data.session);
        
        // Esperar un momento y verificar que la sesión se guardó
        setTimeout(async () => {
          const { data: { session } } = await supabase.auth.getSession();
          console.log("Sesión verificada después de login:", session);
          
          if (session) {
            window.location.href = "/dashboard";
          } else {
            setError("Error: La sesión no se guardó correctamente. Intenta de nuevo.");
          }
        }, 1000);
      } else {
        console.error("No se recibió usuario o sesión en la respuesta");
        setError("No se pudo iniciar sesión. Intenta de nuevo.");
      }
    } catch (err) {
      console.error("Error en el proceso de login:", err);
      setError("Error al iniciar sesión. Intenta de nuevo.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="w-full max-w-md">
        <div className="bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10 p-8">
          {/* Logo/Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Wendy Nieto</h1>
            <p className="text-gray-300">Dashboard Admin</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
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

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm mb-4">
              Acceso restringido al dashboard administrativo
            </p>
            
            <button
              type="button"
              onClick={async () => {
                const { data: { session } } = await supabase.auth.getSession();
                console.log("Sesión actual:", session);
                if (session) {
                  console.log("Usuario ya autenticado:", session.user);
                  window.location.href = "/dashboard";
                } else {
                  console.log("No hay sesión activa");
                }
              }}
              className="text-blue-400 hover:text-blue-300 text-sm underline"
            >
              Ver estado de autenticación
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

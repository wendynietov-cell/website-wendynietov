"use client";

import { useEffect, useState } from "react";
import { safeGetSession, safeGetUser, useAuthStateChange } from "@/lib/auth-utils";
import { supabase } from "@/lib/supabase";

export default function AuthDebugPage() {
  const [user, setUser] = useState<any>(null);
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log("Verificando sesión actual...");
        const { session, error: sessionError } = await safeGetSession();
        
        if (sessionError) {
          setError(sessionError.message);
          return;
        }
        
        console.log("Sesión:", session);
        
        if (session) {
          setSession(session);
          setUser(session.user);
        }

        // También verificar con getUser
        const { user, error: userError } = await safeGetUser();
        if (userError) {
          console.error("Error en getUser:", userError);
        } else {
          console.log("Usuario desde getUser:", user);
        }
      } catch (err) {
        console.error("Error verificando autenticación:", err);
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Use the debounced auth state change listener
  useAuthStateChange((event, session) => {
    console.log("Cambio de estado de auth:", event, session?.user?.email);
    setSession(session);
    setUser(session?.user || null);
    setError(null);
  });

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-white">Cargando...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-2xl font-bold mb-4">Debug de Autenticación</h1>
      
      {error && (
        <div className="bg-red-900 border border-red-700 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2 text-red-200">Error</h2>
          <p className="text-red-300">{error}</p>
        </div>
      )}
      
      <div className="bg-gray-800 rounded-lg p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">Estado de Autenticación</h2>
        <p>Usuario: {user ? user.email : "No autenticado"}</p>
        <p>ID: {user?.id || "N/A"}</p>
        <p>Session activa: {session ? "Sí" : "No"}</p>
      </div>

      {user && (
        <div className="bg-gray-800 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">Datos del Usuario</h2>
          <pre className="text-sm text-gray-300">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      )}

      {session && (
        <div className="bg-gray-800 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">Datos de la Sesión</h2>
          <pre className="text-sm text-gray-300">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      )}

      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
      >
        Cerrar Sesión
      </button>

      <div className="mt-4">
        <a href="/admin/login" className="text-blue-400 hover:underline">
          Ir al Login
        </a>
        {" | "}
        <a href="/dashboard" className="text-blue-400 hover:underline">
          Ir al Dashboard
        </a>
      </div>
    </div>
  );
}

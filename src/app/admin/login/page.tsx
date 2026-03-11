"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { LogIn, Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Forgot password
  const [forgotMode, setForgotMode] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [resetError, setResetError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("Credenciales incorrectas. Verifica tu email y contraseña.");
      setLoading(false);
    } else {
      router.push("/admin");
    }
  }

  async function handleForgotPassword(e: React.FormEvent) {
    e.preventDefault();
    setResetLoading(true);
    setResetError("");

    const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
      redirectTo: `${window.location.origin}/admin/reset-password`,
    });

    if (error) {
      setResetError("No se pudo enviar el correo. Verifica el email.");
    } else {
      setResetSent(true);
    }
    setResetLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#050d1a]">
      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-purple-600 mb-5 shadow-lg shadow-purple-500/30">
            <LogIn size={26} className="text-white" />
          </div>
          <h1 className="text-2xl font-black text-white">Portal Admin</h1>
          <p className="text-white/50 text-sm mt-1 font-mono">wendynieto.com</p>
        </div>

        {/* ── Forgot password mode ── */}
        {forgotMode ? (
          <div>
            <button
              onClick={() => { setForgotMode(false); setResetSent(false); setResetError(""); }}
              className="flex items-center gap-1.5 text-white/40 hover:text-white/70 text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={14} /> Volver al inicio de sesión
            </button>

            {resetSent ? (
              <div className="text-center space-y-3">
                <div className="text-4xl">📬</div>
                <p className="text-white font-bold">¡Correo enviado!</p>
                <p className="text-white/50 text-sm">
                  Revisa tu bandeja de entrada en <span className="text-white/70">{resetEmail}</span> y sigue el enlace para restablecer tu contraseña.
                </p>
              </div>
            ) : (
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <p className="text-white/60 text-sm mb-4">
                  Ingresa tu correo y te enviaremos un enlace para restablecer tu contraseña.
                </p>
                <div>
                  <label className="block text-xs font-mono text-white/50 uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    required
                    placeholder="wendy@wendynieto.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-purple-500/60 transition-all"
                  />
                </div>

                {resetError && (
                  <p className="text-rose-400 text-sm bg-rose-500/10 border border-rose-500/20 rounded-lg px-4 py-3">
                    {resetError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={resetLoading}
                  className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white font-bold py-3.5 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {resetLoading ? "Enviando..." : "Enviar enlace de recuperación"}
                </button>
              </form>
            )}
          </div>
        ) : (
          /* ── Login form ── */
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-white/50 uppercase tracking-widest mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="wendy@wendynieto.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-purple-500/60 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-white/50 uppercase tracking-widest mb-2">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white placeholder-white/25 focus:outline-none focus:border-purple-500/60 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => { setForgotMode(true); setResetEmail(email); }}
                className="text-xs text-white/40 hover:text-purple-400 transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            {error && (
              <p className="text-rose-400 text-sm bg-rose-500/10 border border-rose-500/20 rounded-lg px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white font-bold py-3.5 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading ? "Entrando..." : "Entrar al portal"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

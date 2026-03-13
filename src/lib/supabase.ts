import { createBrowserClient } from "@supabase/ssr";

// Singleton pattern to prevent multiple Supabase clients
let supabaseInstance: ReturnType<typeof createBrowserClient> | null = null;

export const supabase = (() => {
  if (supabaseInstance) return supabaseInstance;
  
  supabaseInstance = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        flowType: 'pkce',
        debug: process.env.NODE_ENV === 'development',
      },
    cookies: {
      get(name) {
        if (typeof document === 'undefined') return null;
        const cookie = document.cookie
          .split('; ')
          .find(row => row.startsWith(`${name}=`))
        return cookie ? cookie.split('=')[1] : null
      },
      set(name, value, options) {
        if (typeof document === 'undefined') return;
        let cookieString = `${name}=${value}`
        if (options?.maxAge) cookieString += `; max-age=${options.maxAge}`
        if (options?.path) cookieString += `; path=${options.path}`
        if (options?.domain) cookieString += `; domain=${options.domain}`
        if (options?.sameSite) cookieString += `; samesite=${options.sameSite}`
        if (options?.secure) cookieString += `; secure`
        document.cookie = cookieString
      },
      remove(name, options) {
        if (typeof document === 'undefined') return;
        let cookieString = `${name}=; max-age=0`
        if (options?.path) cookieString += `; path=${options.path}`
        if (options?.domain) cookieString += `; domain=${options.domain}`
        if (options?.sameSite) cookieString += `; samesite=${options.sameSite}`
        if (options?.secure) cookieString += `; secure`
        document.cookie = cookieString
      },
    },
  }
  );
  
  return supabaseInstance;
})();

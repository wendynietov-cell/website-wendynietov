import { supabase } from './supabase';
import { useEffect, useRef } from 'react';
import { Session } from '@supabase/supabase-js';

// Debounce utility to prevent rapid auth state changes
function debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
  let timeout: NodeJS.Timeout;
  return ((...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }) as T;
}

// Safe auth state change listener with debouncing
export function useAuthStateChange(callback: (event: string, session: Session | null) => void) {
  const callbackRef = useRef(debounce(callback, 300));
  
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event: string, session: Session | null) => {
        console.log('Auth state change:', event, session?.user?.email);
        callbackRef.current(event, session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);
}

// Safe session check with error handling
export async function safeGetSession() {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) {
      console.error('Error getting session:', error);
      return { session: null, error };
    }
    return { session, error: null };
  } catch (err) {
    console.error('Unexpected error getting session:', err);
    return { session: null, error: err };
  }
}

// Safe user check with error handling
export async function safeGetUser() {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) {
      console.error('Error getting user:', error);
      return { user: null, error };
    }
    return { user, error: null };
  } catch (err) {
    console.error('Unexpected error getting user:', err);
    return { user: null, error: err };
  }
}

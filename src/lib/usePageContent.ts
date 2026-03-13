import { useState, useEffect, useCallback } from 'react'
import { supabase } from './supabase'

export function usePageContent<T>(section: string, defaultData: T) {
  const [data, setData]       = useState<T>(defaultData)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving]   = useState(false)
  const [saved, setSaved]     = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const { data: row } = await supabase
        .from('site_content')
        .select('data')
        .eq('section', section)
        .single()
      if (row?.data) setData(row.data as T)
    } finally {
      setLoading(false)
    }
  }, [section])

  useEffect(() => { load() }, [load])

  const save = async (override?: T) => {
    setSaving(true)
    const payload = override ?? data
    await supabase.from('site_content').upsert(
      { section, data: payload, updated_at: new Date().toISOString() },
      { onConflict: 'section' }
    )
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return { data, setData, loading, saving, saved, save }
}

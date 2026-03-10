import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";

// Assuming we have the shared schema available as described in the prompt
import type { InsertContact } from "@shared/schema";

export function useCreateContact() {
  return useMutation({
    mutationFn: async (data: InsertContact) => {
      // Execute standard POST request to our defined endpoint
      const res = await fetch(api.contacts.create.path, {
        method: api.contacts.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Error de validación");
        }
        throw new Error("No se pudo enviar el mensaje");
      }
      
      return await res.json();
    },
  });
}

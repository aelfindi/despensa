# Despensa para Vercel

## Variables de entorno en Vercel
En tu proyecto, ve a Settings -> Environment Variables y crea estas variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY`
- `NEXT_PUBLIC_DEFAULT_HOUSEHOLD_ID` (opcional)

## Despliegue
1. Sube esta carpeta a GitHub.
2. Importa el repositorio en Vercel.
3. Añade las variables de entorno.
4. Haz un Redeploy.

La app leerá la configuración desde `/api/config`.

# Color System Design Tokens

## Primary Colors

| Color | Hex | RGB | Uso |
|-------|-----|-----|-----|
| Purple | #b44fdf | 180,79,223 | Color primario, botones, acentos principales |
| Pink | #e040a0 | 224,64,160 | Acento secundario, gradientes |
| Teal | #5effd8 | 94,255,216 | Tercer acento, badges, "disponible", luz verde |
| Light Indigo | #a5b4fc | 165,180,252 | Usado en el hero para el nombre |

## RGBA Values (para borders/backgrounds)

- Purple: `rgba(180,79,223, ...)`
- Pink: `rgba(224,64,160, ...)`
- Teal: `rgba(94,255,216, ...)`
- Light Indigo: `rgba(165,180,252, ...)`

## Gradient Definitions

### Gradiente Principal (Headings)
```css
linear-gradient(135deg, #f0eaff → #c4b5fd → #b44fdf)
```

### Gradiente Énfasis (Italic)
```css
linear-gradient(135deg, #e040a0, #b44fdf)
```

## Usage Guidelines

1. **Purple** - Elementos principales, CTAs, borders principales
2. **Pink** - Acentos secundarios, gradientes de énfasis
3. **Teal** - Badges, estados "disponible", elementos sutiles
4. **Light Indigo** - Nombres, elementos hero que necesitan destacar

## Consistency Notes

- Usar estos colores en todas las páginas (home, sobre mí, servicios, contacto)
- Mantener la misma opacidad y transparencia para borders/backgrounds
- Aplicar los gradientes de manera consistente en headings y elementos de énfasis

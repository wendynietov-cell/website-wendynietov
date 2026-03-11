module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/2026 copys/website-wendynietov/components/ParticleBackground.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleBackground",
    ()=>ParticleBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ParticleBackground() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let particles = [];
        let animationFrameId;
        const resize = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };
        class Particle {
            x;
            y;
            size;
            speedX;
            speedY;
            color;
            constructor(){
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.color = Math.random() > 0.5 ? "rgba(21, 245, 186, 0.4)" : "rgba(187, 0, 170, 0.4)";
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;
            }
            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        const initParticles = ()=>{
            particles = [];
            const numParticles = Math.min(Math.floor(window.innerWidth / 15), 100);
            for(let i = 0; i < numParticles; i++){
                particles.push(new Particle());
            }
        };
        const animate = ()=>{
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Draw subtle gradient connections
            particles.forEach((p, index)=>{
                p.update();
                p.draw();
                for(let j = index; j < particles.length; j++){
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance / 1000})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });
            animationFrameId = requestAnimationFrame(animate);
        };
        resize();
        window.addEventListener("resize", resize);
        animate();
        return ()=>{
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "absolute inset-0 z-0 pointer-events-none opacity-60"
    }, void 0, false, {
        fileName: "[project]/2026 copys/website-wendynietov/components/ParticleBackground.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
}),
"[project]/2026 copys/website-wendynietov/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AGENDA_SLOTS",
    ()=>AGENDA_SLOTS,
    "CLIENTS",
    ()=>CLIENTS,
    "FAQ",
    ()=>FAQ,
    "INSIGHTS",
    ()=>INSIGHTS,
    "METHODOLOGY_STEPS",
    ()=>METHODOLOGY_STEPS,
    "METRICS",
    ()=>METRICS,
    "NAVIGATION",
    ()=>NAVIGATION,
    "PUBLICATIONS",
    ()=>PUBLICATIONS,
    "SERVICES",
    ()=>SERVICES,
    "SKILLS",
    ()=>SKILLS,
    "STUDIES",
    ()=>STUDIES,
    "TESTIMONIALS",
    ()=>TESTIMONIALS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column-increasing.js [app-ssr] (ecmascript) <export default as BarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-ssr] (ecmascript) <export default as Newspaper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/utensils.js [app-ssr] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-ssr] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/store.js [app-ssr] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/terminal.js [app-ssr] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/cloud.js [app-ssr] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
;
const NAVIGATION = [
    {
        name: "Inicio",
        path: "/",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        name: "Servicios",
        path: "/servicios",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
        subLinks: [
            {
                name: "Tecnología Restaurantes",
                path: "/servicios/tecnologia-restaurantes"
            },
            {
                name: "Estrategia Plataformas",
                path: "/servicios/plataformas"
            },
            {
                name: "Cocinas Ocultas",
                path: "/servicios/cocinas-ocultas"
            },
            {
                name: "Economía Creativa",
                path: "/servicios/economia-creativa"
            }
        ]
    },
    {
        name: "Estudios",
        path: "/estudios",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__["BarChart"]
    },
    {
        name: "Insights",
        path: "/insights",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"]
    },
    {
        name: "Sobre Mí",
        path: "/sobre-mi",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
    },
    {
        name: "Contacto",
        path: "/contacto",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"]
    }
];
const SERVICES = [
    {
        slug: "tecnologia-restaurantes",
        title: "Tecnología para Restaurantes",
        shortDesc: "Sistemas POS, integraciones de delivery y optimización de operaciones gastronómicas.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"],
        metrics: [
            {
                label: "Reducción de tiempos",
                value: "-35%"
            },
            {
                label: "Aumento de ticket",
                value: "+15%"
            },
            {
                label: "Precisión de inventario",
                value: "99.9%"
            }
        ],
        problem: "Los restaurantes modernos sufren por la fragmentación tecnológica: múltiples tablets para delivery, un POS desactualizado y pérdida de control sobre los márgenes operativos reales.",
        solution: "Implementamos una arquitectura unificada que centraliza todas las órdenes, sincroniza inventarios en tiempo real y proporciona dashboards de inteligencia de negocios para tomar decisiones basadas en datos."
    },
    {
        slug: "plataformas",
        title: "Estrategia de Plataformas",
        shortDesc: "Escalabilidad, retención y marketplaces para startups de alto crecimiento.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"],
        metrics: [
            {
                label: "Escalabilidad",
                value: "10x"
            },
            {
                label: "Costo de adquisición",
                value: "-40%"
            },
            {
                label: "Retención de usuarios",
                value: "+25%"
            }
        ],
        problem: "Las startups de marketplaces enfrentan el clásico problema del 'huevo y la gallina', además de arquitecturas monolíticas que colapsan durante picos de demanda.",
        solution: "Diseñamos estrategias de liquidez de red, sistemas de matching algorítmico y microservicios escalables para soportar hipercrecimiento transaccional sostenido."
    },
    {
        slug: "cocinas-ocultas",
        title: "Cocinas Ocultas (Ghost Kitchens)",
        shortDesc: "Despliegue operativo y tecnológico para marcas virtuales multicanal.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"],
        metrics: [
            {
                label: "Eficiencia de espacio",
                value: "+50%"
            },
            {
                label: "Tiempo de entrega",
                value: "< 20 min"
            },
            {
                label: "Lanzamiento de marca",
                value: "2 sem"
            }
        ],
        problem: "Operar múltiples marcas desde una sola cocina genera caos en la preparación, empaque incorrecto de pedidos y un enrutamiento logístico ineficiente.",
        solution: "Desplegamos Kitchen Display Systems (KDS) avanzados, ruteo predictivo de repartidores y flujos de ensamblaje optimizados para maximizar la capacidad de producción por metro cuadrado."
    },
    {
        slug: "economia-creativa",
        title: "Economía Creativa",
        shortDesc: "Sistemas de monetización y distribución para creadores UGC.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
        metrics: [
            {
                label: "Monetización",
                value: "+300%"
            },
            {
                label: "Engagement",
                value: "4.5x"
            },
            {
                label: "Diversificación",
                value: "3 canales"
            }
        ],
        problem: "Los creadores de contenido dependen de la monetización de un solo algoritmo (YouTube, TikTok) y carecen de infraestructura para escalar sus propios productos digitales.",
        solution: "Arquitectamos plataformas propias de membresía, comercio electrónico sin fricción y distribución omnicanal para que los creadores sean dueños de su audiencia."
    }
];
const METRICS = [
    {
        number: "50+",
        label: "Proyectos completados",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
    },
    {
        number: "15",
        label: "Años de experiencia combinada",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
    },
    {
        number: "$2B+",
        label: "GMV manejado en plataformas",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
    },
    {
        number: "3",
        label: "Países en LATAM",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    }
];
const CLIENTS = [
    {
        name: "Rappi",
        logo: "🚀",
        description: "Plataforma de delivery"
    },
    {
        name: "DiDi Food",
        logo: "🍽️",
        description: "Marketplace de comida"
    },
    {
        name: "GhostKitchens",
        logo: "👻",
        description: "Red de cocinas ocultas"
    },
    {
        name: "Emprendedores Tech",
        logo: "💡",
        description: "Startups de alto crecimiento"
    }
];
const METHODOLOGY_STEPS = [
    {
        number: "01",
        title: "Auditoría Estratégica",
        description: "Análisis profundo de arquitectura, flujos y puntos de dolor operativos."
    },
    {
        number: "02",
        title: "Diseño de Solución",
        description: "Prototipado de arquitectura escalable con roadmap de implementación."
    },
    {
        number: "03",
        title: "Implementación Ágil",
        description: "Sprints de 2 semanas con entregables tangibles y validación continua."
    },
    {
        number: "04",
        title: "Optimización & Escala",
        description: "Monitoreo de performance y ajustes para soportar crecimiento exponencial."
    }
];
const TESTIMONIALS = [
    {
        author: "Roberto García",
        role: "CEO de GhostKitchens MX",
        quote: "Pasamos de 5 a 50 marcas virtuales sin quebrar la infraestructura. Su arquitectura fue clave.",
        image: "👨‍💼"
    },
    {
        author: "Ana Martínez",
        role: "Head of Operations, Rappi Colombia",
        quote: "Redujimos el tiempo de entrega promedio en 12% solo replanteando el algoritmo de matching.",
        image: "👩‍💼"
    },
    {
        author: "Carlos Ruiz",
        role: "Co-founder, StartUp Tech LATAM",
        quote: "Nos ayudó a escalar de 100k a 5M USD en GMV sin contratar un equipo gigante.",
        image: "👨‍💼"
    }
];
const PUBLICATIONS = [
    {
        title: "Arquitectura de Microservicios para Marketplaces",
        publisher: "Dev.to",
        date: "Marzo 2024",
        url: "#"
    },
    {
        title: "Optimización de algoritmos de matching en delivery",
        publisher: "Medium",
        date: "Febrero 2024",
        url: "#"
    },
    {
        title: "Ghost Kitchens: La siguiente ola del restaurantaje digital",
        publisher: "TechCrunch Latam",
        date: "Enero 2024",
        url: "#"
    }
];
const FAQ = [
    {
        question: "¿Cuál es el tiempo mínimo de compromiso?",
        answer: "Iniciamos con un diagnóstico de 2 semanas. Luego, ofrecemos retainers flexibles de 1 a 3 meses según la complejidad del proyecto."
    },
    {
        question: "¿Cómo es el proceso de consultoría?",
        answer: "Comenzamos con una auditoría, luego diseñamos la solución, implementamos en sprints ágiles y optimizamos continuamente basado en métricas."
    },
    {
        question: "¿Qué sectores han visto más impacto?",
        answer: "Delivery, ghost kitchens, e-commerce y creator economy. Cualquier sector con crecimiento exponencial y necesidades de escala."
    },
    {
        question: "¿Trabajan con equipos distribuidos?",
        answer: "Sí, toda mi experiencia es con equipos en LATAM. Manejo diferentes zonas horarias sin problema."
    }
];
const AGENDA_SLOTS = [
    {
        time: "09:00 - 09:30",
        available: true
    },
    {
        time: "10:00 - 10:30",
        available: true
    },
    {
        time: "14:00 - 14:30",
        available: true
    },
    {
        time: "15:00 - 15:30",
        available: false
    },
    {
        time: "16:00 - 16:30",
        available: true
    }
];
const STUDIES = [
    {
        id: 1,
        title: "Arquitecto de Plataformas LATAM",
        company: "DiDi Food",
        period: "2021 - 2023",
        description: "Lideré la unificación de microservicios para la expansión en 4 países, logrando soportar más de 2M de transacciones diarias.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        title: "Lead Tech Operations",
        company: "Rappi",
        period: "2018 - 2021",
        description: "Diseño e implementación del algoritmo de asignación de pedidos (Courier Matching) reduciendo el tiempo de entrega promedio en 12%.",
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        title: "CTO & Co-founder",
        company: "GhostKitchens Mx",
        period: "2016 - 2018",
        description: "Desarrollo del sistema operativo completo (POS, KDS, Logistics) para la primera red de cocinas ocultas operando 15 marcas virtuales.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=60"
    }
];
const SKILLS = [
    {
        name: "Arquitectura de Microservicios",
        percentage: 95,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"]
    },
    {
        name: "Estrategia de Marketplaces",
        percentage: 90,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"]
    },
    {
        name: "Operaciones Gastronómicas Tech",
        percentage: 85,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"]
    },
    {
        name: "Node.js & React Ecosystem",
        percentage: 88,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"]
    },
    {
        name: "Ciberseguridad y Cumplimiento",
        percentage: 75,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
    }
];
const INSIGHTS = [
    {
        id: 1,
        title: "El futuro de las Ghost Kitchens tras la pandemia",
        excerpt: "Analizamos cómo la rentabilidad se trasladó del hipercrecimiento a la eficiencia operativa pura por metro cuadrado.",
        category: "Operaciones",
        date: "12 Oct 2023",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        title: "Escalabilidad algorítmica en Apps de Delivery",
        excerpt: "Por qué el 'Courier Matching' es el cuello de botella de cualquier plataforma de última milla y cómo resolverlo.",
        category: "Arquitectura",
        date: "28 Ago 2023",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        title: "UGC y la descentralización del e-commerce",
        excerpt: "Cómo los creadores de contenido están reemplazando a las vitrinas tradicionales en la decisión de compra.",
        category: "Tendencias",
        date: "05 Jul 2023",
        image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=600&auto=format&fit=crop&q=60"
    }
];
}),
"[project]/2026 copys/website-wendynietov/components/Home.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/wouter/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$components$2f$ParticleBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/components/ParticleBackground.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/2026 copys/website-wendynietov/lib/constants.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function Home() {
    const [expandedFaq, setExpandedFaq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const faqRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Service cards animation
        cardsRef.current.forEach((card, index)=>{
            if (!card) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(card, {
                opacity: 0,
                y: 50,
                rotationY: 15,
                scale: 0.95
            }, {
                opacity: 1,
                y: 0,
                rotationY: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                delay: index * 0.1
            });
        });
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach((t)=>t.kill());
        };
    }, []);
    const toggleFaq = (index)=>{
        setExpandedFaq(expandedFaq === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sticky-stack-section min-h-screen flex items-center justify-center px-4 md:px-12 overflow-hidden sticky top-0 z-10 bg-background",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$components$2f$ParticleBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleBackground"], {}, void 0, false, {
                        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-primary/20 blur-[120px] rounded-full pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/3 right-1/4 w-[40vw] h-[40vh] bg-accent/20 blur-[100px] rounded-full pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-5xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block border border-primary/50 text-primary bg-primary/10 rounded-full px-5 py-2.5 text-sm md:text-base font-semibold mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(21,245,186,0.2)]",
                                    children: "+15 proyectos implementados | 5 años en LatAm"
                                }, void 0, false, {
                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                className: "text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.2
                                },
                                children: [
                                    "Arquitectura Estratégica para ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "hidden md:block"
                                    }, void 0, false, {
                                        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                        lineNumber: 86,
                                        columnNumber: 43
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient",
                                        children: "Plataformas Digitales"
                                    }, void 0, false, {
                                        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                className: "text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 font-medium",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.4
                                },
                                children: "Consultoría para startups de alta velocidad: Rappi, DiDi, Ghost Kitchens, cocinas ocultas y creadores UGC."
                            }, void 0, false, {
                                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "flex flex-col sm:flex-row items-center justify-center gap-6",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                        href: "/servicios",
                                        className: "w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-accent hover:bg-accent/90 text-white shadow-[0_0_20px_rgba(187,0,170,0.4)] hover:shadow-[0_0_30px_rgba(187,0,170,0.6)] transition-all flex items-center justify-center",
                                        children: [
                                            "Ver servicios ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "ml-2",
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                lineNumber: 109,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                        href: "/contacto",
                                        className: "w-full sm:w-auto px-8 py-4 rounded-xl font-bold border-2 border-primary text-primary hover:bg-primary/10 transition-all flex items-center justify-center group",
                                        children: [
                                            "Agendar consultoría ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "ml-2 group-hover:scale-110 transition-transform",
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                lineNumber: 116,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sticky-stack-section min-h-screen flex items-center justify-center px-4 md:px-12 sticky top-0 z-20 bg-gradient-to-b from-background to-[#0a0f1f]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-bold mb-6 text-center",
                                    children: "Mi Trayectoria en Números"
                                }, void 0, false, {
                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-white/60 max-w-2xl mx-auto",
                                    children: "Métricas de impacto en el ecosistema digital LATAM."
                                }, void 0, false, {
                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["METRICS"].map((metric, index)=>{
                                const Icon = metric.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "text-primary",
                                                size: 32
                                            }, void 0, false, {
                                                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                lineNumber: 138,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl md:text-4xl font-black mb-2",
                                            children: metric.number
                                        }, void 0, false, {
                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                            lineNumber: 140,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-white/60 text-sm",
                                            children: metric.label
                                        }, void 0, false, {
                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                            lineNumber: 141,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sticky-stack-section min-h-screen flex items-center justify-center px-4 md:px-12 sticky top-0 z-30 bg-gradient-to-b from-[#0a0f1f] to-[#0f1428]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-bold mb-16 text-center",
                            children: "Empresas que confían en mí"
                        }, void 0, false, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-6",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLIENTS"].map((client, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card p-8 rounded-2xl text-center hover:border-primary/50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-5xl mb-4",
                                            children: client.logo
                                        }, void 0, false, {
                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-lg mb-2",
                                            children: client.name
                                        }, void 0, false, {
                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/50 text-sm",
                                            children: client.description
                                        }, void 0, false, {
                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sticky-stack-section min-h-screen flex items-center justify-center px-4 md:px-12 sticky top-0 z-40 bg-gradient-to-b from-[#0f1428] to-[#1a1a2e]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-bold mb-6 text-center",
                                    children: "Áreas de Especialidad"
                                }, void 0, false, {
                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/60 text-lg max-w-2xl mx-auto text-center",
                                    children: "Soluciones robustas probadas en entornos de hipercrecimiento."
                                }, void 0, false, {
                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVICES"].map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: (el)=>cardsRef.current[index] = el,
                                    className: "h-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                        href: `/servicios/${service.slug}`,
                                        className: "block h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            whileHover: {
                                                y: -8,
                                                boxShadow: '0 0 30px rgba(21, 245, 186, 0.15)',
                                                borderColor: 'rgba(21, 245, 186, 0.4)'
                                            },
                                            className: "glass-card p-10 rounded-3xl h-full flex flex-col relative overflow-hidden group transition-colors duration-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-primary/10 group-hover:text-primary transition-colors text-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(service.icon, {
                                                        size: 32
                                                    }, void 0, false, {
                                                        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-bold mb-4",
                                                    children: service.title
                                                }, void 0, false, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/60 leading-relaxed mb-8 flex-1",
                                                    children: service.shortDesc
                                                }, void 0, false, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-4 pt-6 border-t border-white/10",
                                                    children: service.metrics.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-primary font-bold text-lg mb-1",
                                                                    children: m.value
                                                                }, void 0, false, {
                                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                                    lineNumber: 205,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-white/40 uppercase tracking-wider",
                                                                    children: m.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                                    lineNumber: 206,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                            lineNumber: 183,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                        lineNumber: 182,
                                        columnNumber: 17
                                    }, this)
                                }, service.slug, false, {
                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sticky-stack-section min-h-screen flex items-center justify-center px-4 md:px-12 sticky top-0 z-50 bg-gradient-to-b from-[#1a1a2e] to-[#242436]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-20 text-center",
                            children: "Mi Metodología"
                        }, void 0, false, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["METHODOLOGY_STEPS"].map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-card p-8 rounded-2xl h-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-5xl font-black text-primary/20 mb-4",
                                                    children: step.number
                                                }, void 0, false, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold mb-4",
                                                    children: step.title
                                                }, void 0, false, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/60",
                                                    children: step.description
                                                }, void 0, false, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this),
                                        index < __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["METHODOLOGY_STEPS"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "text-primary/30",
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                lineNumber: 234,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sticky-stack-section min-h-screen flex items-center justify-center px-4 md:px-12 sticky top-0 z-[60] bg-gradient-to-b from-[#242436] to-[#2d2d40]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-20 text-center",
                            children: "Testimonios"
                        }, void 0, false, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TESTIMONIALS"].map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card p-10 rounded-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl",
                                                    children: testimonial.image
                                                }, void 0, false, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold",
                                                            children: testimonial.author
                                                        }, void 0, false, {
                                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/60 text-sm",
                                                            children: testimonial.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/80 italic",
                                            children: [
                                                '"',
                                                testimonial.quote,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sticky-stack-section min-h-screen flex items-center justify-center px-4 md:px-12 sticky top-0 z-[70] bg-gradient-to-b from-[#2d2d40] to-[#363650]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-20 text-center",
                            children: "Publicaciones"
                        }, void 0, false, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLICATIONS"].map((pub, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: pub.url,
                                    className: "glass-card p-8 rounded-2xl flex items-start justify-between hover:border-primary/50 transition-colors group block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold mb-2 group-hover:text-primary transition-colors",
                                                    children: pub.title
                                                }, void 0, false, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/60 text-sm",
                                                    children: [
                                                        pub.publisher,
                                                        " • ",
                                                        pub.date
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                            lineNumber: 277,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "text-white/40 group-hover:text-primary transition-colors flex-shrink-0 ml-4",
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                            lineNumber: 281,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                    lineNumber: 267,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sticky-stack-section min-h-screen flex items-center justify-center px-4 md:px-12 sticky top-0 z-[80] bg-gradient-to-b from-[#363650] to-[#3f3f52]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-6 text-center",
                            children: "Últimos Insights"
                        }, void 0, false, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-white/60 mb-20 max-w-2xl mx-auto",
                            children: "Análisis profundos sobre arquitectura, plataformas y futuro del ecosistema digital."
                        }, void 0, false, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                            children: [
                                1,
                                2,
                                3
                            ].map((index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-40 bg-gradient-to-br from-primary/20 to-accent/20"
                                        }, void 0, false, {
                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                            lineNumber: 299,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold text-primary uppercase",
                                                    children: "Arquitectura"
                                                }, void 0, false, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold my-3",
                                                    children: "Escalabilidad en Plataformas"
                                                }, void 0, false, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/60 text-sm mb-6",
                                                    children: "Análisis detallado de cómo diseñar sistemas que crecen sin dolor."
                                                }, void 0, false, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-white/40 text-xs",
                                                    children: "Hace 2 semanas"
                                                }, void 0, false, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                            lineNumber: 300,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                    lineNumber: 298,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                    lineNumber: 290,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sticky-stack-section min-h-screen flex items-center justify-center px-4 md:px-12 sticky top-0 z-[90] bg-gradient-to-b from-[#3f3f52] to-[#484862]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-16 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center md:text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl md:text-5xl font-bold mb-6",
                                        children: "Sobre Mí"
                                    }, void 0, false, {
                                        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                        lineNumber: 317,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/70 text-lg leading-relaxed mb-8",
                                        children: "Ex-líder técnico en Rappi y DiDi Food. Cofundador de GhostKitchens. Experto en arquitectura escalable para marketplaces y plataformas que crecen 10x en 18 meses."
                                    }, void 0, false, {
                                        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                        lineNumber: 318,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/70 text-lg leading-relaxed mb-8",
                                        children: "He manejado más de $2B en GMV, liderado equipos de 50+ personas y asesorado startups que hoy son unicornios."
                                    }, void 0, false, {
                                        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                        lineNumber: 321,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                        href: "/sobre-mi",
                                        className: "inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-xl hover:bg-primary/10 transition-all",
                                        children: [
                                            "Ver trayectoria completa ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                lineNumber: 328,
                                                columnNumber: 42
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card p-12 rounded-3xl text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-8xl mb-6",
                                        children: "👨‍💻"
                                    }, void 0, false, {
                                        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/60 mb-8 italic",
                                        children: '"Creo que la arquitectura es el arte de tomar decisiones complejas y hacerlas simples para que un equipo pequeño pueda escalar infinitamente."'
                                    }, void 0, false, {
                                        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                        lineNumber: 334,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-8 border-t border-white/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold mb-2",
                                                children: "5+ años"
                                            }, void 0, false, {
                                                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/60",
                                                children: "En ecosistema LATAM"
                                            }, void 0, false, {
                                                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                lineNumber: 339,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                    lineNumber: 314,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                lineNumber: 313,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sticky-stack-section min-h-screen flex items-center justify-center px-4 md:px-12 sticky top-0 z-[100] bg-gradient-to-b from-[#484862] to-[#515167]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-20 text-center",
                            children: "Preguntas Frecuentes"
                        }, void 0, false, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 349,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FAQ"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: (el)=>faqRefs.current[index] = el,
                                    className: `glass-card rounded-2xl overflow-hidden ${expandedFaq === index ? 'expanded' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>toggleFaq(index),
                                            className: "w-full px-8 py-6 flex items-center justify-between hover:bg-white/5 transition-colors text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold",
                                                    children: item.question
                                                }, void 0, false, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: {
                                                        rotate: expandedFaq === index ? 180 : 0
                                                    },
                                                    transition: {
                                                        duration: 0.2
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "flex-shrink-0",
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                            lineNumber: 358,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: false,
                                            animate: {
                                                height: expandedFaq === index ? "auto" : 0,
                                                opacity: expandedFaq === index ? 1 : 0
                                            },
                                            transition: {
                                                duration: 0.3
                                            },
                                            className: "overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-8 pb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/70",
                                                    children: item.answer
                                                }, void 0, false, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                lineNumber: 377,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                            lineNumber: 371,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                    lineNumber: 353,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 351,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                    lineNumber: 348,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sticky-stack-section min-h-screen flex items-center justify-center px-4 md:px-12 sticky top-0 z-[110] bg-gradient-to-b from-[#515167] to-[#5a5a75]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-6 text-center",
                            children: "Agendar Consultoría"
                        }, void 0, false, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 390,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-white/60 mb-12 max-w-2xl mx-auto",
                            children: "Selecciona un horario disponible para una sesión de 30 minutos."
                        }, void 0, false, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 391,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-card p-12 rounded-3xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AGENDA_SLOTS"].map((slot, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                            whileHover: {
                                                scale: slot.available ? 1.02 : 1
                                            },
                                            disabled: !slot.available,
                                            className: `p-4 rounded-xl font-semibold transition-all ${slot.available ? 'bg-primary/10 border border-primary text-primary hover:bg-primary/20' : 'bg-white/5 border border-white/10 text-white/40 cursor-not-allowed'}`,
                                            children: [
                                                slot.time,
                                                !slot.available && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 text-xs",
                                                    children: "No disponible"
                                                }, void 0, false, {
                                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                            lineNumber: 398,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                    lineNumber: 396,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                    href: "/contacto",
                                    className: "w-full mt-12 px-8 py-4 rounded-xl font-bold bg-accent hover:bg-accent/90 text-white shadow-[0_0_20px_rgba(187,0,170,0.4)] transition-all flex items-center justify-center",
                                    children: [
                                        "Continuar con selección ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$2026__copys$2f$website$2d$wendynietov$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "ml-2",
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                            lineNumber: 418,
                                            columnNumber: 39
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                                    lineNumber: 414,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                            lineNumber: 395,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                    lineNumber: 389,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
                lineNumber: 388,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/2026 copys/website-wendynietov/components/Home.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a7826e00._.js.map
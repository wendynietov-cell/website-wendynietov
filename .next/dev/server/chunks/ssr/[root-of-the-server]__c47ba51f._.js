module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

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
"[project]/2026 copys/website-wendynietov/components/Home.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/2026 copys/website-wendynietov/components/Home.tsx'\n\nUnexpected token. Did you mean `{'}'}` or `&rbrace;`?");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c47ba51f._.js.map
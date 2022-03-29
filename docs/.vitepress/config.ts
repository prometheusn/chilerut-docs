import { defineConfig } from 'vitepress'


export default defineConfig({
    lang: "es-CL",
    title: "ChileRUT",
    description: "Documentación para ChileRUT, una librería escrita en TypeScript, con diversas utilidades para el RUT/RUN chileno.",
    lastUpdated: true,
    base: "/chilerut-docs",
    themeConfig: {
        nav: [
            { text: "Documentación", link: "/" },
            { text: "Novedades (changelog)", link: "https://github.com/prometheusn/chilerut/releases" }
        ],
        sidebar: [
            {
                text: "Introducción", children: [
                    { text: "Previo", link: "/" },
                    { text: "Empezando", link: "/empezando/", },
                    { text: "Funciones", link: "/funciones/" },
                    {
                        text: "Conceptos", link: "/conceptos/", children: [
                            { text: "Formato", link: "/conceptos/formato" }
                        ]
                    }
                ]
            },
        ],
    }
})
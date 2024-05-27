

const data = {
    "Entidades": [
        {
            "Entidad": "Inflación",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Pobreza" },
                { "Polaridad": "Negativa", "Entidad": "Salarios Reales" },
                { "Polaridad": "Negativa", "Entidad": "Consumo" },
                { "Polaridad": "Negativa", "Entidad": "Inversión" },
                { "Polaridad": "Negativa", "Entidad": "Deuda Pública" },
                { "Polaridad": "Negativa", "Entidad": "Ahorro" },
                { "Polaridad": "Positiva", "Entidad": "Tasa de Interés" },
                { "Polaridad": "Positiva", "Entidad": "Emisión Monetaria" }
            ]
        },
        {
            "Entidad": "Pobreza",
            "Influye": [
                { "Polaridad": "Negativa", "Entidad": "Consumo" },
                { "Polaridad": "Negativa", "Entidad": "Salud" },
                { "Polaridad": "Negativa", "Entidad": "Educación" },
                { "Polaridad": "Negativa", "Entidad": "Seguridad" },
                { "Polaridad": "Negativa", "Entidad": "Estabilidad Social" },
                { "Polaridad": "Positiva", "Entidad": "Sensibilidad Social" }
            ]
        },
        {
            "Entidad": "Recesión",
            "Influye": [
                { "Polaridad": "Negativa", "Entidad": "Empleo" },
                { "Polaridad": "Negativa", "Entidad": "Consumo" },
                { "Polaridad": "Negativa", "Entidad": "Inversión" },
                { "Polaridad": "Negativa", "Entidad": "Producción" },
                { "Polaridad": "Negativa", "Entidad": "Salarios Reales" }
            ]
        },
        {
            "Entidad": "Corrupción",
            "Influye": [
                { "Polaridad": "Negativa", "Entidad": "Inversión" },
                { "Polaridad": "Negativa", "Entidad": "Confianza" },
                { "Polaridad": "Negativa", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Negativa", "Entidad": "Desigualdad" },
                { "Polaridad": "Negativa", "Entidad": "Estado de Derecho" },
                { "Polaridad": "Negativa", "Entidad": "Confianza" },
                { "Polaridad": "Negativa", "Entidad": "Estabilidad Social" },
                { "Polaridad": "Negativa", "Entidad": "Calidad Institucional" }
            ]
        },
        {
            "Entidad": "Acumulación de Riquezas",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Desigualdad" },
                { "Polaridad": "Negativa", "Entidad": "Consumo" },
                { "Polaridad": "Negativa", "Entidad": "Equidad Social" },
                { "Polaridad": "Negativa", "Entidad": "Cohesión Social" }
            ]
        },
        {
            "Entidad": "Socialismo",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Equidad Social" },
                { "Polaridad": "Positiva", "Entidad": "Servicios Públicos" },
                { "Polaridad": "Positiva", "Entidad": "Distribución de la Riqueza" },
                { "Polaridad": "Negativa", "Entidad": "Iniciativa Privada" },
                { "Polaridad": "Negativa", "Entidad": "Libertad Económica" }
            ]
        },
        {
            "Entidad": "Economía de Bienestar",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Calidad de Vida" },
                { "Polaridad": "Positiva", "Entidad": "Equidad Social" },
                { "Polaridad": "Positiva", "Entidad": "Servicios Públicos" },
                { "Polaridad": "Positiva", "Entidad": "Educación" },
                { "Polaridad": "Positiva", "Entidad": "Salud" }
            ]
        },
        {
            "Entidad": "Liberalismo Clásico",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Libertad Económica" },
                { "Polaridad": "Positiva", "Entidad": "Iniciativa Privada" },
                { "Polaridad": "Positiva", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Negativa", "Entidad": "Regulación Estatal" }
            ]
        },
        {
            "Entidad": "Anarco Capitalismo",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Libertad Económica" },
                { "Polaridad": "Positiva", "Entidad": "Iniciativa Privada" },
                { "Polaridad": "Positiva", "Entidad": "Reducción del Estado" },
                { "Polaridad": "Negativa", "Entidad": "Servicios Públicos" },
                { "Polaridad": "Negativa", "Entidad": "Regulación Estatal" }
            ]
        },
        {
            "Entidad": "Inversión",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Positiva", "Entidad": "Empleo" },
                { "Polaridad": "Positiva", "Entidad": "Innovación" },
                { "Polaridad": "Positiva", "Entidad": "Productividad" }
            ]
        },
        {
            "Entidad": "Consumo",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Positiva", "Entidad": "Producción" },
                { "Polaridad": "Positiva", "Entidad": "Empleo" },
                { "Polaridad": "Negativa", "Entidad": "Ahorro" },
                { "Polaridad": "Negativa", "Entidad": "Inflación" }
            ]
        },
        {
            "Entidad": "Salarios Reales",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Consumo" },
                { "Polaridad": "Positiva", "Entidad": "Calidad de Vida" },
                { "Polaridad": "Positiva", "Entidad": "Pobreza" },
                { "Polaridad": "Positiva", "Entidad": "Equidad Social" },
                { "Polaridad": "Negativa", "Entidad": "Competitividad" }
            ]
        },
        {
            "Entidad": "Deuda Pública",
            "Influye": [
                { "Polaridad": "Negativa", "Entidad": "Inversión" },
                { "Polaridad": "Negativa", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Negativa", "Entidad": "Confianza" },
                { "Polaridad": "Negativa", "Entidad": "Tasa de Interés" }
            ]
        },
        {
            "Entidad": "Ahorro",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Inversión" },
                { "Polaridad": "Positiva", "Entidad": "Estabilidad Económica" },
                { "Polaridad": "Positiva", "Entidad": "Seguridad Financiera" },
                { "Polaridad": "Negativa", "Entidad": "Consumo" }
            ]
        },
        {
            "Entidad": "Tasa de Interés",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Ahorro" },
                { "Polaridad": "Negativa", "Entidad": "Consumo" },
                { "Polaridad": "Negativa", "Entidad": "Inversión" },
                { "Polaridad": "Positiva", "Entidad": "Inflación" }
            ]
        },
        {
            "Entidad": "Empleo",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Consumo" },
                { "Polaridad": "Positiva", "Entidad": "Salarios Reales" },
                { "Polaridad": "Positiva", "Entidad": "Equidad Social" },
                { "Polaridad": "Positiva", "Entidad": "Estabilidad Social" },
                { "Polaridad": "Negativa", "Entidad": "Desempleo" }
            ]
        },
        {
            "Entidad": "Producción",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Positiva", "Entidad": "Empleo" },
                { "Polaridad": "Positiva", "Entidad": "Exportaciones" },
                { "Polaridad": "Positiva", "Entidad": "Salarios Reales" }
            ]
        },
        {
            "Entidad": "Confianza",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Inversión" },
                { "Polaridad": "Positiva", "Entidad": "Consumo" },
                { "Polaridad": "Positiva", "Entidad": "Estabilidad Económica" },
                { "Polaridad": "Positiva", "Entidad": "Crecimiento Económico" }
            ]
        },
        {
            "Entidad": "Crecimiento Económico",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Empleo" },
                { "Polaridad": "Positiva", "Entidad": "Producción" },
                { "Polaridad": "Positiva", "Entidad": "Inversión" },
                { "Polaridad": "Positiva", "Entidad": "Consumo" },
                { "Polaridad": "Negativa", "Entidad": "Inflación" }
            ]
        },
        {
            "Entidad": "Equidad Social",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Estabilidad Social" },
                { "Polaridad": "Positiva", "Entidad": "Calidad de Vida" },
                { "Polaridad": "Positiva", "Entidad": "Pobreza" },
                { "Polaridad": "Positiva", "Entidad": "Consumo" }
            ]
        },
        {
            "Entidad": "Estabilidad Social",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Consumo" },
                { "Polaridad": "Positiva", "Entidad": "Inversión" },
                { "Polaridad": "Positiva", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Positiva", "Entidad": "Calidad de Vida" },
                { "Polaridad": "Positiva", "Entidad": "Seguridad" }
            ]
        },
        {
            "Entidad": "Calidad de Vida",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Salud" },
                { "Polaridad": "Positiva", "Entidad": "Educación" },
                { "Polaridad": "Positiva", "Entidad": "Consumo" },
                { "Polaridad": "Positiva", "Entidad": "Pobreza" }
            ]
        },
        {
            "Entidad": "Seguridad",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Consumo" },
                { "Polaridad": "Positiva", "Entidad": "Inversión" },
                { "Polaridad": "Positiva", "Entidad": "Estabilidad Social" },
                { "Polaridad": "Positiva", "Entidad": "Calidad de Vida" }
            ]
        },
        {
            "Entidad": "Salud",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Calidad de Vida" },
                { "Polaridad": "Positiva", "Entidad": "Consumo" },
                { "Polaridad": "Positiva", "Entidad": "Empleo" },
                { "Polaridad": "Positiva", "Entidad": "Equidad Social" }
            ]
        },
        {
            "Entidad": "Educación",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Empleo" },
                { "Polaridad": "Positiva", "Entidad": "Calidad de Vida" },
                { "Polaridad": "Positiva", "Entidad": "Innovación" },
                { "Polaridad": "Positiva", "Entidad": "Productividad" }
            ]
        },
        {
            "Entidad": "Desigualdad",
            "Influye": [
                { "Polaridad": "Negativa", "Entidad": "Estabilidad Social" },
                { "Polaridad": "Negativa", "Entidad": "Equidad Social" },
                { "Polaridad": "Negativa", "Entidad": "Calidad de Vida" },
                { "Polaridad": "Negativa", "Entidad": "Consumo" }
            ]
        },
        {
            "Entidad": "Innovación",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Productividad" },
                { "Polaridad": "Positiva", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Positiva", "Entidad": "Inversión" },
                { "Polaridad": "Positiva", "Entidad": "Calidad de Vida" }
            ]
        },
        {
            "Entidad": "Productividad",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Positiva", "Entidad": "Salarios Reales" },
                { "Polaridad": "Positiva", "Entidad": "Consumo" },
                { "Polaridad": "Positiva", "Entidad": "Calidad de Vida" }
            ]
        },
        {
            "Entidad": "Exportaciones",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Positiva", "Entidad": "Inversión" },
                { "Polaridad": "Positiva", "Entidad": "Producción" },
                { "Polaridad": "Positiva", "Entidad": "Empleo" }
            ]
        },
        {
            "Entidad": "Desempleo",
            "Influye": [
                { "Polaridad": "Negativa", "Entidad": "Consumo" },
                { "Polaridad": "Negativa", "Entidad": "Estabilidad Social" },
                { "Polaridad": "Negativa", "Entidad": "Calidad de Vida" },
                { "Polaridad": "Negativa", "Entidad": "Equidad Social" }
            ]
        },
        {
            "Entidad": "Competitividad",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Positiva", "Entidad": "Innovación" },
                { "Polaridad": "Positiva", "Entidad": "Productividad" },
                { "Polaridad": "Positiva", "Entidad": "Empleo" }
            ]
        },
        {
            "Entidad": "Estado de Derecho",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Confianza" },
                { "Polaridad": "Positiva", "Entidad": "Inversión" },
                { "Polaridad": "Positiva", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Positiva", "Entidad": "Estabilidad Social" }
            ]
        },
        {
            "Entidad": "Regulación Estatal",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Seguridad" },
                { "Polaridad": "Positiva", "Entidad": "Equidad Social" },
                { "Polaridad": "Negativa", "Entidad": "Iniciativa Privada" },
                { "Polaridad": "Negativa", "Entidad": "Crecimiento Económico" }
            ]
        },
        {
            "Entidad": "Libertad Económica",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Positiva", "Entidad": "Iniciativa Privada" },
                { "Polaridad": "Positiva", "Entidad": "Innovación" },
                { "Polaridad": "Positiva", "Entidad": "Inversión" }
            ]
        },
        {
            "Entidad": "Iniciativa Privada",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Positiva", "Entidad": "Empleo" },
                { "Polaridad": "Positiva", "Entidad": "Innovación" },
                { "Polaridad": "Positiva", "Entidad": "Inversión" }
            ]
        },
        {
            "Entidad": "Distribución de la Riqueza",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Equidad Social" },
                { "Polaridad": "Positiva", "Entidad": "Estabilidad Social" },
                { "Polaridad": "Positiva", "Entidad": "Calidad de Vida" },
                { "Polaridad": "Negativa", "Entidad": "Acumulación de Riquezas" }
            ]
        },
        {
            "Entidad": "Servicios Públicos",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Calidad de Vida" },
                { "Polaridad": "Positiva", "Entidad": "Equidad Social" },
                { "Polaridad": "Positiva", "Entidad": "Salud" },
                { "Polaridad": "Positiva", "Entidad": "Educación" }
            ]
        },
        {
            "Entidad": "Cohesión Social",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Estabilidad Social" },
                { "Polaridad": "Positiva", "Entidad": "Calidad de Vida" },
                { "Polaridad": "Positiva", "Entidad": "Equidad Social" },
                { "Polaridad": "Negativa", "Entidad": "Desigualdad" }
            ]
        },
        {
            "Entidad": "Seguridad Financiera",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Estabilidad Económica" },
                { "Polaridad": "Positiva", "Entidad": "Ahorro" },
                { "Polaridad": "Positiva", "Entidad": "Confianza" },
                { "Polaridad": "Positiva", "Entidad": "Consumo" }
            ]
        },
        {
            "Entidad": "Estabilidad Económica",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Confianza" },
                { "Polaridad": "Positiva", "Entidad": "Inversión" },
                { "Polaridad": "Positiva", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Positiva", "Entidad": "Estabilidad Social" }
            ]
        },
        {
            "Entidad": "Calidad Institucional",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Confianza" },
                { "Polaridad": "Positiva", "Entidad": "Inversión" },
                { "Polaridad": "Positiva", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Positiva", "Entidad": "Estabilidad Social" }
            ]
        },
        {
            "Entidad": "Competencia",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Innovación" },
                { "Polaridad": "Positiva", "Entidad": "Productividad" },
                { "Polaridad": "Positiva", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Positiva", "Entidad": "Calidad de Vida" }
            ]
        },
        {
            "Entidad": "Importaciones",
            "Influye": [
                { "Polaridad": "Negativa", "Entidad": "Producción Nacional" },
                { "Polaridad": "Negativa", "Entidad": "Empleo" },
                { "Polaridad": "Negativa", "Entidad": "Inversión Nacional" },
                { "Polaridad": "Positiva", "Entidad": "Consumo" }
            ]
        },
        {
            "Entidad": "Política Fiscal",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Inversión Pública" },
                { "Polaridad": "Negativa", "Entidad": "Deuda Pública" },
                { "Polaridad": "Positiva", "Entidad": "Servicios Públicos" },
                { "Polaridad": "Positiva", "Entidad": "Estabilidad Económica" },
                { "Polaridad": "Negativa", "Entidad": "Déficit Fiscal" }
            ]
        },
        {
            "Entidad": "Política Monetaria",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Estabilidad Económica" },
                { "Polaridad": "Negativa", "Entidad": "Inflación" },
                { "Polaridad": "Positiva", "Entidad": "Confianza" },
                { "Polaridad": "Positiva", "Entidad": "Ahorro" },
                { "Polaridad": "Positiva", "Entidad": "Emisión Monetaria" }
            ]
        },
        {
            "Entidad": "Redistribución de la Riqueza",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Equidad Social" },
                { "Polaridad": "Positiva", "Entidad": "Calidad de Vida" },
                { "Polaridad": "Positiva", "Entidad": "Consumo" },
                { "Polaridad": "Positiva", "Entidad": "Estabilidad Social" }
            ]
        },
        {
            "Entidad": "Transparencia",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Confianza" },
                { "Polaridad": "Positiva", "Entidad": "Inversión" },
                { "Polaridad": "Positiva", "Entidad": "Calidad Institucional" },
                { "Polaridad": "Positiva", "Entidad": "Estabilidad Social" }
            ]
        },
        {
            "Entidad": "Reducción del Estado",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Libertad Económica" },
                { "Polaridad": "Positiva", "Entidad": "Iniciativa Privada" },
                { "Polaridad": "Negativa", "Entidad": "Servicios Públicos" },
                { "Polaridad": "Negativa", "Entidad": "Regulación Estatal" }
            ]
        },
        {
            "Entidad": "Producción Nacional",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Positiva", "Entidad": "Empleo" },
                { "Polaridad": "Positiva", "Entidad": "Exportaciones" },
                { "Polaridad": "Positiva", "Entidad": "Inversión Nacional" }
            ]
        },
        {
            "Entidad": "Inversión Nacional",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Positiva", "Entidad": "Empleo" },
                { "Polaridad": "Positiva", "Entidad": "Innovación" },
                { "Polaridad": "Positiva", "Entidad": "Producción Nacional" }
            ]
        },
        {
            "Entidad": "Inversión Pública",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Crecimiento Económico" },
                { "Polaridad": "Positiva", "Entidad": "Empleo" },
                { "Polaridad": "Positiva", "Entidad": "Servicios Públicos" }
            ]
        },
        {
            "Entidad": "Déficit Fiscal",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Deuda Pública" },
                { "Polaridad": "Positiva", "Entidad": "Emisión Monetaria" },
                { "Polaridad": "Negativa", "Entidad": "Confianza" },
                { "Polaridad": "Negativa", "Entidad": "Inversión" },
                { "Polaridad": "Negativa", "Entidad": "Estabilidad Económica" }
            ]
        },
        {
            "Entidad": "Emisión Monetaria",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Inflación" },
                { "Polaridad": "Negativa", "Entidad": "Confianza" },
                { "Polaridad": "Negativa", "Entidad": "Estabilidad Económica" },
                { "Polaridad": "Negativa", "Entidad": "Ahorro" }
            ]
        },
        {
            "Entidad": "Sensibilidad Social",
            "Influye": [
                { "Polaridad": "Positiva", "Entidad": "Estabilidad Social" },
                { "Polaridad": "Positiva", "Entidad": "Cohesión Social" },
                { "Polaridad": "Positiva", "Entidad": "Equidad Social" },
                { "Polaridad": "Positiva", "Entidad": "Calidad de Vida" }
            ]
        }
    ]
}



const svg = d3.select("svg");
const width = +svg.attr("width");
const height = +svg.attr("height");

// Creaci n de nodos y enlaces
const nodes = [];
const links = [];

data.Entidades.forEach(e => {
    nodes.push({ id: e.Entidad });
    e.Influye.forEach(rel => {
        links.push({
            source: e.Entidad,
            target: rel.Entidad,
            polarity: rel.Polaridad
        });
    });
});

const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(500))
    .force("charge", d3.forceManyBody().strength(-400))
    .force("center", d3.forceCenter(svg.attr("width") / 2, svg.attr("height") / 2))
.force("collide", d3.forceCollide().radius(function(d) {
        return 200; // The radius for collision detection. Adjust as necessary.
    }));






	







simulation.on("tick", () => {
    link.attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node.attr("cx", d => d.x)
        .attr("cy", d => d.y);
		
	// Add this block to update the position of the node texts
    nodeText.attr("x", d => d.x)
        .attr("y", d => d.y);
		
	// Add this block to position the link labels at the midpoint of each link
    linkLabel.attr("x", d => (d.source.x + d.target.x) / 2)
        .attr("y", d => (d.source.y + d.target.y) / 2);
});

function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    // Do not set d.fx and d.fy to null
}


  


// Define arrowhead markers for the links
svg.append("defs").selectAll("marker")
    .data(["Positiva", "Negativa"]) // Different marker IDs
    .enter().append("marker")
    .attr("id", d => d)
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 50) // This sets how far back the arrow is set. Adjust as needed.
    .attr("refY", 0)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")
	.attr("refX", 35) 
	.attr("markerWidth", 12)
	.attr("markerHeight", 12)
    .style("fill", d => (d === "Positiva" ? "green" : "red"));

	
// Draw the links with arrowheads
const link = svg.append("g")
    .selectAll("line")
    .data(links)
    .enter().append("line")
    .attr("Polaridad", d => d.polarity) 
    .attr("stroke-width", 3) // Set a stroke width
    .attr("marker-end", d => `url(#${d.polarity})`);


// After the existing 'link' definition
const linkLabel = svg.append("g")
    .selectAll("text")
    .data(links)
    .enter().append("text")
    .attr("font-family", "Arial, sans-serif")
    .attr("font-size", "12px")
    .attr("fill", "#000")
    .text(d => d.polarity === "Positiva" ? "+" : "-");


// Agregar texto a enlaces
link.append("text")
    .text(d => d.polarity)
    .attr("dx", 15)
    .attr("dy", -5);


// Dibujar nodos
const node = svg.append("g")
    .selectAll("circle")
    .data(nodes)
    .enter().append("circle")
    .attr("r", 75) // Aumentado para que quepa el texto
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

// Function to truncate text
function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength - 3) + "...";
    } else {
        return text;
    }
}

// Append text for the nodes with auto-adjusted size and tooltip for overflow
const maxTextLength = 30; // Maximum length of text before truncating
const nodeText = svg.append("g")
    .selectAll("text")
    .data(nodes)
    .enter()
    .append("text")
    .attr("font-family", "Arial, sans-serif")
    .attr("font-size", "15px")
    .attr("fill", "#333")
    .attr("text-anchor", "middle")
    .attr("overflow-wrap", "break-word")
    .attr("word-wrap", "break-word")
    .attr("max-width", "90px")
    .attr("dy", ".35em")
    .text(d => truncateText(d.id, maxTextLength))
    .each(function(d) { // Adjust font size based on the length of the text
        const thisText = d3.select(this);
        const textLength = thisText.node().getComputedTextLength();
        const text = thisText.text();
        if (textLength > maxTextLength * 6) { // Example logic for adjusting font size
            thisText.attr("font-size", "10px");
        }
    });

// Append a title element for each node text to show full text as a tooltip
nodeText.append("title")
    .text(d => d.id);


node.on("dblclick", function(d) {
        d.fx = null;
        d.fy = null;
      });

node.on("click", function(d) {
        repositionNodesOnClick(this);
      });

function repositionNodesOnClick(d) {
        console.log("entro");
        // Encuentra todos los nodos que tienen una influencia positiva desde el nodo clicado
        const influencedNodes = links.filter(link => link.source.id === d.id && link.polarity === "Positiva").map(link => link.target);
        
        // Posiciona estos nodos más cerca del nodo clicado
        influencedNodes.forEach(influencedNode => {
            const distance = 150; // Ajusta la distancia según sea necesario
            const angle = Math.random() * 2 * Math.PI; // Ángulo aleatorio para evitar superposiciones
            influencedNode.fx = d.x + distance * Math.cos(angle);
            influencedNode.fy = d.y + distance * Math.sin(angle);
        });
    
        // Reinicia la simulación para aplicar los cambios
        simulation.alpha(1).restart();
    }
    
    function setHardcodedPositions() {
        const nodePositions = {
            "Inflación": { x: 400, y: 300 },
            "Pobreza": { x: 600, y: 100 },
            "Salarios Reales": { x: 200, y: 300 },
            "Consumo": { x: 400, y: 500 },
            "Inversión": { x: 600, y: 500 },
            "Deuda Pública": { x: 800, y: 300 },
            "Ahorro": { x: 200, y: 100 },
            "Tasa de Interés": { x: 800, y: 500 },
            "Emisión Monetaria": { x: 400, y: 100 },
            "Recesión": { x: 1000, y: 100 },
            "Corrupción": { x: 1000, y: 300 },
            "Desempleo": { x: 1000, y: 500 },
            "Déficit Fiscal": { x: 1200, y: 300 },
            "Crecimiento Económico": { x: 1400, y: 300 }
            // Agregar posiciones para el resto de los nodos según sea necesario
        };
    
        nodes.forEach(node => {
            if (nodePositions[node.id]) {
                node.fx = nodePositions[node.id].x;
                node.fy = nodePositions[node.id].y;
            }
        });
    
        simulation.alpha(1).restart();
    }

    
// Hardcode positions
setHardcodedPositions();

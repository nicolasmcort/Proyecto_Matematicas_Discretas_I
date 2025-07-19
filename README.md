<img src="https://media.tenor.com/JoUXoTf0_zAAAAAC/bart-simpson-los-simpson.gif" width="300" alt="Bart bailando :D">
<br>


# Proyecto de Matemáticas Discretas I
<br>
<img src="https://www.pngkey.com/png/detail/268-2688228_universidad-nacional-colombia-logo.png" width="230" alt="Logo Universidad Nacional de Colombia">
<br>
UNIVERSIDAD NACIONAL DE COLOMBIA 
<br>
Matemáticas Discretas I 
<br>
2025963 – Grupo 2
<br><br>
Autores: 

- Samuel Ándres Herrera Villero (saherrerav@unal.edu.co) 
- Nicolás Aguirre Velásquez (niaguirrev@unal.edu.co) 
- Ever Nicolás Muñoz Cortés (evmunoz@unal.edu.co)
- Juan David Amado Rubio (juamador@unal.edu.co) 

Docente: Arles Ernesto Rodríguez Portela
<br><br>

---

## Contenido

- [1. Objetivos](#1-objetivos)
  - [1.1 Objetivo General](#11-objetivo-general)
  - [1.2 Objetivos Específicos](#12-objetivos-especificos)
- [2. Principios de Matemáticas Discretas](#principios-de-matematicas-discretas)
- [3. Estructura del Proyecto](#estructura-del-proyecto)
- [4. Requisitos de Instalación](#)
- [5. Ejecución Local](#)
- [6. Instrucciones de Uso](#)
- [7. Ejemplo de Uso](#ejemplo-de-uso)
- [8. Tecnologías Utilizadas](#tecnologías-utilizadas)
- [9. Conclusiones](#conclusiones)

<br><br>

---

## 1. Objetivos

### 1.1 Objetivo General

Desarrollar un sistema para optimizar la planificación de tareas que, a partir de una lista de tareas, sus prioridades y sus dependencias, modele estas relaciones usando un grafo dirigido. El sistema deberá generar planes de ejecución válidos, detectar dependencias circulares que impidan una planificación coherente, y calcular la duración total del proyecto.

### 1.2 Objetivos Especificos

- Implementar un algoritmo DFS (búsqueda en profundidad) para la detección de dependencias circulares.

- Diseñar una interfaz gráfica para la interacción con el sistema.

- Generar múltiples secuencias de ejecución de tareas posibles.
<br><br>

---

## 2. Principios de Matematicas Discretas

- **Relaciones y sus propiedades (Ej. transitividad)**:
- **Relaciones de orden**:
- **Funciones (para asignar duraciones a tareas)**:
- **Complejidad de algoritmos**:
- **Grafos dirigidos**:
<br><br>

---

## 3. Estructura del Proyecto
``` txt
C:.
│   .npmrc                     # Configuración de npm
│   .prettierrc                # Configuración de Prettier
│   AGENTS.md                  # Info sobre agentes
│   components.json            # Configuración de componentes UI
│   index.html                 # Punto de entrada HTML
│   package-lock.json          # Versiones exactas de dependencias npm
│   package.json               # Metadatos del proyecto y dependencias
│   postcss.config.js          # Configuración de PostCSS
│   tailwind.config.ts         # Configuración de Tailwind CSS
│   tsconfig.json              # Configuración de TypeScript
│   vite.config.server.ts      # Configuración del servidor de desarrollo Vite
│   vite.config.ts             # Configuración de Vite
│
├───client                     # Frontend React
│   │   App.tsx                # Componente principal y rutas
│   │   global.css             # Estilos globales y Tailwind
│   │   vite-env.d.ts          # Tipos para variables de entorno de Vite
│   │
│   ├───components             # Componentes React reutilizables
│   │   │   Layout.tsx         # Diseño común de las páginas
│   │   │   MobileNav.tsx      # Navegación móvil
│   │   │   Sidebar.tsx        # Barra lateral de navegación
│   │   │
│   │   └───ui                 # Componentes de interfaz de usuario (Radix UI)
│   │           accordion.tsx
│   │           alert-dialog.tsx
│   │           alert.tsx
│   │           aspect-ratio.tsx
│   │           avatar.tsx
│   │           badge.tsx
│   │           breadcrumb.tsx
│   │           ...
│   │
│   ├───hooks                  # Hooks de React personalizados
│   │   use-mobile.tsx         # Detecta si es dispositivo móvil
│   │   use-toast.ts           # Muestra mensajes de notificación
│   │
│   ├───lib                    # Funciones de utilidad
│   │   utils.ts               # Funciones de utilidad general
│   │   utils.spec.ts          # Pruebas unitarias para utils.ts
│   │
│   └───pages                        # Componentes de las páginas
│       CriticalPathAnalysis.tsx     # Análisis de ruta del proyecto
│       Index.tsx                    # Página de inicio
│       NotFound.tsx                 # Página de error 404
│       TaskManagement.tsx           # Gestión de tareas
│
├───public                     # Archivos estáticos
│   favicon.png                # Icono del navegador
│   placeholder.svg            # Imagen de marcador de posición
│   robots.txt                 # Instrucciones para rastreadores web
│
├───server                     # Backend Express
│   │   index.ts               # Punto de entrada del servidor
│   │   node-build.ts          # Configuración del proyecto Node
│   │
│   ├───backend                      # Lógica del backend (Python)
│   │   │   api.py                   # API con FastAPI
│   │   │   dependency_analyzer.py   # Analiza dependencias y ciclos
│   │   │   graph_builder.py         # Construye el grafo de dependencias
│   │   │   requirements.txt         # Dependencias de Python
│   │   │   task.py                  # Define la clase Task
│   │   │   ___init__.py             # Marca el directorio como módulo de Python
│   │   │
│   │   └───__pycache__        # Cache de Python
│   │
│   └───routes                 # Rutas de la API (Node)
│       demo.ts                # Ruta de demostración
│
└───shared                     # Código compartido
    api.ts                     # Interfaces de datos (TypeScript)
```
<br><br>

---

## 4. Requisitos de Instalación

#### Requisitos Generales:
- Git (2.25 o superior): Git es un sistema de control de versiones que se utiliza para gestionar el código del proyecto. Puedes descargarlo e instalarlo desde este enlace: https://git-scm.com/downloads.

- Node.js (18 o superior): Node.js es un entorno de ejecución de JavaScript que se utiliza para ejecutar el frontend (interfaz de usuario) del proyecto. Puedes descargarlo e instalarlo desde este enlace: https://nodejs.org/en/download/.
Durante la instalación, asegúrate de que la opción "Add to PATH" esté seleccionada. Esto permitirá que puedas ejecutar comandos de Node.js desde la terminal.

- Python (3.11 o superior): Python es un lenguaje de programación que se utiliza para ejecutar el backend (servidor) del proyecto. Puedes descargarlo e instalarlo desde este enlace: https://www.python.org/downloads/.
Durante la instalación, asegúrate de que la opción "Add Python to PATH" esté seleccionada. Esto permitirá que puedas ejecutar comandos de Python desde la terminal.

#### Descargar el Código del Proyecto desde GitHub:
- Abre la línea de comandos (o terminal) y navega al directorio donde quieres guardar el proyecto. 

- Utiliza el siguiente comando, reemplazando "URL_DEL_REPOSITORIO" con la URL real del repositorio de GitHub:
``` bash
git clone URL_DEL_REPOSITORIO
```
Esto descargará el código del proyecto a una nueva carpeta con el mismo nombre que el repositorio.

#### Frontend
##### 1. Instalar Dependencias:
- Abre una terminal en el directorio `/client` y ejecuta el siguiente comando:
``` bash
npm install
```
Esto instalará todas las dependencias del frontend especificadas en el archivo `package.json`.
<br><br>

#### Backend
##### 1. Crear un Entorno Virtual (Recomendado):
- Crea un entorno virtual para aislar las dependencias del backend. Puedes utilizar `venv` o `virtualenv`.
``` bash
python3 -m venv venv  # Crea el entorno virtual
venv\Scripts\activate  # Activa el entorno virtual (Windows)
```
Se sugiere utilizar un entorno virtual para evitar conflictos con otras versiones de paquetes instaladas en tu sistema.

##### 2. Instalar Dependencias:
- Abre una terminal en el directorio `server/backend` y ejecuta el siguiente comando:
``` bash
pip install -r requirements.txt
```
Esto instalará todas las dependencias del backend especificadas en el archivo `requirements.txt`.
<br><br>

---

## 5. Ejecución Local


<br><br>

---

## 6. instrucciones de Uso

<br><br>

---

## 7. Ejemplo de Uso

| Tareas       | Importancia  | Dependende de|
|--------------|:------------:|-------------:|
| Tarea A      | 6/10         | NULL         |
| Tarea B      | 8/10         | Tarea C      |
| Tarea C      | 2/10         | Tarea A      |
<br><br>

---

## 8. Tecnologías Utilizadas

Principales tecnologías, frameworks y librerías utilizadas en el proyecto.

#### Backend
- Python
- FastAPI
- Uvicorn
- NetworkX
- Matplotlib

#### Frontend
- React
- Vite
- TypeScript
- Tailwind CSS
- React Router DOM
- Radix UI
- Lucide React icons

#### Otros
- Git
- VSCode
- npm
- pydantic
- jsdom
- cytoscape
- postcss
<br><br>

---

## 9. Conclusiones

- Acá se idica si se alcanzaron los objetivos 😁😁




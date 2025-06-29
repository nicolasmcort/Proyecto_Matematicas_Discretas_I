<img src="img/bart-simpson-los-simpson.gif" width="300" alt="Bart bailando :D">
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

Docente: Arles Ernesto Rodríguez Portela
<br><br>

---

## Contenido

- [1. Objetivos](#1-objetivos)
  - [1.1 Objetivo General](#11-objetivo-general)
  - [1.2 Objetivos Específicos](#12-objetivos-especificos)
- [Principios de Matemáticas Discretas](#principios-de-matematicas-discretas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Ejemplo de Uso](#ejemplo-de-uso)
- [Conclusiones](#conclusiones)
<br><br>

---

## 1. Objetivos

### 1.1 Objetivo General

Desarrollar un sistema para optimizar la planificación de tareas que, a partir de una lista de tareas, sus prioridades y sus dependencias, modele estas relaciones usando un grafo dirigido. El sistema deberá generar planes de ejecución válidos, detectar dependencias circulares que impidan una planificación coherente, y calcular la duración mínima total del proyecto y su ruta crítica asumiendo duraciones estimadas por tarea.

### 1.2 Objetivos Especificos

- Implementar un algoritmo DFS (búsqueda en profundidad) para la detección de dependencias circulares.

- Diseñar una interfaz gráfica para la interacción con el sistema.

- Generar múltiples secuencias de ejecución de tareas posibles.

- Integrar un módulo de análisis de ruta crítica para optimizar la duración del proyecto.
<br><br>

---

## Principios de Matematicas Discretas

- **Relaciones y sus propiedades (Ej. transitividad)**:
- **Relaciones de orden**:
- **Funciones (para asignar duraciones a tareas)**:
- **Complejidad de algoritmos**:
- **Grafos dirigidos**:
<br><br>

---

## Estructura del Proyecto
``` txt
Optimizador de Planificación de Tareas con Grafos
├── generator                          # Código fuente principal.
│   ├── app                            # Módulos centrales de la aplicación.
│   │   ├── app.py                     # Manejo del flujo general y la interacción.
│   │   ├── graph_builder.py           # Creación y gestión del grafo de dependencias.
│   │   ├── dependency_analyzer.py     # Detección de ciclos y generación de secuencias de ejecución.
│   │   ├── schedule_optimizer.py      # Calcula ruta crítica y duración mínima.
│   │   ├── data_loader.py             # Carga de datos de tareas.
│   │   └── models.py                  # Definición de las clases de datos (ej. Tarea).
│   ├── interface                      # Módulos para la interfaz de usuario.
│   │   ├── __init__.py                # Inicializa el paquete 'interface'.
│   │   ├── gui.py                     # Lógica principal de la interfaz gráfica (GUI).
│   │   ├── components                 # Componentes reutilizables de la UI.
│   │   │   ├── button.py              # Clase/funciones para botones.
│   │   │   ├── input_field.py         # Clase/funciones para campos de entrada.
│   │   │   └── display_widgets.py     # Widgets para mostrar resultados.
│   ├── __init__.py                    # Inicializa el paquete 'generator'.
│   └── main.py                        # Punto de entrada principal del proyecto.
├── LICENSE                            # Licencia del proyecto.
├── README.md                          # Documentación del proyecto.
├── requirements.txt                   # Dependencias de Python del proyecto.
```
<br><br>

---

## Ejemplo de Uso

| Tareas       | Importancia  | Dependende de|
|--------------|:------------:|-------------:|
| Tarea A      | 6/10         | NULL         |
| Tarea B      | 8/10         | Tarea C      |
| Tarea C      | 2/10         | Tarea A      |
<br><br>

---

## Conclusiones

- Acá se idica si se alcanzaron los objetivos 😁😁




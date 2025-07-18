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


## Backend  (PROVISIONAL!!!!!)
### Celda 1 del Jupyter Notebook (para models.py)
``` python
class Task:
    """
    Representa una tarea con sus propiedades: nombre, duración, prioridad y dependencias.
    """
    def __init__(self, name: str, duration: int, duration_unit: str = "minutes", priority: str = "Media", dependencies: list = None):
        self.name = name
        self.duration = duration
        self.duration_unit = duration_unit.lower() # Almacenar en minúsculas para consistencia
        self.priority = priority
        self.dependencies = dependencies if dependencies is not None else []

    def __repr__(self):
        return f"Task(name='{self.name}', duration={self.duration} {self.duration_unit}, priority='{self.priority}', dependencies={self.dependencies})"
    
    def __str__(self):
        return f"Tarea: {self.name}, Duración: {self.duration} {self.duration_unit}, Prioridad: {self.priority}, Depende de: {', '.join(self.dependencies) if self.dependencies else 'Ninguna'}"

    def to_dict(self):
        """Convierte el objeto Task a un diccionario para fácil almacenamiento o visualización."""
        return {
            "name": self.name,
            "duration": self.duration,
            "duration_unit": self.duration_unit,
            "priority": self.priority,
            "dependencies": self.dependencies
        }
```

### Celda 2 del Jupyter Notebook (para graph_builder.py)

``` python
import networkx as nx

class GraphBuilder:
    """
    Construye un grafo dirigido de dependencias a partir de una lista de objetos Task.
    """
    def __init__(self):
        self.graph = nx.DiGraph()

    @staticmethod
    def _convert_to_minutes(duration: int, unit: str) -> int:
        """Convierte una duración dada a minutos."""
        if unit == "hours":
            return duration * 60
        elif unit == "minutes":
            return duration
        else:
            raise ValueError(f"Unidad de duración no soportada: '{unit}'. Use 'hours' o 'minutes'.")

    def build_graph(self, tasks: list['Task']) -> nx.DiGraph:
        """
        Construye el grafo de dependencias.

        Args:
            tasks (list[Task]): Una lista de objetos Task.

        Returns:
            nx.DiGraph: El grafo dirigido construido.
        """
        self.graph.clear()
        for task in tasks:
            # Convertir la duración a minutos antes de almacenarla como atributo del nodo
            duration_in_minutes = self._convert_to_minutes(task.duration, task.duration_unit)
            
            if not self.graph.has_node(task.name):
                # Almacenar duración ya convertida en minutos y prioridad
                self.graph.add_node(task.name, duration=duration_in_minutes, priority=task.priority)
        
        for task in tasks:
            for dependency_name in task.dependencies:
                if not self.graph.has_node(dependency_name):
                    # Si una dependencia no está definida como tarea, añadirla con valores predeterminados
                    # (duración 0 y prioridad Baja, si no tiene un origen definido)
                    self.graph.add_node(dependency_name, duration=0, priority="Baja") 
                self.graph.add_edge(dependency_name, task.name)
        return self.graph

    def get_graph(self) -> nx.DiGraph:
        """
        Devuelve el grafo actualmente construido.
        """
        return self.graph
```

### Celda 3 Jupyter Notebook (para dependence_analizer.py)
``` python
import networkx as nx
import matplotlib.pyplot as plt
import time
from collections import deque

class DependencyAnalyzer:
    """
    Analiza el grafo de dependencias para detectar ciclos y generar órdenes topológicos.
    Permite la visualización estática del grafo y calcula métricas adicionales.
    """
    def __init__(self):
        pass

    def _draw_graph_static(self, G: nx.DiGraph, title: str):
        """
        Dibuja un grafo estático con colores por defecto.
        """
        plt.figure(figsize=(10, 8))
        plt.title(title)

        pos = None
        try:
            # DeprecationWarning: Consider using nx.nx_agraph.graphviz_layout instead.
            pos = nx.drawing.nx_pydot.graphviz_layout(G, prog='dot')
        except ImportError:
            pos = nx.spring_layout(G, k=0.8, iterations=50, seed=42)

        node_color_list = ['lightblue' for _ in G.nodes]

        nx.draw_networkx_nodes(G, pos, node_color=node_color_list, node_size=2000)
        
        nx.draw_networkx_edges(G, pos, edgelist=G.edges, edge_color='gray', 
                               width=1.5, arrows=True, arrowsize=30, alpha=0.7,
                               min_source_margin=15, min_target_margin=15,
                               connectionstyle='arc3,rad=0.2')
        
        nx.draw_networkx_labels(G, pos, font_size=10, font_weight='bold')
        
        plt.axis('off')
        plt.show()

    @staticmethod
    def _convert_minutes_to_hours(minutes: int) -> float:
        """Convierte una duración en minutos a horas."""
        return minutes / 60.0

    def detect_cycles(self, graph: nx.DiGraph, visualize: bool = False) -> str | None:
        """
        Detecta el primer ciclo encontrado en un grafo dirigido usando DFS.
        Devuelve el ciclo como una cadena "A -> B -> C -> A" o None si no hay ciclos.
        """
        white_set = set(graph.nodes())
        gray_set = set() # Nodos en la pila de recursión actual
        black_set = set() # Nodos completamente visitados
        
        found_cycle = [] # Almacena el primer ciclo encontrado
        path = deque() # Para reconstruir el camino

        def dfs_cycle_check(node):
            nonlocal found_cycle # Permite modificar found_cycle de la función externa

            if node in white_set:
                white_set.remove(node)
            gray_set.add(node)
            path.append(node)

            for neighbor in graph.successors(node):
                if neighbor in gray_set: # ¡Ciclo detectado!
                    cycle_start_index = list(path).index(neighbor)
                    current_cycle = list(path)[cycle_start_index:] + [neighbor]
                    found_cycle.append(" -> ".join(current_cycle)) # Formato de string
                    return True # Señaliza que un ciclo fue encontrado y detiene esta rama
                
                if neighbor in white_set: # Si es blanco, seguir explorando
                    if dfs_cycle_check(neighbor):
                        return True # Propagar la señal si se encontró un ciclo más abajo
            
            gray_set.remove(node)
            black_set.add(node)
            path.pop()
            return False

        # Se recorren todos los nodos. Se detiene en cuanto se encuentre el primer ciclo.
        for node in list(white_set): 
            if node in white_set:
                if dfs_cycle_check(node):
                    break # Detener la búsqueda global después de encontrar el primer ciclo
        
        if visualize:
            self._draw_graph_static(graph, "Grafo de Dependencias")
            
        return found_cycle[0] if found_cycle else None # Retorna el string del ciclo o None


    def get_topological_order(self, graph: nx.DiGraph, visualize: bool = False) -> str | None:
        """
        Calcula un orden topológico del grafo dirigido.
        Devuelve el orden como una cadena "A -> B -> C", incluyendo tiempo total y tareas críticas,
        o None si no existe (por ciclos).
        """
        try:
            order = list(nx.topological_sort(graph))
            
            total_duration_minutes = 0
            critical_tasks_count = 0
            
            for task_name in order:
                # Acceder a los atributos del nodo (duración ya está en minutos y prioridad)
                task_data = graph.nodes[task_name]
                # Usar .get para manejar posibles ausencias de atributos (aunque GraphBuilder debería añadirlos)
                total_duration_minutes += task_data.get('duration', 0) 
                if task_data.get('priority') == "Crítica":
                    critical_tasks_count += 1
            
            total_duration_hours = self._convert_minutes_to_hours(total_duration_minutes)

            # Formatear la cadena de salida
            order_str = " -> ".join(order)
            full_output_str = (
                f"Orden Topológico: {order_str}\n"
                f"Tiempo total para culminar: {total_duration_hours:.2f} horas\n"
                f"Tareas con prioridad 'Crítica': {critical_tasks_count}"
            )

            if visualize:
                self._draw_graph_static(graph, "Grafo con Orden Topológico Válido")
            
            return full_output_str
        except nx.NetworkXUnfeasible:
            if visualize:
                self._draw_graph_static(graph, "Grafo con Ciclos - No hay Orden Topológico")
            return None

# --- Ejemplo de Uso ---
if __name__ == '__main__':
    
    # Tareas para el ejemplo sin ciclos
    task1 = Task("A", 5, "hours", "Media", []) # 5 horas
    task2 = Task("B", 30, "minutes", "Alta", ["A"]) # 30 minutos
    task3 = Task("C", 1, "hours", "Crítica", ["A"]) # 1 hora (60 minutos)
    task4 = Task("D", 20, "minutes", "Baja", ["B"]) # 20 minutos
    task5 = Task("E", 1.5, "hours", "Crítica", ["B", "C"]) # 1.5 horas (90 minutos)
    task6 = Task("F", 60, "minutes", "Media", ["D"]) # 60 minutos
    task7 = Task("G", 0.5, "hours", "Alta", ["E", "F"]) # 0.5 horas (30 minutos)

    all_tasks_no_cycle = [task1, task2, task3, task4, task5, task6, task7]

    # --- Escenario SIN Ciclos ---
    builder_no_cycle = GraphBuilder()
    graph_no_cycle = builder_no_cycle.build_graph(all_tasks_no_cycle)

    analyzer = DependencyAnalyzer()

    print("--- Probando Grafo Sin Ciclos ---")
    cycles_no_cycle_str = analyzer.detect_cycles(graph_no_cycle, visualize=False) 
    topological_order_no_cycle_str = analyzer.get_topological_order(graph_no_cycle, visualize=False)

    # Dibuja el grafo una única vez para este escenario
    analyzer._draw_graph_static(graph_no_cycle, "Grafo de Dependencias (Sin Ciclos)")
    
    if cycles_no_cycle_str is None:
        print("Resultado: No se detectaron ciclos en este grafo.")
    else:
        print(f"Resultado: Ciclo encontrado: {cycles_no_cycle_str}")
    
    if topological_order_no_cycle_str is not None:
        print(topological_order_no_cycle_str) # Imprime el string con el orden, tiempo y tareas críticas
    else:
        print("No se pudo obtener el orden topológico.")


    # --- Escenario CON Ciclos ---
    print("\n" + "="*50 + "\n--- Probando Grafo CON Ciclos ---")
    # Tareas que forman un ciclo más una independiente
    task_cycle_X = Task("Tarea X", 1, "hours", "Media", ["Tarea Y"])
    task_cycle_Y = Task("Tarea Y", 1, "hours", "Crítica", ["Tarea X"]) # Tarea Crítica en ciclo
    task_independent = Task("Tarea Indep.", 2, "hours", "Baja", [])
    task_A = Task("A", 1, "hours", "Media", []) # Otra tarea para asegurar más de un ciclo posible
    task_B = Task("B", 1, "hours", "Media", ["A", "C"])
    task_C = Task("C", 1, "hours", "Media", ["B"]) # B-C-B ciclo

    # Ejemplo de un grafo con múltiples ciclos para probar la "primera búsqueda"
    all_tasks_with_cycle = [
        task_cycle_X, task_cycle_Y, task_independent, 
        task_A, task_B, task_C 
    ]

    builder_with_cycle = GraphBuilder()
    graph_with_cycle = builder_with_cycle.build_graph(all_tasks_with_cycle)

    cycles_with_cycle_str = analyzer.detect_cycles(graph_with_cycle, visualize=False) 
    topological_order_with_cycle_str = analyzer.get_topological_order(graph_with_cycle, visualize=False)

    # Dibuja el grafo una única vez para este escenario
    analyzer._draw_graph_static(graph_with_cycle, "Grafo de Dependencias (CON Ciclos)")
    
    if cycles_with_cycle_str is None:
        print("Resultado: No se detectaron ciclos en este grafo.")
    else:
        print(f"Resultado: Ciclo encontrado: {cycles_with_cycle_str}")

    if topological_order_with_cycle_str is not None:
        print(topological_order_with_cycle_str)
    else:
        print("No se pudo obtener el orden topológico debido a la presencia de ciclos.")
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




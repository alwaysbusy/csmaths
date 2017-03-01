---
title: Graph Components
layout: default
permalink: /topic/graph/components
---

## Graphs
A graph is mathematically defined as $G=<V_G, E_G, S_G, t_G, L_G, M_G>$ where:

* *V<sub>G</sub>*, *E<sub><G</sub>* - Finite set of Vertices (nodes) and Edges (lines)
* *D<sub>G</sub>*, $t_G:E_G->V_G$ - Functions assigning Source and target vertices to each Edges
* $L_G:V_G->ccL_V$, $M_G:E_G->ccL_E$ - Functions mapping labels to vertices and edges where $ccL$ is the label alphabet

These elements come together to create a graph representation:
<div class="cy-small" id="g1"></div><script type="text/javascript">
  g1 = cytoscape({container: document.getElementById("g1"),
  style: cyDefaultStyles,
  elements: [
    {data:{id:"a", label:"A"}},
    {data:{id:"b", label:"B"}},
    {data:{id:"ab", source:"a", target:"b", label:"C", targetarrow:"triangle"}}
  ]});
</script>
In this example A and B are labelled vertices and C is a directed, labelled edge.

There are three major types of graph:
* **Concrete** - Finite number of nodes and edges, all of which are labelled
* **Abstract** - Nodes may be replaced, and only edges are labelled
* **Isomorphic** - Different nodes and edges may exists in graphs, but they are structurally the same.

## Subgraphs
A subgraph exists when it contains a subset (proper or improper) of the nodes and edges of another graph.  This means that a graph may be a subgraph of itself in the form of an Inclusion (where two graphs share the same nodes and edges).  A graph may also be described as Induced if for every edge the correct nodes are given.  If a graph is under morphism then it is said to be an Image.

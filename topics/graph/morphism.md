---
title: Morphisms
layout: default
permalink: /topic/graph/morphism
---

A Graph Morphism is a structure preserving mapping of nodes and edges.  Morphisms can be defined as either **Injective** where layout is preserved, **Non-Injective** where layout can change and nodes may merge, and **Bijective** where an isomorphic change is made to the graph.

## Graph Rules
A graph rule can be mathematically defined as $r=<L <- K -> R>$ where $L <- K$ is removed, $K -> R$ is added and $K$ is preserved.  All rules applied must implicitly comply with the dangling condition, where no edge may be connected to a deleted node.  A group of rules can be used to make a Graph Transformation System $<ccL, ccR>$ containing the labels and rules of the system, or described as a Well Structured Flow Diagram.

## Connected Grammar
In addition to the facilities provided by graph rules, connected grammars also allow the use of non-terminal symbols and a start-graph from which all graphs compliant with those rules may be generated.  Every graph in a connected grammar must be sound (non-empty and connected) and complete (every non-empty connected graph over $ccL$ is included into the connected grammar).  A connected grammar is given as $C=<ccL, ccN, ccR, Start>$ where $ccL$ is the terminal alphabet, $ccN$ is the non-terminal alphabet, $ccR$ is the rules of the grammar, and *Start* is the start graph.

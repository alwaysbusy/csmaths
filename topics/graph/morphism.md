---
title: Morphisms
layout: default
permalink: /topic/graph/morphism
---

A Graph Morphism is a structure preserving mapping of nodes and edges.  Morphisms can be defined as either **Injective** where layout is preserved, **Non-Injective** where layout can change and nodes may merge, and **Bijective** where an isomorphic change is made to the graph.

## Graph Rules
A graph rule can be mathematically defined as $r=<L <- K -> R>$ where $L <- K$ is removed, $K -> R$ is added and $K$ is preserved.  All rules applied must implicitly comply with the dangling condition, where no edge may be connected to a deleted node.  A group of rules can be used to make a Graph Transformation System $<ccL, ccR>$ containing the labels and rules of the system, or described as a Well Structured Flow Diagram.

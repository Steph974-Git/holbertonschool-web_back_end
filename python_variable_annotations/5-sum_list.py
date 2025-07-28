#!/usr/bin/env python3
"""Ce script définit une fonction qui calcule la somme
d'une liste de floats."""

from typing import List  # Type pour l'annotation


def sum_list(input_list: List[float]) -> float:
    """Calcule la somme des éléments d'une liste de floats.

    input_list: liste de nombres flottants (List[float])
    Retourne: la somme des éléments de la liste (float)
    """
    return sum(input_list)

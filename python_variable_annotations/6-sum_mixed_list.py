#!/usr/bin/env python3
"""Ce script définit une fonction qui calcule la somme d'une liste
mixte (int et float)."""
from typing import List, Union  # Types pour l'annotation


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Calcule la somme des éléments d'une liste mixte (int et float).

    mxd_lst: liste de nombres entiers et/ou flottants (List[Union[int, float]])
    Retourne: la somme des éléments de la liste (float)
    """
    return sum(mxd_lst)

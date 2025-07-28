#!/usr/bin/env python3
"""Ce script définit une fonction qui retourne la longueur de
chaque élément d'un itérable de séquences."""
from typing import Iterable, Sequence, Tuple, List  # Types pour l'annotation


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Retourne une liste de tuples (élément, longueur) pour chaque
    séquence de lst.

    lst: itérable de séquences
    Retourne: liste de tuples (séquence, longueur)
    """
    return [(i, len(i)) for i in lst]

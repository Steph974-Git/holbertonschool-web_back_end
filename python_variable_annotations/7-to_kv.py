#!/usr/bin/env python3
"""Ce script définit une fonction qui retourne un
tuple (clé, carré de la valeur)."""

from typing import Tuple, Union  # Types pour l'annotation


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Retourne un tuple (clé, carré de la valeur) où le carré est un float.

    k: clé (str)
    v: valeur à élever au carré (int ou float)
    """
    return (k, float(v * v))

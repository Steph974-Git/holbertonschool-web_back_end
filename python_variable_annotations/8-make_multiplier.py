#!/usr/bin/env python3
"""Ce script définit une fonction qui crée un multiplicateur
sous forme de closure."""

from typing import Callable  # Type pour l'annotation


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Retourne une fonction qui multiplie son argument par multiplier.

    multiplier: valeur par laquelle multiplier (float)
    Retourne: une fonction qui multiplie son argument par multiplier
    """
    def inner_function(x: float) -> float:
        """Multiplie x par multiplier."""
        return x * multiplier
    return inner_function

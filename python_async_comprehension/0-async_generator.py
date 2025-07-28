#!/usr/bin/env python3
"""Ce script définit un générateur asynchrone qui produit
10 nombres aléatoires."""
import random
import asyncio
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """Génère 10 nombres aléatoires entre 0 et 10 avec une pause
    d'1 seconde entre chaque.

    Retourne: un générateur asynchrone de float
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)

#!/usr/bin/env python3
"""Ce script définit une coroutine asynchrone qui attend
un délai aléatoire."""
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """Attend un délai aléatoire entre 0 et max_delay secondes et le retourne.

    max_delay: valeur maximale du délai (int, par défaut 10)
    Retourne: le délai d'attente (float)
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay

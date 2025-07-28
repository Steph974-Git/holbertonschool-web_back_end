#!/usr/bin/env python3
"""Ce script mesure le temps d'exécution de 4 compréhensions asynchrones
lancées en parallèle."""
import importlib
import time
import asyncio

async_comprehension = importlib.import_module(
    '1-async_comprehension').async_comprehension


async def measure_runtime():
    """Mesure le temps d'exécution de 4 compréhensions asynchrones
    en parallèle.

    Retourne: temps total d'exécution (float)
    """
    start = time.perf_counter()
    await asyncio.gather(*[async_comprehension() for _ in range(4)])
    end = time.perf_counter()
    return end - start

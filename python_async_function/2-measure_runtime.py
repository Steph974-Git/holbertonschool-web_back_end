#!/usr/bin/env python3
"""Ce script mesure le temps moyen d'exécution de n coroutines wait_n."""
import asyncio
import importlib
import time

wait_n = importlib.import_module('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Mesure le temps moyen d'exécution de n coroutines wait_n.

    n: nombre de coroutines à lancer
    max_delay: délai maximal pour chaque attente
    Retourne: temps moyen par coroutine (float)
    """
    start = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    end = time.perf_counter()
    return (end - start) / n

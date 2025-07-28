#!/usr/bin/env python3
"""Ce script définit une coroutine qui lance plusieurs
coroutines wait_random en concurrence."""
import asyncio
from typing import List
import importlib

wait_random = importlib.import_module('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Lance n coroutines wait_random en concurrence et retourne les
    délais dans l'ordre d'achèvement.

    n: nombre de coroutines à lancer
    max_delay: délai maximal pour chaque attente
    Retourne: liste des délais (float) dans l'ordre d'achèvement
    """
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    results = []
    for coro in asyncio.as_completed(tasks):
        delay = await coro
        results.append(delay)
    return results

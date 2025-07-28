#!/usr/bin/env python3
"""Ce script définit une coroutine qui lance plusieurs tâches
task_wait_random en concurrence."""
import asyncio
from typing import List
import importlib

task_wait_random = importlib.import_module('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Lance n tâches task_wait_random en concurrence et retourne
    les délais dans l'ordre d'achèvement.

    n: nombre de tâches à lancer
    max_delay: délai maximal pour chaque attente
    Retourne: liste des délais (float) dans l'ordre d'achèvement
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    results = []
    for finished_task in asyncio.as_completed(tasks):
        result = await finished_task
        results.append(result)
    return results

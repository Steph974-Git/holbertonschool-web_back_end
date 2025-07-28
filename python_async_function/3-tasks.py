#!/usr/bin/env python3
"""Ce script définit une fonction qui retourne une tâche
asyncio pour wait_random."""
import asyncio
from typing import List
import importlib

wait_random = importlib.import_module('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Crée et retourne une tâche asyncio pour wait_random.

    max_delay: délai maximal pour l'attente
    Retourne: une tâche asyncio
    """
    return asyncio.create_task(wait_random(max_delay))

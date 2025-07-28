#!/usr/bin/env python3
"""Ce script utilise une compréhension asynchrone pour collecter les
valeurs d'un générateur asynchrone."""

import importlib

async_generator = importlib.import_module('0-async_generator').async_generator


async def async_comprehension():
    """Collecte toutes les valeurs produites par async_generator dans
    une liste.

    Retourne: liste des valeurs générées
    """
    result = [i async for i in async_generator()]
    return result

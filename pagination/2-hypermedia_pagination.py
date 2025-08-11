#!/usr/bin/env python3
"""Pagination module for popular baby names dataset."""

import csv
import math
from typing import List


def index_range(page: int, page_size: int) -> tuple:
    """
    Calculate start and end index for pagination.

    Args:
        page (int): Current page number (1-indexed).
        page_size (int): Number of items per page.

    Returns:
        tuple: (start_index, end_index)
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return start_index, end_index


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """Initialize Server instance."""
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Return cached dataset.

        Returns:
            List[List]: Dataset loaded from CSV file.
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Return a page of the dataset.

        Args:
            page (int): Page number (1-indexed).
            page_size (int): Number of items per page.

        Returns:
            List[List]: Page of dataset.
        """
        assert type(page) == int and page > 0
        assert type(page_size) == int and page_size > 0
        start_index, end_index = index_range(page, page_size)
        if start_index >= len(self.dataset()) or end_index > len(self.dataset()):
            return []
        return self.dataset()[start_index:end_index]

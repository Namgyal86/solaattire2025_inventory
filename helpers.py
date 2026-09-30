"""
Helper functions for safe data parsing and type conversion across Flask controllers.
"""

def to_float(val, default=0.0):
    """
    Safely converts any input value (string, None, empty string, int, float) to float.
    Returns `default` if conversion fails or if value is empty/None.
    """
    if val is None or val == "":
        return float(default)
    try:
        return float(str(val).strip())
    except (ValueError, TypeError):
        return float(default)


def to_int(val, default=0):
    """
    Safely converts any input value to int.
    Handles float strings (e.g., "12.0") and returns `default` if conversion fails.
    """
    if val is None or val == "":
        return int(default)
    try:
        return int(float(str(val).strip()))
    except (ValueError, TypeError):
        return int(default)


def to_str(val, default=""):
    """
    Safely converts input value to a stripped string, returning default if None.
    """
    if val is None:
        return default
    return str(val).strip()

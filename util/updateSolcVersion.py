import re

json_data = """
{
    "solc-0.6.10": "npm:solc@0.8.23",
    "solc-0.6.11": "npm:solc@0.8.23",
    "solc-0.6.12": "npm:solc@0.8.23",
    "solc-0.6.6": "npm:solc@0.8.23",
    "solc-0.6.7": "npm:solc@0.8.23",
    "solc-0.6.8": "npm:solc@0.8.23",
    "solc-0.6.9": "npm:solc@0.8.23",
    "solc-0.7.0": "npm:solc@0.8.23",
    "solc-0.7.1": "npm:solc@0.8.23",
    "solc-0.7.2": "npm:solc@0.8.23",
    "solc-0.7.3": "npm:solc@0.8.23",
    "solc-0.7.4": "npm:solc@0.8.23",
    "solc-0.7.5": "npm:solc@0.8.23",
    "solc-0.7.6": "npm:solc@0.8.23",
    "solc-0.8.0": "npm:solc@0.8.23",
    "solc-0.8.10": "npm:solc@0.8.23",
    "solc-0.8.11": "npm:solc@0.8.23",
    "solc-0.8.12": "npm:solc@0.8.23",
    "solc-0.8.13": "npm:solc@0.8.23",
    "solc-0.8.14": "npm:solc@0.8.23",
    "solc-0.8.15": "npm:solc@0.8.23",
    "solc-0.8.16": "npm:solc@0.8.23",
    "solc-0.8.17": "npm:solc@0.8.23",
    "solc-0.8.2": "npm:solc@0.8.23",
    "solc-0.8.3": "npm:solc@0.8.23",
    "solc-0.8.4": "npm:solc@0.8.23",
    "solc-0.8.5": "npm:solc@0.8.23",
    "solc-0.8.6": "npm:solc@0.8.23",
    "solc-0.8.8": "npm:solc@0.8.23",
    "solc-0.8.9": "npm:solc@0.8.23"
}
"""

# Use regular expression to replace the version numbers
updated_json = re.sub(r'"solc-(\d+\.\d+\.\d+)": "npm:solc@0.8.23"', r'"solc-\1": "npm:solc@\1"', json_data)

print(updated_json)
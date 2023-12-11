import re
import os

def process_file(file_path):
    with open(file_path, 'r') as file:
        file_content = file.read()

        # Define the patterns to search for
        patterns = [
            r'const\s+issue:\s+ASTIssue\s*=\s*{',
            r'const\s+issue:\s+RegexIssue\s*=\s*{'
        ]

        for pattern in patterns:
            match = re.search(pattern, file_content)
            if match:
                # Get the file name without extension
                base_name = os.path.basename(file_path)
                file_name_without_extension = os.path.splitext(base_name)[0]

                # Replace the found pattern with the desired content
                replacement = f'\\n\\tname: \"{file_name_without_extension}\",'
                file_content = re.sub(pattern, f'{match.group(0)}{replacement}', file_content)

    # Write the modified content back to the file
    with open(file_path, 'w') as file:
        file.write(file_content)

def delete_mistake(file_path):
    with open(file_path, 'r') as file:
        lines = file.readlines()

    # Remove lines containing the specified pattern "name: *"
    modified_lines = [line for line in lines if not re.search(r'name:\s*".*"', line)]

    # Write the modified content back to the file
    with open(file_path, 'w') as file:
        file.writelines(modified_lines)

def process_directory(directory_path):
    for root, dirs, files in os.walk(directory_path):
        for file_name in files:
            if file_name.endswith(".ts"):  # Modify the file extension as needed
                file_path = os.path.join(root, file_name)
                process_file(file_path)
        for dir in dirs:
            process_directory(dir)

def process_directory_mistake(directory_path):
    for root, dirs, files in os.walk(directory_path):
        for file_name in files:
            if file_name.endswith(".ts"):  # Modify the file extension as needed
                file_path = os.path.join(root, file_name)
                delete_mistake(file_path)
        for dir in dirs:
            process_directory(dir)

if __name__ == "__main__":
    choice = input("enter 1.for deleting mistake, 2.for writing")
    directory_path = input("Enter the top directory path: ")
    
    absolute_path = "/mnt/c/Users/adam idarrha/Documents/GitHub/PFS-staticAnalyzer/src/issues/"
    if(choice == 1):
        process_directory_mistake(absolute_path + directory_path)

    if(choice == 2):   
        process_directory(absolute_path + directory_path)

    if(choice == 3):
        delete_mistake(absolute_path + directory_path)
    print("Processing completed.")
